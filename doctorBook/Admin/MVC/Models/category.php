<?php
require_once("model.php");
class Category extends Model
{
    function listAll()
    {
        $query = "SELECT * FROM category";
        require("result.php");
        return $data;

    }
}