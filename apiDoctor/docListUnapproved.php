<?php
require_once("Connection.php");

$idDoc = $_GET['idD'];


$query = "SELECT tbl_cart.*, doctor.*, account.phone AS phoneAcc, account.fullName AS nameAcc
          FROM tbl_cart 
          INNER JOIN doctor ON tbl_cart.idDoc = doctor.id 
          INNER JOIN account ON tbl_cart.idAcc = account.id 
          WHERE tbl_cart.idDoc = $idDoc AND trangthai = 'Chưa duyệt'
          ORDER BY STR_TO_DATE(tbl_cart.ngayDen, '%d/%m/%Y')";


$result = $conn->query($query);

$data = array(); // Mảng lưu trữ dữ liệu

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
header('Content-Type: application/json'); // Đặt loại nội dung là JSON
echo json_encode($data);

$conn->close();


?>
