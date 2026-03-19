const API_URL = 'api.php';

const roomsData = [
    { type: 'hotel', name: 'โรงแรม: ห้อง CV', price: '1,200', max: 2, desc: 'แอร์ / ทีวี / wifi / ตู้เย็น / เครื่องอาบน้ำอุ่น / กาต้มน้ำร้อน / ลานจอดรถ', images: ['images/hotel_cv_1.jpg', 'images/hotel_cv_2.jpg', 'images/hotel_cv_3.jpg'] },
    { type: 'hotel', name: 'โรงแรม: ห้องเตียงเดี่ยว', price: '800', max: 1, desc: 'แอร์ / ทีวี / wifi / ตู้เย็น / เครื่องอาบน้ำอุ่น / ลานจอดรถ', images: ['images/hotel_single_1.jpg', 'images/hotel_single_2.jpg', 'images/hotel_single_3.jpg'] },
    { type: 'hotel', name: 'โรงแรม: ห้องเตียงคู่', price: '800', max: 9, desc: 'แอร์ / ทีวี / wifi / ตู้เย็น / เครื่องอาบน้ำอุ่น / ลานจอดรถ', images: ['images/hotel_double_1.jpg', 'images/hotel_double_2.jpg', 'images/hotel_double_3.jpg'] },
    { type: 'resort', name: 'รีสอร์ท: ห้องเตียงคู่', price: '800', max: 3, desc: 'แอร์ / ทีวี / wifi / ตู้เย็น / เครื่องอาบน้ำอุ่น / ลานจอดรถ', images: ['images/resort_double_1.jpg', 'images/resort_double_2.jpg', 'images/resort_double_3.jpg'] },
    { type: 'resort', name: 'รีสอร์ท: ห้องเตียงเดี่ยว', price: '600', max: 15, desc: 'แอร์ / ทีวี / wifi / ตู้เย็น / เครื่องอาบน้ำอุ่น / ลานจอดรถ', images: ['images/resort_single_1.jpg', 'images/resort_single_2.jpg', 'images/resort_single_3.jpg'] },
    { type: 'meeting', name: 'ห้องประชุมใหญ่', price: '4,500', max: 1, desc: 'แอร์ 4, โปรเจคเตอร์, wifi, เครื่องเสียง, โต๊ะ-เก้าอี้ 60-80 ที่นั่ง', images: ['images/meeting_large_1.jpg', 'images/meeting_large_2.jpg', 'images/meeting_large_3.jpg'] },
    { type: 'meeting', name: 'ห้องประชุมเล็ก', price: '2,500', max: 1, desc: 'แอร์ 2, ทีวี, Wifi, เครื่องเสียง, โต๊ะ-เก้าอี้ 20 ที่นั่ง', images: ['images/meeting_small_1.jpg', 'images/meeting_small_2.jpg', 'images/meeting_small_3.jpg'] },
    { type: 'meeting', name: 'Ao Manao Camp', price: '2,500', max: 1, desc: 'เหมา 1 วัน | โปรเจคเตอร์, โต๊ะ 10, เก้าอี้ 60-80, ปิ้งย่าง, ห้องน้ำ 10', images: ['images/camp_1.jpg', 'images/camp_2.jpg', 'images/camp_3.jpg'] }
];

