<div class="container">
                            <div class="row">
                                <div class="col-md-12 mt-lg-4 mt-4">

                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Chi tiết Bác sĩ</h1>
                                        <a class="btn" href="?mod=product" style="float: right;color:#fff;" >Quay lại</a>
                                    </div>
                                   

                                </div>
                            </div>
                            
				           
                        </div>
                        <div class="container" style="background-color: #fff;">
                        	<img src="<?= $data_ct['image'] ?>" id="anh_chitiet" >

                            <hr>
				            <label><b>Tên bác sĩ :</b></label> <?= $data_ct['name'] ?>
				            <br>
				            <label><b>Phòng khám :</b></label> <?= $data_ct['clinic'] ?>
				            <br>
				            <label><b>Địa chỉ :</b></label> <?= $data_ct['address'] ?>
				            <br>

				            <label><b>Giờ hoạt động :</b></label> <?= $data_ct['workTime'] ?>
				            <br>

				             <label><b>Mô tả :</b></label> <?= $data_ct['des'] ?>
				            <br>
                        </div>
                        </div>
                        <div class="container-fluid" style="background-color: #f7f7fc;height: 30px" ></div> 
			
				
				
		