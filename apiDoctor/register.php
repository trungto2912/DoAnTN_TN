<?php
require_once("Connection.php");


if (isset($_POST['user'] ) && isset($_POST['sdt']) && isset($_POST['pass'])) {
   $user = $_POST['user'];
   $sdt = $_POST['sdt'];
   $pass = md5($_POST['pass']);


   // Kiểm tra xem dữ liệu đã tồn tại trong cơ sở dữ liệu hay chưa
   $query = "SELECT * FROM account WHERE phone = '$sdt'";
   $result = $conn->query($query);

   if ($result->num_rows > 0) {
       // Dữ liệu đã tồn tại, xử lý theo ý muốn (ví dụ: thông báo lỗi)
       echo "Số điện thoại đã tồn tại!";
   } else {
       // Dữ liệu chưa tồn tại, tiến hành thêm vào cơ sở dữ liệu
       $query = "INSERT INTO account (fullName,phone,pass,maQuyen) VALUES ('$user','$sdt', '$pass',3)";
       $result = $conn->query($query);

       if ($result) {
           echo "Đăng ký thành công!";
       } else {
           echo "Lỗi khi thực hiện truy vấn: " . $conn->error;
       }
   }

    // Tiếp tục xử lý dữ liệu và thực hiện truy vấn
} else {
    echo "Vui lòng cung cấp số điện thoại và mật khẩu.";
}

$conn->close();
?>
