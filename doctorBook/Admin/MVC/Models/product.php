<?php
require("model.php");
class Product extends Model
{

    function listAll()
    {
        $query = "SELECT * FROM doctor ORDER BY id DESC";
        require("result.php");
        return $data;

    }
    function danhmuc()
    {
        $query =  "SELECT * from category";
        require("result.php");

        return $data;

    }
    
function add($name,$clinic,$address,$phone,$pass,$image,$time,$des,$cateID) {
    
    $query = "INSERT INTO doctor (name, clinic, address, phone, pass, image, workTime, des, rating, cateID) 
              VALUES ('$name', '$clinic', '$address', '$phone', '$pass', '$image', '$time', '$des', '4' , '$cateID')";

    $status = $this->conn->query($query);

        if ($status == true) {
            setcookie('mess', 'Thêm mới thành công', time() + 2);
            header('Location: ?mod=' . $this->table);
        } else {
            setcookie('messX', 'Thêm vào không thành công', time() + 2);
            header('Location: ?mod=' . $this->table);
        }
}
function delete($id)
    {
        $query = "DELETE from doctor where id='$id'";
        
        $status = $this->conn->query($query);
        if ($status == true) {
            setcookie('mess', 'Xóa thành công', time() + 2);
        } else {
            setcookie('messX', 'Xóa không thành công', time() + 2);
        }
        header('Location: ?mod=product');
    }
    function detail($id)
    {
        $query = "SELECT * from doctor where id ='$id'";
        return $this->conn->query($query)->fetch_assoc();
    }
    function update($id,$name, $clinic,$address, $phone,$pass, $image, $time, $des, $cateID) {
    
    $query = "UPDATE doctor SET name = '$name',clinic = '$clinic', address = '$address', phone = '$phone',pass = '$pass', image = '$image', workTime = '$time', des = '$des', rating = '4', cateID = '$cateID' WHERE id = '$id'";

    $status = $this->conn->query($query);

        if ($status == true) {
            setcookie('mess', 'Sửa thành công', time() + 2);
            header('Location: ?mod=' . $this->table);
        } else {
            setcookie('messX', 'Sửa không thành công', time() + 2);
            header('Location: ?mod=' . $this->table);
        }
}

    
}
