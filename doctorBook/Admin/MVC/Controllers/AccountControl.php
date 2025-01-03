<?php
require_once("MVC/Models/account.php");
class AccountControl
{
    var $account_model;
    public function __construct()
    {
        $this->account_model = new Account();
    }
    function list()
    {  

            $data = $this->account_model->listAll();
            $data_phanquyen=$this->account_model->phanquyen();
    

             require_once('MVC/Views/index.php');  
     
    }
    public function add()
    
    {
    
        $name=$_POST['name'];
        $phone=$_POST['phone'];
        $pass=md5($_POST['pass']);
        $maquyen=$_POST['quyen'];

        $this->account_model->add($name,$phone,$pass,$maquyen);
    }
    public function edit()
    {
        $id = $_GET['id'];
        $data_phanquyen=$this->account_model->phanquyen();
        $data_acc=$this->account_model->detail($id);
        $data = $this->account_model->listAll();
        $editAC="editAC";
            
         require_once('MVC/Views/index.php');  
    }
    public function update()
    {
        $name=$_POST['name'];
        $phone=$_POST['phone'];
        $pass=md5($_POST['pass']);
        $quyen=$_POST['quyen'];
        $id = $_POST['id'];
        
        $this->account_model->update($id,$name,$phone,$pass,$quyen);
    }
    public function delete()
    {
        $id = $_GET['id'];
        $this->account_model->delete($id);
    }
  
}
?>
