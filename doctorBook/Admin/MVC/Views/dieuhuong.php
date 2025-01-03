<?php
    $mod = isset($_GET['mod']) ? $_GET['mod'] : "product";
    $xuly = isset($_GET['xuly']) ? $_GET['xuly'] : "list";
    switch ($mod) {
        case "product":
            switch ($xuly) {
                case 'list':
                    require_once("product/list.php");
                    break;
                case 'edit':
                    require_once("product/list.php");
                    break;
                case 'detail':
                    require_once("product/detail.php");
                    break;
                
                default:
                    require_once("product/list.php");
                    break;
                }
            break;
        case "account":
            switch ($xuly) {
                case 'list':
                    require_once("account/list.php");
                    break;
                case 'edit':
                    require_once("account/list.php");
                    break;
                
                default:
                    require_once("account/list.php");
                    break;
                }
            break;
        case "category":
            switch ($xuly) {
                case 'list':
                    require_once("category/list.php");
                    break;
                case 'edit':
                    require_once("category/list.php");
                    break;
                
                default:
                    require_once("category/list.php");
                    break;
                }
            break;
        case "banner":
            switch ($xuly) {
                case 'list':
                    require_once("banner/list.php");
                    break;
                case 'edit':
                    require_once("banner/list.php");
                    break;
                
                default:
                    require_once("banner/list.php");
                    break;
                }
            break;
        case "invoice":
            switch ($xuly) {
                case 'list':
                    require_once("invoice/list.php");
                    break;
                case 'detail':
                    require_once("invoice/detail.php");
                    break;
                
                default:
                    require_once("banner/list.php");
                    break;
                }
            break;
        
       
    
        default:
           
            break;
    }
?>