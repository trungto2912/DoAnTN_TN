<?php
require_once("model.php");
class Invoice extends Model
{

    function limit_all_tt_hd($a)
    {
        if($a == 1){
            $b ="Đã duyệt";
        }else{
            $b ="Chưa duyệt";
        }
        $query = "SELECT tbl_cart.*, doctor.*, account.* 
              FROM tbl_cart 
              INNER JOIN doctor ON tbl_cart.idDoc = doctor.id
              INNER JOIN account ON tbl_cart.idAcc = account.id
              WHERE tbl_cart.trangthai = '$b'";

        require("result.php");

        return $data;
    }
    function listAll()
    {
        $query = "SELECT tbl_cart.*, doctor.*, account.* 
              FROM tbl_cart 
              INNER JOIN doctor ON tbl_cart.idDoc = doctor.id
              INNER JOIN account ON tbl_cart.idAcc = account.id";
        require("result.php");
        return $data;

    }
  
    function hoadon($id){
       $query = "SELECT tbl_cart.*, doctor.*, account.* 
              FROM tbl_cart 
              INNER JOIN doctor ON tbl_cart.idDoc = doctor.id
              INNER JOIN account ON tbl_cart.idAcc = account.id
              WHERE tbl_cart.idDC = '$id'";
        $result = $this->conn->query($query);

        $data = mysqli_fetch_array($result);
        return $data;
    }
    function duyet_hd($id)
    {
        $query = "UPDATE tbl_cart SET  trangthai= 'Đã duyệt' WHERE idDC = '$id' " ;

        $result = $this->conn->query($query);
        
        if ($result == true) {
           
            setcookie('mess', 'Duyệt thành công', time() + 2);
            header('Location: ?mod=invoice&trangthai=1');
        } else {
            setcookie('messX', 'Duyệt thất bại', time() + 2);
            header('Location: ?mod=invoice');
        }
    }
    
  
    function delete_hd($id)
    {
        $query = "DELETE from tbl_cart where idDC ='$id'";
        
        $status = $this->conn->query($query);
        if ($status == true) {
            setcookie('mess', 'Xóa thành công', time() + 2);
        } else {
            setcookie('messX', 'Xóa không thành công', time() + 2);
        }
        header('Location: ?mod=invoice');
    }

}