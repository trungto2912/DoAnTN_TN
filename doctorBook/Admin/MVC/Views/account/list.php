<div class="container">
                            <div class="row">
                                <div class="col-md-12 mt-lg-4 mt-4">

                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Quản lý Tài khoản</h1>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container"  style="background-color: #fff;">

                            <div class="row">
                                <div class="col-md-12">

                                  
                                    <button class="btn" style="margin-top:15px;float: right" data-toggle="modal" data-target="#addTK">Thêm Tài Khoản</button>

                                </div>
                            </div>

                            <div class="row row1">

                                <div class="col-md-2">
                                    <b>ID</b>
                                </div>
                                <div class="col-md-3">
                                    <b>Ten tài khoản</b>
                                </div>
            
                                <div class="col-md-3">
                                    <b>Phone</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Mã Quyền</b>
                                </div>

                                <div class="col-md-2">
                                    <b>#</b>
                                </div>
                            </div>
                            <?php foreach($data as $row) : ?>
                            
                                <div class="row row2">

                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $row['id'] ?></p>
                                    </div>
                                    <div class="col-md-3">
                                        <p class="cap_gh"><?= $row['fullName'] ?></p>
                                    </div>
                                

                                    <div class="col-md-3">
                                        <p class="cap_gh"><?= $row['phone'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $row['maQuyen'] ?></p>
                                    </div>


                                    <div class="col-md-2">
                                    
                                     
                                        <a href="?mod=account&xuly=edit&id=<?= $row['id'] ?>"><i class="fa fa-edit" id="icon1"></i></a>

                                        <a  href="?mod=account&xuly=delete&id=<?= $row['id'] ?>" onclick="return confirm('Bạn có chắc chắn không?');"><i class="fa fa-trash" id="icon2" ></i></a> 
                     

                                    </div>
                                </div>
                            <?php endforeach; ?>
                            
                        
                             


                    
              
                        </div>
                        <div class="container-fluid" style="background-color: #f7f7fc;height: 30px" ></div>  