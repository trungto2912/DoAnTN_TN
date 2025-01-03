<?php
require_once("Connection.php");

// Lấy các tham số từ yêu cầu POST
$cartID = $_POST['cartID'];
$idDoc = $_POST['idDoc'];
$idAcc = $_POST['idAcc'];
$medicalNote = $_POST['medicalNote'];

// Kiểm tra các tham số có đầy đủ không
if (empty($cartID) || empty($idDoc) || empty($idAcc) || empty($medicalNote)) {
    $response = array("status" => "error", "message" => "Dữ liệu không đầy đủ!");
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}

// Bước 1: Cập nhật trạng thái thành "Đã khám" trong bảng tbl_cart
$updateCartQuery = "UPDATE tbl_cart SET trangthai = 'Đã khám' WHERE idDC = $cartID";

if ($conn->query($updateCartQuery) === TRUE) {
    // Bước 2: Thêm bản ghi vào bảng medicalRecord
    $createAt = date('Y-m-d H:i:s'); // Thời gian hiện tại
    $insertMedicalRecordQuery = "INSERT INTO medicalrecord (idPatient, idDoctor, diagnosis, createAt) 
                                 VALUES ($idAcc, $idDoc, '$medicalNote', '$createAt')";

    if ($conn->query($insertMedicalRecordQuery) === TRUE) {
        $response = array("status" => "success", "message" => "Lịch hẹn đã được cập nhật và bệnh án đã lưu thành công!");
    } else {
        $response = array("status" => "error", "message" => "Cập nhật trạng thái thành công nhưng không thể lưu bệnh án!");
    }
} else {
    $response = array("status" => "error", "message" => "Không thể cập nhật trạng thái lịch hẹn!");
}

$conn->close();

// Trả về phản hồi dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
