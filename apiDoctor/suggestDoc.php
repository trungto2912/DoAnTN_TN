<?php
require_once("Connection.php");

$specialty = isset($_GET['specialty']) ? $_GET['specialty'] : '';

// Chỉ thực hiện truy vấn khi specialty có giá trị
if ($specialty !== '') {
    // Truy vấn tìm bác sĩ theo chuyên khoa và rating > 4.5
    $query = "
        SELECT doctor.*, category.name AS categoryName
        FROM doctor
        INNER JOIN category ON doctor.cateID = category.id
        WHERE category.name LIKE '%$specialty%' AND doctor.rating > 4
        ORDER BY doctor.name;
    ";

    $result = $conn->query($query);
    $data = array();

    if ($result->num_rows > 0) {
        // Lấy các kết quả và lưu vào mảng $data
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        error_log("No doctors found for specialty: $specialty with rating > 4");
    }

    // Trả về kết quả dưới dạng JSON
    echo json_encode($data);
} else {
    // Nếu specialty không có giá trị, trả về thông báo lỗi
    echo json_encode(array('message' => 'No specialty provided'));
}

$conn->close();
?>
