<div class="container">
                            <div class="row">
                                <div class="col-md-12 mt-lg-4 mt-4">

                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Quản lý đặt lịch</h1>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container"  style="background-color: #fff;">

                            <div class="row">
                                <div class="col-md-12">

                                  
                                    <ul class="nav nav-pills">
                                        <li class="nav-item">
                                            <a class="nav-link btn <?=  $_GET['trangthai']=='0' ? 'active2' : '' ?>" href="?mod=invoice&xuly=list&trangthai=0">Chưa duyệt</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn <?= $_GET['trangthai']=='1' ? 'active2' : '' ?>" href="?mod=invoice&xuly=list&trangthai=1">Đã duyệt</a>
                                        </li>
    
                                    </ul>

                                </div>
                            </div>

                            <div class="row row1">
                                <div class="col-md-1">
                                    <b>Mã</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Người đặt</b>
                                </div>
                                <div class="col-md-2">
                                    <b>SDT</b>
                                </div>
                                <div class="col-md-3">
                                    <b>Cửa hàng</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Trạng thái</b>
                                </div>

                                <div class="col-md-2">
                                    <b>#</b>
                                </div>
                            </div>
                            <?php foreach($data as $row) : ?>
                            
                                <div class="row row2">

                                    <div class="col-md-1">
                                        <p class="cap_gh"><?= $row['idDC'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $row['fullName'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $row['phone'] ?></p>
                                    </div>
                                    <div class="col-md-3">
                                        <p class="cap_gh"><?= $row['name'] ?></p>
                                    </div>
                    
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $row['trangthai'] ?></p>
                                    </div>
                                


                                    <div class="col-md-2">
                                                                     
                                        <a href="?mod=invoice&xuly=detail&id=<?= $row['idDC']?>" class="btn" id="icon3" title="">Xem</a>

                                        <a  href="?mod=invoice&xuly=delete&id=<?= $row['idDC'] ?>" onclick="return confirm('Bạn có chắc chắn không?');"><i class="fa fa-trash" id="icon2" ></i></a> 
                     
                                    </div>
                                </div>
                            <?php endforeach; ?>
                           
                        
                             


                    
              
                        </div>
                        <div class="container-fluid" style="background-color: #f7f7fc;height: 30px" ></div>  