<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Favicon -->
    <link rel="shortcut icon" href="public/image/logoapp.png" type="image/x-icon">
    <!-- Box icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Đăng nhập</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="public/css/styleLogin.css">
</head>
<body>
    <?php session_start(); ?>
    <div class="container" style="margin-top: 50px;">
        <div id="dangnhap">
            <form action="codeLogin.php" method="POST">
                <h4 id="tit">ĐĂNG NHẬP</h4>
                <?php 
                if (isset($_SESSION['status'])) {
                    echo "<p class='alert alert-warning'>".$_SESSION['status']."</p>";
                    unset($_SESSION['status']);
                }
                ?>
              

                <div class="form-group">
                    <label >Số điện thoại</label>
                    <input  name="phone" type="text" class="form-control" placeholder="Nhập số điện thoại" required>
                </div>
                <div class="form-group">
                    <label >Mật khẩu</label>
                    <input name="pass"  type="password"class="form-control" placeholder="Nhập mật khẩu" required>
                    
                </div>
                <div class="form-check">
                    <input type="checkbox" name="remember" value="1" class="form-check-input" id="memorize">
                    <label for="memorize" class="form-check-label">Nhớ mật khẩu</label>
                </div>
                <div>
                    <button type="submit" name="login" class="btn btn-success btn-block my-3">Đăng Nhập</button>
                </div>
            
            

            </form>
        </div>
       
                     
    
    </div>
</body>
</html>