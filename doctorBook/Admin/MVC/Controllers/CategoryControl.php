<?php
require_once("MVC/Models/category.php");
class CategoryControl
{
    var $category_model;
    public function __construct()
    {
        $this->category_model = new Category();
    }
    function list()
    {   
            $data = $this->category_model->listAll();
            
        
            require_once('MVC/Views/index.php');  

    
        
     
    }
}
?>
