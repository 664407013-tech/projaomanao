<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$host = "localhost"; $db_name = "aomanao_db"; $username = "root"; $password = "";     

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->exec("set names utf8mb4");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) { echo json_encode(["status" => "error", "message" => "Database Error: " . $e->getMessage()]); exit; }

$data = json_decode(file_get_contents("php://input"));
$action = isset($data->action) ? $data->action : '';

$inventory = [
    'โรงแรม: ห้อง CV' => 2, 'โรงแรม: ห้องเตียงเดี่ยว' => 1, 'โรงแรม: ห้องเตียงคู่' => 9,
    'รีสอร์ท: ห้องเตียงคู่' => 3, 'รีสอร์ท: ห้องเตียงเดี่ยว' => 15,
    'ห้องประชุมใหญ่' => 1, 'ห้องประชุมเล็ก' => 1, 'Ao Manao Camp' => 1
];

if ($action === 'register') {
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = :email");
    $stmt->execute([':email' => $data->email]);
    if ($stmt->rowCount() > 0) { echo json_encode(["status" => "error", "message" => "อีเมลนี้มีผู้ใช้งานแล้ว!"]); exit; }
    $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    if ($stmt->execute([':name' => $data->name, ':email' => $data->email, ':password' => $hashed_password])) {
        echo json_encode(["status" => "success", "message" => "สมัครสมาชิกสำเร็จ!"]);
    } else echo json_encode(["status" => "error", "message" => "สมัครไม่ได้"]);
} 
else if ($action === 'login') {
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute([':email' => $data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user && password_verify($data->password, $user['password'])) {
        echo json_encode(["status" => "success", "message" => "เข้าสู่ระบบสำเร็จ", "user" => ["id" => $user['id'], "name" => $user['name'], "role" => $user['role']]]);
    } else echo json_encode(["status" => "error", "message" => "อีเมลหรือรหัสผ่านไม่ถูกต้อง!"]);
} 
else if ($action === 'get_availability') {
    $stmt = $conn->query("SELECT room_name, COUNT(*) as booked FROM bookings WHERE check_in <= CURDATE() AND check_out > CURDATE() GROUP BY room_name");
    $booked_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $status = [];
    foreach($inventory as $room => $total) {
        $booked = 0;
        foreach($booked_data as $b) { if($b['room_name'] === $room) { $booked = (int)$b['booked']; break; } }
        $status[$room] = [ "total" => $total, "available" => $total - $booked ];
    }
    echo json_encode(["status" => "success", "data" => $status]);
}
else if ($action === 'book_room') {
    $room = $data->room_name; $cin = $data->check_in; $cout = $data->check_out;
    $max_qty = isset($inventory[$room]) ? $inventory[$room] : 1;
    
    $stmt = $conn->prepare("SELECT COUNT(*) FROM bookings WHERE room_name = ? AND (check_in < ? AND check_out > ?)");
    $stmt->execute([$room, $cout, $cin]);
    if ($stmt->fetchColumn() >= $max_qty) {
        echo json_encode(["status" => "error", "message" => "ขออภัย! ห้องพักนี้ถูกจองเต็มแล้วในช่วงวันที่คุณเลือก"]); exit;
    }

    $stmt = $conn->prepare("INSERT INTO bookings (user_id, room_name, check_in, check_out, phone) VALUES (:uid, :room, :cin, :cout, :phone)");
    if ($stmt->execute([':uid' => $data->user_id, ':room' => $room, ':cin' => $cin, ':cout' => $cout, ':phone' => $data->phone])) {
        echo json_encode(["status" => "success", "message" => "จองห้องพักสำเร็จ!"]);
    } else echo json_encode(["status" => "error", "message" => "เกิดข้อผิดพลาดในการบันทึก"]);
}
else if ($action === 'get_bookings') {
    $stmt = $conn->query("SELECT b.*, u.name as customer_name FROM bookings b JOIN users u ON b.user_id = u.id ORDER BY b.created_at DESC");
    $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(["status" => "success", "data" => $bookings]);
}
else if ($action === 'delete_booking') {
    $stmt = $conn->prepare("DELETE FROM bookings WHERE id = :id");
    if ($stmt->execute([':id' => $data->id])) echo json_encode(["status" => "success", "message" => "ลบข้อมูลการจองสำเร็จ!"]);
    else echo json_encode(["status" => "error", "message" => "ลบไม่สำเร็จ"]);
}
else if ($action === 'update_booking') {
    $stmt = $conn->prepare("UPDATE bookings SET check_in = :cin, check_out = :cout, phone = :phone WHERE id = :id");
    if ($stmt->execute([':cin' => $data->check_in, ':cout' => $data->check_out, ':phone' => $data->phone, ':id' => $data->id])) {
        echo json_encode(["status" => "success", "message" => "อัปเดตข้อมูลการจองสำเร็จ!"]);
    } else echo json_encode(["status" => "error", "message" => "อัปเดตไม่สำเร็จ"]);
}
?>