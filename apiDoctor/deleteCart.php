<?php
require_once("Connection.php");

$cartID = $_GET['cartID'];

$query = "DELETE FROM tbl_cart WHERE idDC = $cartID";

if ($conn->query($query) === TRUE) {
  $response = array("status" => "success", "message" => "Lịch hèn đã được xóa thành công");
} else {
  $response = array("status" => "error", "message" => "Đã xảy ra lỗi khi xóa lịch hẹn");
}

$conn->close();

// Trả về phản hồi dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
