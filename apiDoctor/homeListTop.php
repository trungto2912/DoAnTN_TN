<?php
require_once("Connection.php");


$query = "SELECT * FROM doctor WHERE rating = 5";
$result = $conn->query($query);
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();
?>
