<?php
require_once("Connection.php");
$searchText = isset($_GET['searchText']) ? $_GET['searchText'] : '';

// Chỉ thực hiện truy vấn khi searchText có giá trị
if ($searchText !== '') {
    // Sử dụng câu lệnh LIKE để thực hiện tìm kiếm dựa trên tên của bác sĩ
    $query = "SELECT * FROM doctor WHERE name LIKE '%$searchText%'";
    $result = $conn->query($query);
    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        error_log("No results found for searchText: $searchText");
    }

    echo json_encode($data);
} else {
    // Nếu searchText không có giá trị, có thể trả về một thông điệp hoặc dữ liệu mặc định
    echo json_encode(array('message' => 'No searchText provided'));
}

$conn->close();
?>