// 🌟 ใช้รูปภาพจริงของสถานที่ เก็บไว้ในโฟลเดอร์ images/ 🌟
const attractionsData = [
    { name: "หาดอ่าวมะนาว", type: "ทะเล/ที่เที่ยว", desc: "ชายหาดทอดยาว ต้นสนร่มรื่น ติดกับรีสอร์ทของเราเลยครับ เดินเล่นรับลมทะเลชิลๆ", img: "images/attraction_01_haad_ao_manao.jpg", mapQ: "หาดอ่าวมะนาว+นราธิวาส" },
    { name: "น้ำตกปาโจ", type: "ธรรมชาติ", desc: "น้ำตกที่มีชื่อเสียงที่สุดของนราธิวาส ร่มรื่น ธรรมชาติอุดมสมบูรณ์ เหมาะแก่การพักผ่อน", img: "images/attraction_02_namtok_pajo.jpg", mapQ: "น้ำตกปาโจ+นราธิวาส" },
    { name: "พระตำหนักทักษิณราชนิเวศน์", type: "ที่เที่ยว", desc: "สถาปัตยกรรมงดงามและประวัติศาสตร์ที่น่าสนใจ บรรยากาศร่มรื่นอยู่ติดทะเล", img: "images/attraction_03_thaksin_palace.jpg", mapQ: "พระตำหนักทักษิณราชนิเวศน์+นราธิวาส" },
    { name: "พุทธอุทยานเขากง", type: "วัด/ศาสนสถาน", desc: "ประดิษฐานพระพุทธทักษิณมิ่งมงคล องค์ใหญ่สีทองอร่าม ศูนย์รวมจิตใจของชาวนราธิวาส", img: "images/attraction_04_phuttha_uthayan.jpg", mapQ: "พุทธอุทยานเขากง+นราธิวาส" },
    { name: "มัสยิด 300 ปี ตะโละมาเนาะ", type: "ศาสนสถาน/โบราณสถาน", desc: "สถาปัตยกรรมไม้ตะเคียนทั้งหลังสุดคลาสสิก ปลูกสร้างโดยไม่ใช้ตะปูแม้แต่ตัวเดียว", img: "images/attraction_05_masjid_talo_manao.jpg", mapQ: "มัสยิดตะโละมาเนาะ+นราธิวาส" },
    { name: "ศาลเจ้าแม่กวนอิม", type: "วัด/ศาสนสถาน", desc: "ศูนย์รวมจิตใจของชาวไทยเชื้อสายจีนในจังหวัด แวะสักการะเพื่อความเป็นสิริมงคล", img: "images/attraction_06_guanyin_shrine.jpg", mapQ: "ศาลเจ้าแม่กวนอิม+นราธิวาส" },
    { name: "ตลาดน้ำยะกัง ๑๐๐ ปี", type: "ตลาด/ของกิน", desc: "แหล่งรวมของกินพื้นบ้าน ขนมโบราณของภาคใต้ บรรยากาศริมน้ำสุดชิล", img: "images/attraction_07_talad_yakang.jpg", mapQ: "ตลาดน้ำยะกัง+นราธิวาส" },
    { name: "ตลาดเช้าบางนาค", type: "ตลาด/ของกิน", desc: "ตลาดเช้าที่คึกคักที่สุด สัมผัสวิถีชีวิตชาวนราธิวาสยามเช้า ของกินเพียบ", img: "images/attraction_08_talad_bang_nak.jpg", mapQ: "ตลาดบางนาค+นราธิวาส" },
    { name: "ถนนคนเดิน เขื่อนท่าพระยาสาย", type: "ตลาด/ของกิน", desc: "เดินรับลมเย็นๆ ริมแม่น้ำบางนรา พร้อมสตรีทฟู้ดมากมาย เปิดช่วงเย็นถึงค่ำ", img: "images/attraction_09_walking_street.jpg", mapQ: "เขื่อนท่าพระยาสาย+นราธิวาส" },
    { name: "ร้านอาหารมังกรทอง", type: "ร้านอาหาร", desc: "ร้านอาหารเก่าแก่ชื่อดังของจังหวัด เมนูซีฟู้ดและอาหารไทย-จีน รสชาติจัดจ้าน", img: "images/attraction_10_mangkon_thong.jpg", mapQ: "ร้านมังกรทอง+นราธิวาส" },
    { name: "โรตีคิวซี (Roti QC)", type: "ของหวาน/คาเฟ่", desc: "ร้านเด็ดห้ามพลาดยามค่ำคืน โรตีกรอบนุ่มหนึบ ชาชักหอมเข้มข้นถึงใจ", img: "images/attraction_11_roti_qc.jpg", mapQ: "โรตีคิวซี+นราธิวาส" },
    { name: "ร้านข้าวยำ กะลูบี", type: "ร้านอาหารพื้นเมือง", desc: "ข้าวยำน้ำบูดูรสเด็ด อาหารเช้าเอกลักษณ์ของภาคใต้ อร่อยจนต้องบอกต่อ", img: "images/attraction_12_khao_yam.jpg", mapQ: "ข้าวยำกะลูบี+นราธิวาส" }
];

