<?php
require_once("Connection.php");

$idDoc = $_GET['idD'];

date_default_timezone_set('Asia/Ho_Chi_Minh');
$nowInVietnam = date('d-m-y');

$query = "SELECT tbl_cart.*, doctor.*, account.phone AS phoneAcc, account.fullName AS nameAcc
          FROM tbl_cart 
          INNER JOIN doctor ON tbl_cart.idDoc = doctor.id 
          INNER JOIN account ON tbl_cart.idAcc = account.id 
          WHERE tbl_cart.idDoc = $idDoc AND tbl_cart.trangthai != 'Đã hủy' AND DATE_FORMAT(STR_TO_DATE(tbl_cart.ngayDen, '%d/%m/%Y'), '%d-%m-%y') = '$nowInVietnam'";


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
