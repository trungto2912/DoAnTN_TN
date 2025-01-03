<?php 
    $conn;
    
    $severname ="localhost"; 
    $username ="root";
    $password =""; 
    $db_name ="doctorappointment";
 
    //Tao ket noi CSDL
    $conn = new mysqli($severname,$username,$password,$db_name);
    $conn->set_charset("utf8");

    //check connection
    if ($conn->connect_error) {
	   die("Connection failed: " . $this->conn->connect_error);
	}
     
?>