const productsData = [
    {
        name: "ผ้าบาติกสีสันสดใส (อ่าวมะนาวบาติก)",
        shortDesc: "ศิลปะบนผืนผ้าที่สะท้อนวิถีชีวิตและธรรมชาติของอ่าวมะนาว",
        history: "ผ้าบาติก หรือ ปาเต๊ะ เป็นงานฝีมือดั้งเดิมของชาวใต้ กลุ่ม 'อ่าวมะนาวบาติก' เกิดจากการรวมกลุ่มของแม่บ้านในชุมชน เพื่อสร้างรายได้เสริม โดยนำแรงบันดาลใจจากธรรมชาติรอบตัว เช่น เกลียวคลื่น ท้องทะเล และพรรณไม้ มาวาดลวดลายด้วยเทียนและลงสีสันที่สดใสเป็นเอกลักษณ์ ผ้าทุกผืนทำด้วยมืออย่างประณีต แสดงถึงภูมิปัญญาท้องถิ่นที่สืบทอดกันมา สามารถนำไปตัดเย็บเป็นเสื้อผ้า กระเป๋า หรือของที่ระลึกที่ทรงคุณค่า",
        images: ["images/product_batik_1.jpg", "images/product_batik_2.jpg", "images/product_batik_3.jpg"]
    },
    {
        name: "ข้าวเกรียบปลา (กรือโปะ)",
        shortDesc: "ของทานเล่นยอดฮิตประจำภาคใต้ กรอบ อร่อย ได้คุณค่าจากปลาทะเล",
        history: "'กรือโปะ' หรือ ข้าวเกรียบปลา เป็นของดีประจำจังหวัดนราธิวาสและจังหวัดชายแดนใต้ เกิดจากภูมิปัญญาในการถนอมอาหารของชาวประมงพื้นบ้าน โดยการนำปลาทะเลสดๆ (เช่น ปลาหลังเขียว หรือปลาทู) มาบดผสมกับแป้งมันสำปะหลัง ปรุงรส นวดเป็นแท่ง นำไปต้มจนสุกแล้วหั่นเป็นแผ่นบางๆ ก่อนนำไปตากแดดให้แห้ง เมื่อนำมาทอดจะฟูกรอบ หอมกลิ่นปลา ทานคู่กับน้ำจิ้มไก่รสเด็ด เป็นของฝากที่ใครมาเยือนก็ต้องซื้อติดมือกลับไป",
        images: ["images/product_keropok_1.jpg", "images/product_keropok_2.jpg", "images/product_keropok_3.jpg"]
    }
];

let availabilityStatus = {};

const viewData = {
    home: `<div class="fade-in px-4 mt-2">
            <div class="swiper mySwiper h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-12 relative group">
                <div class="swiper-wrapper">
                    <div class="swiper-slide relative"><img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1920" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-4"><h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">ยินดีต้อนรับสู่ อ่าวมะนาว รีสอร์ท</h1><p class="text-white text-xl md:text-2xl drop-shadow-md">สวรรค์แห่งการพักผ่อนของคุณ</p></div></div>
                    <div class="swiper-slide relative"><img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920" class="w-full h-full object-cover"></div>
                    <div class="swiper-slide relative"><img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920" class="w-full h-full object-cover"></div>
                </div>
                <div class="swiper-button-next text-white opacity-0 group-hover:opacity-100 transition"></div>
                <div class="swiper-button-prev text-white opacity-0 group-hover:opacity-100 transition"></div>
                <div class="swiper-pagination"></div>
            </div>
            
            <div class="max-w-4xl mx-auto mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">บรรยากาศ อ่าวมะนาว รีสอร์ท</h2>
                <div class="relative w-full overflow-hidden rounded-2xl shadow-lg border-4 border-white" style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/1VhAxdg9MQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>`,
    
    facility: `<div class="fade-in px-4 mt-2 max-w-7xl mx-auto"><h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">บริการและห้องพัก</h2><div class="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"><button onclick="switchCategory('hotel')" id="tab-btn-hotel" class="tab-btn px-5 md:px-8 py-2 md:py-3 rounded-full border-2 font-bold bg-white text-sm md:text-base">1. โรงแรม</button><button onclick="switchCategory('resort')" id="tab-btn-resort" class="tab-btn px-5 md:px-8 py-2 md:py-3 rounded-full border-2 font-bold bg-white text-sm md:text-base">2. รีสอร์ท</button><button onclick="switchCategory('meeting')" id="tab-btn-meeting" class="tab-btn px-5 md:px-8 py-2 md:py-3 rounded-full border-2 font-bold bg-white text-sm md:text-base">3. ห้องประชุม</button></div><div id="room-list-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"></div></div>`,
    
    attractions: `<div class="fade-in px-4 mt-2 max-w-7xl mx-auto"><h2 class="text-3xl font-bold text-gray-800 mb-2 text-center">ที่เที่ยว & ร้านอาหารแนะนำ (จ.นราธิวาส)</h2><p class="text-center text-gray-500 mb-8 border-b pb-4">สถานที่สวยๆ ของกินอร่อยๆ พร้อมแผนที่ Google Maps ให้นำทางได้ทันที</p><div id="attractions-container"></div></div>`,
    
    products: `<div class="fade-in px-4 mt-2 max-w-6xl mx-auto"><h2 class="text-3xl font-bold text-gray-800 mb-2 text-center">ผลิตภัณฑ์สินค้าของชุมชน</h2><p class="text-center text-gray-500 mb-8 border-b pb-4">สนับสนุนสินค้าท้องถิ่น ส่งเสริมรายได้ให้ชุมชนอ่าวมะนาว</p><div id="products-container" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div></div>`,

    admin_dashboard: `<div class="fade-in px-4 mt-2 max-w-6xl mx-auto"><div class="bg-white rounded-2xl p-4 md:p-8 shadow-lg border-t-4 border-emerald-600"><h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4"><i class="fa-solid fa-user-tie text-emerald-600 mr-2"></i> ระบบจัดการของ Admin</h2><div class="admin-table-wrap"><table class="w-full text-left border-collapse min-w-[640px]"><thead><tr class="bg-gray-100 text-gray-700"><th class="p-3 md:p-4 rounded-tl-xl text-sm">วันที่กดจอง</th><th class="p-3 md:p-4 text-sm">ชื่อลูกค้า</th><th class="p-3 md:p-4 text-sm">ห้องที่จอง</th><th class="p-3 md:p-4 text-sm">เช็คอิน - เช็คเอาท์</th><th class="p-3 md:p-4 text-sm">เบอร์โทรศัพท์</th><th class="p-3 md:p-4 text-center rounded-tr-xl text-sm">จัดการ</th></tr></thead><tbody id="admin-table-body"><tr><td colspan="6" class="text-center p-4 text-gray-500">กำลังโหลดข้อมูล...</td></tr></tbody></table></div></div></div>`
};

