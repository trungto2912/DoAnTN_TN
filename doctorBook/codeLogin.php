<?php
include('dbconfig.php');
session_start();
if (isset($_POST['login'])) {
    $phone = $_POST['phone'];
    $pass = md5($_POST['pass']);

    // Chuẩn bị câu truy vấn
    $stmt = $conn->prepare("SELECT * FROM account WHERE phone = ?");
    $stmt->bind_param("s", $phone);

    // Thực thi câu truy vấn
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row && $row['pass'] == $pass) {
        if ($row['maQuyen'] == "1" || $row['maQuyen'] == "2") {
            $_SESSION['isLogin'] = $row;
            header('location: Admin/index.php');
        } else {
            $_SESSION['status'] = "Quyền truy cập không hợp lệ";
            header('location: index.php');
        }
    } else {
        $_SESSION['status'] = "Tên tài khoản hoặc mật khẩu không đúng";
        header('location: index.php');
    }

    // Đóng kết nối
    $stmt->close();
}
?>
