<?php
require_once("Connection.php");

$phone = $_POST['sdt'];
$password = md5($_POST['pass']);

// Kiểm tra thông tin đăng nhập trong cơ sở dữ liệu
$query = "SELECT * FROM account WHERE phone = '$phone' AND pass = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
  // Lấy thông tin người dùng
  $row = $result->fetch_assoc();
  $name = $row['fullName'];
  $idU = $row['id'];

  // Đăng nhập thành công
  echo json_encode(array('status' => 'success', 'name' => $name, 'idUser' => $idU));
} else {
  // Đăng nhập không thành công
  echo json_encode(array('status' => 'failure'));
}

$conn->close();
?>