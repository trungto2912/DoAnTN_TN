<?php
require_once("Connection.php");

$phone = $_POST['sdt'];

// Kiểm tra thông tin đăng nhập trong cơ sở dữ liệu
$query = "SELECT * FROM doctor WHERE phone = '$phone'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
  // Lấy thông tin người dùng
  $row = $result->fetch_assoc();
  $name = $row['name'];
  $idDoc = $row['id'];

  // Đăng nhập thành công
  echo json_encode(array('status' => 'success', 'name' => $name, 'idDoc' => $idDoc));
} else {
  // Đăng nhập không thành công
  echo json_encode(array('status' => 'failure'));
}

$conn->close();
?>
