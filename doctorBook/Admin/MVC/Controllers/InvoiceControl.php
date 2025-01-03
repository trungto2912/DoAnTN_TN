<?php
require_once("MVC/Models/invoice.php");
class InvoiceControl
{
    var $invoice_model;
    public function __construct()
    {
        $this->invoice_model = new Invoice();
    }
    function list()
    {   
            if (isset($_GET['trangthai'])) {
                $TrangThai = $_GET['trangthai'];
                $data = $this->invoice_model->limit_all_tt_hd($TrangThai);
            }else{
                $data = $this->invoice_model->listAll();
                

            }

            

             require_once('MVC/Views/index.php');  

        
     
    }
    function detail()
    {
        $data_hd = $this->invoice_model->hoadon($_GET['id']);
        require_once("MVC/Views/index.php");
    }
    function xetduyet()
    {   
        $this->invoice_model->duyet_hd($_GET['id']);
    }
    function delete()
    {
        if (isset($_GET['id'])) {
            $this->invoice_model->delete_hd($_GET['id']);
        }
    }
    
}
?>
