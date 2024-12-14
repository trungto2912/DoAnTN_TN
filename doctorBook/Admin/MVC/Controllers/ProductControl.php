<?php
require_once("MVC/Models/product.php");
class ProductControl
{
    var $product_model;
    public function __construct()
    {
        $this->product_model = new Product();
    }
    function list()
    {   
        $data_danhmuc=$this->product_model->danhmuc();
        $data=$this->product_model->listAll();
        $active="product";
        require_once('MVC/Views/index.php');  

        
     
    }
    public function add()
    
    {
    
        $name=$_POST['name'];
        $clinic=$_POST['clinic'];
        $address=$_POST['address'];
        $phone=$_POST['phone'];
        $pass=md5($_POST['pass']);

        $time=$_POST['time'];
        $image=$_POST['image'];
        $des=$_POST['des'];
    
        $cateID=$_POST['category'];
      

        $this->product_model->add($name,$clinic,$address,$phone,$pass,$image,$time,$des,$cateID);
    }
    public function delete()
    {
        $id = $_GET['id'];
        $this->product_model->delete($id);
    }
     public function edit()
    {
        $id = $_GET['id'];
        $data_danhmuc=$this->product_model->danhmuc();
        $data_pro=$this->product_model->detail($id);
        $data = $this->product_model->listAll();
        $editSP="editSP";
            
         require_once('MVC/Views/index.php');  
    }
    public function update()
    {
        $name=$_POST['name'];
        $clinic=$_POST['clinic'];
        $address=$_POST['address'];
        $phone=$_POST['phone'];
        $pass=md5($_POST['pass']);
        $image=$_POST['image'];
        $des=$_POST['des'];
        $cateID=$_POST['category'];
        $time=$_POST['time'];
        $id = $_POST['id'];
        
        $this->product_model->update($id,$name,$clinic,$address,$phone,$pass,$image,$time,$des,$cateID);
    }
    function detail(){
        $data_ct = $this->product_model->detail($_GET['id']);

        require_once('MVC/Views/index.php');
    }
}
?>
