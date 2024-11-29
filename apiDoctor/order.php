<?php
require_once("Connection.php");



   $idDoc = $_POST['idDoc'];
   $idAcc = $_POST['idAcc'];
   $ngay = $_POST['ngayDen'];
   $gio = $_POST['gioDen'];
   $ghiChu = $_POST['ghiChu'];
  




   // Dữ liệu chưa tồn tại, tiến hành thêm vào cơ sở dữ liệu
   $query = "INSERT INTO tbl_cart (idDoc,idAcc,ngayDen,gioDen,ghiChu,trangthai) VALUES ('$idDoc','$idAcc','$ngay','$gio','$ghiChu','Chưa duyệt')";
   $result = $conn->query($query);

   if ($result) {
       echo "access";
   } else {
       echo "Lỗi khi thực hiện truy vấn: " . $conn->error;
   }
   

    // Tiếp tục xử lý dữ liệu và thực hiện truy vấn

$conn->close();
?>
