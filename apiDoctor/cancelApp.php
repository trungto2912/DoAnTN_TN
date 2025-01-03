<?php
require_once("Connection.php");

// Lấy ID của lịch hẹn từ request
$cartID = $_GET['cartID'];

// Cập nhật trạng thái thành "Đã hủy"
$query = "UPDATE tbl_cart SET trangthai = 'Đã hủy' WHERE idDC = $cartID";

if ($conn->query($query) === TRUE) {
    $response = array("status" => "success", "message" => "Lịch hẹn đã được hủy thành công");
} else {
    $response = array("status" => "error", "message" => "Đã xảy ra lỗi khi hủy lịch hẹn");
}

$conn->close();

// Trả về phản hồi dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
