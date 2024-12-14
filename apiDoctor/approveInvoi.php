<?php
require_once("Connection.php");

$cartID = $_GET['cartID'];

$query = "UPDATE tbl_cart SET  trangthai= 'Đã duyệt' WHERE idDC = $cartID";

if ($conn->query($query) === TRUE) {
  $response = array("status" => "success", "message" => "Lịch hèn đã được duyệt thành công");
} else {
  $response = array("status" => "error", "message" => "Đã xảy ra lỗi khi duyệt lịch hẹn");
}

$conn->close();

// Trả về phản hồi dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
