<?php
session_start();
    $mod = isset($_GET['mod']) ? $_GET['mod'] : "product";
    $xuly = isset($_GET['xuly']) ? $_GET['xuly'] : "list";
    switch ($mod) {
        case 'product':
            require_once('MVC/Controllers/ProductControl.php');
            $controller_obj = new ProductControl();
            switch ($xuly) {
                case 'list':
                    $controller_obj->list();
                    break;
                case 'add':
                    $controller_obj->add();
                    break;
                case 'delete':
                    $controller_obj->delete();
                    break;
                case 'edit':
                    $controller_obj->edit();
                    break;
                case 'update':
                    $controller_obj->update();
                    break;
                case 'detail':
                    $controller_obj->detail();
                    break;
                default:
                    $controller_obj->list();
                    break;
            }
            break;
        case 'account':
            require_once('MVC/controllers/AccountControl.php');
            $controller_obj = new AccountControl();
            switch ($xuly) {
                case 'list':
                    $controller_obj->list();
                    break;
                case 'add':
                    $controller_obj->add();
                    break;
                case 'edit':
                    $controller_obj->edit();
                    break;
                case 'update':
                    $controller_obj->update();
                    break;
                case 'delete':
                    $controller_obj->delete();
                    break;
                default:
                    $controller_obj->list();
                    break;
            }
            break;

        case 'category':
            require_once('MVC/controllers/CategoryControl.php');
            $controller_obj = new CategoryControl();
            switch ($xuly) {
                case 'list':
                    $controller_obj->list();
                    break;
                case 'add':
                    $controller_obj->add();
                    break;
                case 'edit':
                    $controller_obj->edit();
                    break;
                case 'update':
                    $controller_obj->update();
                    break;
                case 'delete':
                    $controller_obj->delete();
                    break;
                default:
                    $controller_obj->list();
                    break;
            }
            break;
        case 'invoice':
            require_once('MVC/controllers/InvoiceControl.php');
            $controller_obj = new InvoiceControl();
            switch ($xuly) {
                case 'list':
                    $controller_obj->list();
                    break;
                case 'detail':
                    $controller_obj->detail();
                    break;
                case 'delete':
                    $controller_obj->delete();
                    break;
                case 'xetduyet':
                    $controller_obj->xetduyet();
                    break;
                default:
                    $controller_obj->list();
                    break;
            }
            break;
       
        default:
            header('location: ?mod=product');
            // require_once('MVC/controllers/LoginController.php');
            // $controller_obj = new LoginController();
            // $controller_obj->admin();
            // break;
    }

?>

