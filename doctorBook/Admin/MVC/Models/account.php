<?php
require_once("model.php");
class Account extends Model
{
    function listAll()
    {
        $query = "SELECT * FROM account ORDER BY id DESC";
        require("result.php");
        return $data;

    }
    function phanquyen()
    {
        $query =  "SELECT * from permission";
        require("result.php");

        return $data;

    }
    function detail($id)
    {
        $query = "SELECT * from account where id ='$id'";
        return $this->conn->query($query)->fetch_assoc();
    }
    function add($name,$phone,$pass,$maquyen) {
    
    $query = "INSERT INTO account (fullName, phone, pass, maQuyen) 
              VALUES ('$name','$phone', '$pass', '$maquyen')";

    $status = $this->conn->query($query);

        if ($status == true) {
            setcookie('mess', 'Thêm mới thành công', time() + 2);
            header('Location: ?mod=account');
        } else {
            setcookie('messX', 'Thêm vào không thành công', time() + 2);
            header('Location: ?mod=account');
        }
}
function update($id,$name, $phone,$pass, $quyen) {
    
    $query = "UPDATE account SET fullName = '$name',phone = '$phone',pass = '$pass', maQuyen = '$quyen' WHERE id = '$id'";

    $status = $this->conn->query($query);

        if ($status == true) {
            setcookie('mess', 'Sửa thành công', time() + 2);
            header('Location: ?mod=account');
        } else {
            setcookie('messX', 'Sửa không thành công', time() + 2);
            header('Location: ?mod=account');
        }
}
function delete($id)
    {
        $query = "DELETE from account where id='$id'";
        
        $status = $this->conn->query($query);
        if ($status == true) {
            setcookie('mess', 'Xóa thành công', time() + 2);
        } else {
            setcookie('messX', 'Xóa không thành công', time() + 2);
        }
        header('Location: ?mod=account');
    }
    
}