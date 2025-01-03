<?php
require_once("Connection.php");

// Lấy thông tin từ request
$idDoc = $_POST['idDoc'];
$oldPassword = md5($_POST['currentPassword']); // Mã hóa mật khẩu cũ bằng MD5
$newPassword = md5($_POST['newPassword']); 

// Kiểm tra mật khẩu cũ
$query = "SELECT * FROM doctor WHERE id = $idDoc AND pass = '$oldPassword'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // Nếu mật khẩu cũ khớp, cập nhật mật khẩu mới
    $updateQuery = "UPDATE doctor SET pass = '$newPassword' WHERE id = $idDoc";
    if ($conn->query($updateQuery) === TRUE) {
        $response = array("status" => "success", "message" => "Mật khẩu đã được đổi thành công");
    } else {
        $response = array("status" => "error", "message" => "Đã xảy ra lỗi khi đổi mật khẩu");
    }
} else {
    // Nếu mật khẩu cũ không khớp
    $response = array("status" => "error", "message" => "Mật khẩu cũ không đúng");
}

$conn->close();

// Trả về phản hồi dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