async function fetchAvailability() {
    try {
        const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'get_availability' }) });
        const data = await res.json();
        if(data.status === 'success') availabilityStatus = data.data;
    } catch(e) { console.error("Error fetching availability"); }
}

function switchCategory(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-emerald-600', 'text-white', 'border-emerald-600');
        btn.classList.add('text-gray-600', 'border-gray-300');
    });
    const activeBtn = document.getElementById(`tab-btn-${category}`);
    if(activeBtn) {
        activeBtn.classList.add('active', 'bg-emerald-600', 'text-white', 'border-emerald-600');
        activeBtn.classList.remove('text-gray-600', 'border-gray-300');
    }

    let html = '';
    roomsData.filter(room => room.type === category).forEach((room) => {
        const stat = availabilityStatus[room.name] || { available: room.max, total: room.max };
        const isFull = stat.available <= 0;
        
        const badgeHTML = isFull 
            ? `<span class="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm absolute top-4 left-4 z-10"><i class="fa-solid fa-ban mr-1"></i> วันนี้เต็มแล้ว</span>`
            : `<span class="bg-emerald-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm absolute top-4 left-4 z-10"><i class="fa-solid fa-check mr-1"></i> ว่าง ${stat.available}/${stat.total} ห้อง</span>`;

        let swiperSlides = '';
        room.images.forEach(img => { swiperSlides += `<div class="swiper-slide"><img src="${img}" class="h-56 w-full object-cover"></div>`; });

        html += `
            <div class="border rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col card-hover relative fade-in">
                ${badgeHTML}
                <div class="swiper roomSwiper w-full relative group">
                    <div class="swiper-wrapper">${swiperSlides}</div>
                    <div class="swiper-button-next opacity-0 group-hover:opacity-100 transition"></div>
                    <div class="swiper-button-prev opacity-0 group-hover:opacity-100 transition"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2">${room.name.split(': ')[1] || room.name}</h3>
                    <p class="text-emerald-600 font-bold text-xl mb-3">${room.price} บาท</p>
                    <p class="text-sm text-gray-600 mb-6 flex-grow"><b>สิ่งอำนวยความสะดวก:</b> ${room.desc}</p>
                    <button onclick="openBookingModal('${room.name}')" class="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition shadow-md">ดูคิวว่าง & จองที่นี่</button>
                </div>
            </div>`;
    });

    document.getElementById('room-list-container').innerHTML = html;
    setTimeout(() => {
        new Swiper(".roomSwiper", { loop: true, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
    }, 100);
}

function renderAttractions() {
    let html = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">';
    attractionsData.forEach(item => {
        html += `
            <div class="border rounded-2xl bg-white shadow-sm overflow-hidden card-hover flex flex-col">
                <img src="${item.img}" class="h-44 md:h-48 object-cover w-full" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'" loading="lazy">
                <div class="p-4 flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-base md:text-lg text-emerald-800 pr-2">${item.name}</h3>
                        <span class="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full whitespace-nowrap">${item.type}</span>
                    </div>
                    <p class="text-sm text-gray-600">${item.desc}</p>
                </div>
                <div class="w-full attraction-map bg-gray-200 border-t" style="height:140px;">
                    <iframe src="https://www.google.com/maps?q=$${item.mapQ}&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        `;
    });
    html += '</div>';
    document.getElementById('attractions-container').innerHTML = html;
}

function renderProducts() {
    let html = '';
    productsData.forEach((product) => {
        let swiperSlides = '';
        product.images.forEach(img => {
            swiperSlides += `<div class="swiper-slide"><img src="${img}" class="h-64 md:h-80 w-full object-cover"></div>`;
        });

        html += `
            <div class="border rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col card-hover fade-in">
                <div class="swiper productSwiper w-full relative group">
                    <div class="swiper-wrapper">${swiperSlides}</div>
                    <div class="swiper-button-next opacity-0 group-hover:opacity-100 transition"></div>
                    <div class="swiper-button-prev opacity-0 group-hover:opacity-100 transition"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-2xl font-bold text-emerald-800 mb-2">${product.name}</h3>
                    <p class="text-emerald-600 font-semibold mb-4 border-b pb-4">${product.shortDesc}</p>
                    <div class="bg-gray-50 p-5 rounded-xl flex-grow">
                        <h4 class="font-bold text-gray-800 mb-2 flex items-center"><i class="fa-solid fa-book-open text-emerald-600 mr-2"></i>เรื่องราวความเป็นมา :</h4>
                        <p class="text-sm text-gray-600 leading-relaxed indent-6">${product.history}</p>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('products-container').innerHTML = html;
    
    setTimeout(() => {
        new Swiper(".productSwiper", { 
            loop: true, 
            pagination: { el: ".swiper-pagination", clickable: true }, 
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } 
        });
    }, 100);
}

async function navigate(page) {
    if (page === 'admin_dashboard' && localStorage.getItem('role') !== 'admin') { alert("สงวนสิทธิ์เฉพาะผู้ดูแลระบบ"); return navigate('home'); }
    
    document.getElementById('app-content').innerHTML = viewData[page];
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active', 'text-emerald-600', 'font-bold'));
    if(document.getElementById(`btn-${page}`)) document.getElementById(`btn-${page}`).classList.add('active', 'text-emerald-600', 'font-bold');
    
    if(page === 'home') new Swiper(".mySwiper", { loop: true, autoplay: { delay: 3500 }, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
    if(page === 'facility') { await fetchAvailability(); switchCategory('hotel'); } 
    if(page === 'attractions') renderAttractions(); 
    if(page === 'products') renderProducts();
    if(page === 'admin_dashboard') loadAdminData();
}

// ===== MOBILE NAV =====
function openMobileNav() {
    document.getElementById('mobile-nav-drawer').classList.add('open');
    document.getElementById('mobile-nav-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
    document.getElementById('mobile-nav-drawer').classList.remove('open');
    document.getElementById('mobile-nav-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function toggleModal(id, show) { document.getElementById(id).classList[show ? 'remove' : 'add']('hidden'); }
function switchModal(closeId, openId) { toggleModal(closeId, false); toggleModal(openId, true); }

function checkLoginStatus() {
    const user = localStorage.getItem('user');
    const authContainer = document.getElementById('auth-container');
    const mobileAuth = document.getElementById('mobile-auth-container');
    const navMenu = document.getElementById('nav-menu');
    if(document.getElementById('btn-admin')) document.getElementById('btn-admin').remove();

    if (user) {
        const logoutBtn = `<button onclick="handleLogout()" class="bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-500 hover:text-white transition text-sm">ออกจากระบบ</button>`;
        authContainer.innerHTML = logoutBtn;
        if (mobileAuth) mobileAuth.innerHTML = `<p class="text-xs text-gray-500 mb-2">เข้าสู่ระบบในชื่อ: <strong>${user}</strong></p>` + logoutBtn.replace('px-4 py-2', 'w-full py-2 text-center');
        if (localStorage.getItem('role') === 'admin') {
            navMenu.insertAdjacentHTML('beforeend', `<button class="nav-btn text-emerald-600 font-bold py-2" id="btn-admin" onclick="navigate('admin_dashboard')">จัดการระบบ (Admin)</button>`);
        }
    } else {
        const loginBtn = `<button onclick="toggleModal('loginModal', true)" class="bg-emerald-600 text-white px-4 py-2 rounded-full font-bold hover:bg-emerald-700 transition text-sm">เข้าสู่ระบบ</button>`;
        authContainer.innerHTML = loginBtn;
        if (mobileAuth) mobileAuth.innerHTML = loginBtn.replace('px-4 py-2', 'w-full py-2 text-center block');
    }
}

function handleLogout() { localStorage.clear(); checkLoginStatus(); navigate('home'); }

async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'register', name: document.getElementById('regName').value, email: document.getElementById('regEmail').value, password: document.getElementById('regPass').value }) });
    const data = await res.json();
    alert(data.message); if(data.status === 'success') switchModal('registerModal', 'loginModal');
}

async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'login', email: document.getElementById('loginEmail').value, password: document.getElementById('loginPass').value }) });
    const data = await res.json();
    if (data.status === 'success') {
        localStorage.setItem('user_id', data.user.id); localStorage.setItem('user', data.user.name); localStorage.setItem('role', data.user.role);
        alert(`เข้าสู่ระบบสำเร็จ! สวัสดีคุณ ${data.user.name}`); 
        toggleModal('loginModal', false); checkLoginStatus();
        if(data.user.role === 'admin') navigate('admin_dashboard'); else navigate('facility');
    } else alert(data.message);
}

function openBookingModal(roomName) {
    if (!localStorage.getItem('user')) { alert("กรุณาเข้าสู่ระบบก่อนจองห้องพักครับ"); return toggleModal('loginModal', true); }
    document.getElementById('bookRoomName').value = roomName;
    document.getElementById('checkInDate').value = "";
    document.getElementById('checkOutDate').value = "";
    document.getElementById('bookPhone').value = "";
    // reset การชำระเงิน
    document.querySelectorAll('input[name="paymentMethod"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="transferType"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="creditBank"]').forEach(r => r.checked = false);
    document.getElementById('transferDetail').classList.add('hidden');
    document.getElementById('cashDetail').classList.add('hidden');
    document.getElementById('qrDetail').classList.add('hidden');
    document.getElementById('creditDetail').classList.add('hidden');
    toggleModal('bookingModal', true);
}

function togglePaymentDetail(type) {
    document.getElementById('transferDetail').classList.toggle('hidden', type !== 'transfer');
    document.getElementById('cashDetail').classList.toggle('hidden', type !== 'cash');
    if (type !== 'transfer') {
        document.querySelectorAll('input[name="transferType"]').forEach(r => r.checked = false);
        document.getElementById('qrDetail').classList.add('hidden');
        document.getElementById('creditDetail').classList.add('hidden');
    }
}

// เพิ่ม event listener สำหรับ transferType หลัง DOM โหลด
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus(); navigate('home');
    document.querySelectorAll('input[name="transferType"]').forEach(r => {
        r.addEventListener('change', function() {
            document.getElementById('qrDetail').classList.toggle('hidden', this.value !== 'qr');
            document.getElementById('creditDetail').classList.toggle('hidden', this.value !== 'credit');
        });
    });
});

function calcNights(cin, cout) {
    const d1 = new Date(cin), d2 = new Date(cout);
    return Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
}

function getRoomPrice(roomName) {
    const room = roomsData.find(r => r.name === roomName);
    return room ? parseInt(room.price.replace(',', '')) : 0;
}

async function handleBooking(e) {
    e.preventDefault();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) { alert("กรุณาเลือกวิธีการชำระเงินครับ"); return; }
    if (paymentMethod.value === 'transfer') {
        const transferType = document.querySelector('input[name="transferType"]:checked');
        if (!transferType) { alert("กรุณาเลือกช่องทางโอนเงินครับ"); return; }
        if (transferType.value === 'credit') {
            const creditBank = document.querySelector('input[name="creditBank"]:checked');
            if (!creditBank) { alert("กรุณาเลือกธนาคารบัตรเครดิตครับ"); return; }
        }
    }

    const roomName = document.getElementById('bookRoomName').value;
    const checkIn  = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    const phone    = document.getElementById('bookPhone').value;
    const payment  = paymentMethod.value;
    const transferType = document.querySelector('input[name="transferType"]:checked');
    const creditBank   = document.querySelector('input[name="creditBank"]:checked');

    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'book_room', user_id: localStorage.getItem('user_id'), room_name: roomName, check_in: checkIn, check_out: checkOut, phone: phone }) });
    const data = await res.json();

    if (data.status === 'success') {
        toggleModal('bookingModal', false);
        fetchAvailability().then(() => { if(document.getElementById('room-list-container')) switchCategory(document.querySelector('.tab-btn.active').id.replace('tab-btn-', '')); });
        showReceipt({
            customerName: localStorage.getItem('user'),
            roomName, checkIn, checkOut, phone, payment,
            transferType: transferType ? transferType.value : null,
            creditBank: creditBank ? creditBank.value : null,
            bookingDate: new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })
        });
    } else {
        alert(data.message);
    }
}

function showReceipt(info) {
    const nights = calcNights(info.checkIn, info.checkOut);
    const price  = getRoomPrice(info.roomName);
    const total  = nights * price;
    const bookingRef = 'AOM' + Date.now().toString().slice(-6);

    const bankNames = {
        krungthai:  { label: 'ธนาคารกรุงไทย (KTB)',       color: '#1ba5e0' },
        bangkokbank:{ label: 'ธนาคารกรุงเทพ (BBL)',        color: '#1e3a8a' },
        kasikorn:   { label: 'ธนาคารกสิกรไทย (KBANK)',     color: '#138f2d' },
        scb:        { label: 'ธนาคารไทยพาณิชย์ (SCB)',     color: '#4e2d8e' },
        gsb:        { label: 'ธนาคารออมสิน (GSB)',         color: '#9b1b30' }
    };

    let paymentLabel = '';
    let paymentNote  = '';
    if (info.payment === 'cash') {
        paymentLabel = '<span class="text-blue-600 font-bold"><i class="fa-solid fa-money-bill mr-1"></i>เงินสด (ชำระวันเช็คอิน)</span>';
        paymentNote  = '<p class="text-xs text-gray-400 mt-1">กรุณามาถึงก่อน 14:00 น. วันเช็คอิน</p>';
    } else if (info.transferType === 'qr') {
        paymentLabel = '<span class="text-emerald-600 font-bold"><i class="fa-solid fa-qrcode mr-1"></i>QR PromptPay</span>';
        paymentNote  = `<div class="mt-3 text-center"><img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=promptpay:0888011222" class="w-24 h-24 mx-auto border rounded-lg"><p class="text-xs text-gray-500 mt-1">พร้อมเพย์: 088-801-1222</p></div>`;
    } else if (info.transferType === 'credit' && info.creditBank) {
        const bank = bankNames[info.creditBank];
        paymentLabel = `<span class="font-bold" style="color:${bank.color}"><i class="fa-solid fa-credit-card mr-1"></i>บัตรเครดิต</span>`;
        paymentNote  = `
            <div class="mt-2 flex items-center gap-2 bg-gray-50 border rounded-lg p-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style="background:${bank.color}">
                    <i class="fa-solid fa-building-columns text-white text-xs"></i>
                </div>
                <span class="text-sm font-bold" style="color:${bank.color}">${bank.label}</span>
            </div>
            <p class="text-xs text-gray-400 mt-2">ชำระ ณ เคาน์เตอร์โรงแรม หรือโทร 088-801-1222</p>`;
    }

    const statusBadge = info.payment === 'cash'
        ? '<span class="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">รอชำระวันเช็คอิน</span>'
        : '<span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">รอการโอนเงิน</span>';

    document.getElementById('receiptContent').innerHTML = `
        <div id="printArea">
            <div class="text-center mb-6">
                <i class="fa-solid fa-umbrella-beach text-4xl text-emerald-600 mb-2"></i>
                <h2 class="text-lg font-bold text-gray-800">โรงแรมอ่าวมะนาว & รีสอร์ท</h2>
                <p class="text-sm text-gray-500">จ.นราธิวาส | โทร: 088-801-1222</p>
                <div class="mt-2">${statusBadge}</div>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 mb-4 space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">เลขที่จอง</span><span class="font-bold text-emerald-700">${bookingRef}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">วันที่จอง</span><span class="font-medium">${info.bookingDate}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">ชื่อผู้จอง</span><span class="font-medium">${info.customerName}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">เบอร์โทร</span><span class="font-medium">${info.phone}</span></div>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4 space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-gray-600">ห้องพัก</span><span class="font-bold text-emerald-800">${info.roomName}</span></div>
                <div class="flex justify-between"><span class="text-gray-600">เช็คอิน</span><span class="font-medium">${info.checkIn}</span></div>
                <div class="flex justify-between"><span class="text-gray-600">เช็คเอาท์</span><span class="font-medium">${info.checkOut}</span></div>
                <div class="flex justify-between"><span class="text-gray-600">จำนวนคืน</span><span class="font-medium">${nights} คืน</span></div>
                <div class="border-t border-emerald-200 pt-2 flex justify-between"><span class="text-gray-600">ราคาต่อคืน</span><span class="font-medium">${price.toLocaleString()} บาท</span></div>
                <div class="flex justify-between text-base font-bold"><span class="text-gray-800">ยอดรวมทั้งสิ้น</span><span class="text-emerald-600 text-lg">${total.toLocaleString()} บาท</span></div>
            </div>
            <div class="bg-white border rounded-xl p-4 mb-4 text-sm">
                <p class="text-gray-500 mb-1">วิธีชำระเงิน</p>
                <div>${paymentLabel}</div>
                ${paymentNote}
            </div>
            <p class="text-center text-xs text-gray-400">ขอบคุณที่เลือกใช้บริการ อ่าวมะนาว รีสอร์ท 🌊</p>
        </div>
    `;
    toggleModal('receiptModal', true);
}

function printReceipt() {
    const content = document.getElementById('printArea').innerHTML;
    const win = window.open('', '_blank', 'width=600,height=800');
    win.document.write(`
        <!DOCTYPE html><html><head>
        <meta charset="UTF-8">
        <title>ใบยืนยันการจอง - อ่าวมะนาว รีสอร์ท</title>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
            * { margin:0; padding:0; box-sizing:border-box; }
            body { font-family:'Prompt',sans-serif; padding:24px; color:#1f2937; font-size:14px; }
            .text-center { text-align:center; }
            .text-emerald-600 { color:#059669; }
            .text-emerald-700 { color:#047857; }
            .text-emerald-800 { color:#065f46; }
            .text-purple-600 { color:#9333ea; }
            .text-blue-600 { color:#2563eb; }
            .text-green-700 { color:#15803d; }
            .text-yellow-700 { color:#a16207; }
            .text-gray-400 { color:#9ca3af; }
            .text-gray-500 { color:#6b7280; }
            .text-gray-600 { color:#4b5563; }
            .text-gray-800 { color:#1f2937; }
            .font-bold { font-weight:700; }
            .font-medium { font-weight:500; }
            .text-sm { font-size:12px; }
            .text-xs { font-size:11px; }
            .text-base { font-size:14px; }
            .text-lg { font-size:16px; }
            .mb-1{margin-bottom:4px;} .mb-2{margin-bottom:8px;} .mb-3{margin-bottom:12px;} .mb-4{margin-bottom:16px;} .mb-6{margin-bottom:24px;}
            .mt-1{margin-top:4px;} .mt-2{margin-top:8px;} .mt-3{margin-top:12px;}
            .pt-2{padding-top:8px;} .p-4{padding:16px;}
            .bg-gray-50 { background:#f9fafb; }
            .bg-emerald-50 { background:#ecfdf5; }
            .border { border:1px solid #e5e7eb; }
            .border-emerald-200 { border-color:#a7f3d0; }
            .border-t { border-top:1px solid #e5e7eb; }
            .rounded-xl { border-radius:12px; }
            .rounded-lg { border-radius:8px; }
            .rounded-full { border-radius:999px; }
            .space-y-2 > * + * { margin-top:8px; }
            .flex { display:flex; }
            .justify-between { justify-content:space-between; }
            .inline-block { display:inline-block; }
            .bg-yellow-100 { background:#fef9c3; padding:4px 12px; }
            .bg-green-100 { background:#dcfce7; padding:4px 12px; }
            .w-24 { width:96px; } .h-24 { height:96px; }
            .mx-auto { margin:0 auto; display:block; }
            @media print { body { padding:0; } button { display:none; } }
        </style>
        </head><body>${content}
        <div style="text-align:center;margin-top:24px;">
            <button onclick="window.print()" style="background:#059669;color:white;border:none;padding:10px 32px;border-radius:8px;font-family:Prompt,sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🖨️ พิมพ์</button>
        </div>
        </body></html>
    `);
    win.document.close();
}

async function loadAdminData() {
    try {
        const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'get_bookings' }) });
        const data = await res.json();
        let html = '';
        if (data.data.length === 0) html = `<tr><td colspan="6" class="text-center p-4 text-gray-500">ยังไม่มีข้อมูลการจอง</td></tr>`;
        else {
            data.data.forEach(b => {
                html += `
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4 text-sm text-gray-500">${b.created_at.split(' ')[0]}</td>
                    <td class="p-4 font-bold text-emerald-700">${b.customer_name}</td>
                    <td class="p-4">${b.room_name}</td>
                    <td class="p-4 text-sm">${b.check_in} <br>ถึง ${b.check_out}</td>
                    <td class="p-4">${b.phone}</td>
                    <td class="p-4 text-center">
                        <button onclick="openEditModal(${b.id}, '${b.room_name}', '${b.check_in}', '${b.check_out}', '${b.phone}')" class="text-blue-500 hover:text-blue-700 bg-blue-100 p-2 rounded-lg mx-1" title="แก้ไข"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteBooking(${b.id})" class="text-red-500 hover:text-red-700 bg-red-100 p-2 rounded-lg mx-1" title="ลบ"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>`;
            });
        }
        document.getElementById('admin-table-body').innerHTML = html;
    } catch (e) { document.getElementById('admin-table-body').innerHTML = `<tr><td colspan="6" class="text-center p-4 text-red-500">โหลดข้อมูลไม่สำเร็จ</td></tr>`; }
}

function openEditModal(id, roomName, checkIn, checkOut, phone) {
    document.getElementById('editBookingId').value = id;
    document.getElementById('editRoomName').value = roomName;
    document.getElementById('editCheckInDate').value = checkIn;
    document.getElementById('editCheckOutDate').value = checkOut;
    document.getElementById('editPhone').value = phone;
    toggleModal('editBookingModal', true);
}

async function handleEditBooking(e) {
    e.preventDefault();
    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'update_booking', id: document.getElementById('editBookingId').value, check_in: document.getElementById('editCheckInDate').value, check_out: document.getElementById('editCheckOutDate').value, phone: document.getElementById('editPhone').value }) });
    const data = await res.json();
    alert(data.message);
    if(data.status === 'success') { toggleModal('editBookingModal', false); loadAdminData(); }
}

async function deleteBooking(id) {
    if(confirm("คุณแน่ใจหรือไม่ว่าต้องการ 'ลบ' ข้อมูลการจองนี้?")) {
        const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'delete_booking', id: id }) });
        const data = await res.json();
        alert(data.message);
        if(data.status === 'success') loadAdminData();
    }
}

// DOMContentLoaded ถูกย้ายไปรวมในฟังก์ชัน openBookingModal แล้ว