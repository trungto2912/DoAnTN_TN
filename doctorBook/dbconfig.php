<?php
$host = 'localhost';
$dbname = 'doctorappointment';
$username = 'root';
$password = '';

// Tạo kết nối MySQLi
$conn = new mysqli($host, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected to MySQL successfully";
?>
