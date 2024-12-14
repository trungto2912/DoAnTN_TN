<div class="container">
                            <div class="row">
                                <div class="col-md-12 mt-lg-4 mt-4">

                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Chi tiết đặt lịch</h1>
                                        <a class="btn" href="?mod=invoice" style="float: right;color:#fff;" >Quay lại</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container"  style="background-color: #fff;">

                            <div class="row">
                                <div class="col-md-12">

                                    <?php if($data_hd['trangthai'] == 'Chưa duyệt') { ?>
                                    <a href="?mod=invoice&xuly=xetduyet&id=<?= $data_hd['idDC'] ?> ?>" title="" class="btn" onclick="return confirm('Bạn có chắc chắn không?');">Duyệt lịch hẹn</a>
                                    <?php } ?>
                                   <a href="?mod=invoice&xuly=delete&id=<?= $data_hd['idDC'] ?>" title="" class="btn" onclick="return confirm('Bạn có chắc chắn không?');" >Xóa</a>

                                </div>
                            </div>
                            <div class="row row1">

                                <div class="col-md-1">
                                    <b>Mã HĐ</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Bác sĩ</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Ảnh</b>
                                </div>
                                <div class="col-md-3">
                                    <b>Địa chỉ</b>
                                </div>

                                
                                <div class="col-md-2">
                                    <b>Giờ hoạt động</b>
                                </div>
                                 <div class="col-md-2">
                                    <b>Trạng thái</b>
                                </div>

                                
                            </div>
                            
                            <div class="row row2">

                                <div class="col-md-1">
                                    <p class="cap_gh"><?= $data_hd['idDC'] ?></p>
                                </div>
                                <div class="col-md-2">
                                    <p class="cap_gh"><?= $data_hd['name'] ?></p>
                                </div>
                                <div class="col-md-2">
                                    <img src="<?=$data_hd['image'] ?>" alt="" id="anh_gh">
                                </div>
                                <div class="col-md-3">
                                    <p class="cap_gh"><?= $data_hd['address'] ?></p>
                                </div>
                                
                                <div class="col-md-2">
                                    <p class="cap_gh"><?= $data_hd['workTime'] ?></p>
                                </div>
                                <div class="col-md-2">
                                    <p class="cap_gh"><?= $data_hd['trangthai'] ?></p>
                                </div>v

                            </div>
                            <hr class="hror">
                            <div class="row row1">
                                <div class="col-md-3">
                                    <b>Tên người đặt</b>
                                </div>
                                <div class="col-md-3">
                                    <b>Số điện thoại</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Giờ đến</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Ngày đến</b>
                                </div>
                                
                                <div class="col-md-2">
                                    <b>#</b>
                                </div>


                            </div>
                           
                            
                                <div class="row row3">
                                    
                                    <div class="col-md-3">
                                        <p class="cap_gh"><?= $data_hd['fullName'] ?></p>
                                    </div>
                                    <div class="col-md-3">
                                        <p class="cap_gh"><?= $data_hd['phone'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $data_hd['gioDen'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh"><?= $data_hd['ngayDen'] ?></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="cap_gh">.</p>
                                    </div>

                                   
                                </div>  

                        
                             


                    
              
                        </div>

                        <div class="container-fluid" style="background-color: #f7f7fc;height: 30px" ></div>  