</div>

                </div>
            </div>
        </div>
        <div id="addSP" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=product&xuly=add" method="post" enctype="multipart/form-data" >
                        <div class="modal-header">                      
                            <h4 class="modal-title">Thêm bác sĩ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">                    
                            <div class="form-group">
                                <label>Tên bác sĩ</label>
                                <input name="name" type="text" class="form-control"  required>
                            </div>
                             <div class="form-group">
                                <label>phòng khám</label>
                                <input name="clinic" type="text" class="form-control"  required>
                            </div>
                            <div class="form-group">
                                <label>Địa chỉ</label>
                                <input name="address" type="text" class="form-control"  required>
                            </div>
                             <div class="form-group">

                                <label>Số điện thoai</label>
                                <input name="phone" type="text" class="form-control"  required pattern="[0-9]+" minlength="10">
                            </div> 
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input name="pass" type="password" class="form-control"  required>
                            </div>
                          
                            <div class="form-group">
                                <label>Thời gian hoạt động</label>
                                <input name="time" type="text" class="form-control"  required>
                            </div>
                            <div class="form-group">
                                <label>Mô tả</label>
                                <input name="des" type="text" class="form-control"  required>
                            </div>
                        

                         
                            <div class="form-group">
                                <label>Hình ảnh</label>
                                <input name="image" type="text" class="form-control"  required>
                            </div>
                           
                        
                        

                            <div class="form-group">
                                <label>Danh mục</label>
                                <select name="category" class="form-select" aria-label="Default select example">
                                     <?php foreach($data_danhmuc as $row) : ?>
                                        <option value="<?= $row['id'] ?>"><?= $row['name']?></option>
                                     <?php endforeach ; ?>
                                </select>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Thêm">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="addTK" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=account&xuly=add" method="post" >
                        <div class="modal-header">                      
                            <h4 class="modal-title">Thêm tài khoản</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">   
                
                            <div class="form-group">
                                 <label>Nhập họ tên</label>
                                <input type="text" name="name" class="form-control" required>
                            </div>                 
                            <div class="form-group">

                                <label>Số điện thoai</label>
                                <input name="phone" type="text" class="form-control"  required pattern="[0-9]+" minlength="10">
                            </div>  
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input name="pass" type="password" class="form-control"  required minlength="6">
                            </div>
                            <div class="form-group">
                                <label>Phân quyền</label>
                                <select name="quyen" class="form-select" aria-label="Default select example">
                                     <?php foreach($data_phanquyen as $row) : ?>
                                        <option value="<?= $row['maQuyen'] ?>"><?= $row['motaQuyen']?></option>
                                     <?php endforeach ; ?>
                                </select>
                            </div>
                           

                            

                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Thêm">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="addDM" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=category&xuly=add" method="post" >
                        <div class="modal-header">                      
                            <h4 class="modal-title">Thêm danh mục</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">                    
                            <div class="form-group">
                                <label>Tên danh mục</label>
                                <input name="name" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Thêm">
                        </div>
                    </form>
                </div>
            </div>
        </div>
         <div id="addBN" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=banner&xuly=add" method="post"  enctype="multipart/form-data">
                        <div class="modal-header">                      
                            <h4 class="modal-title">Thêm banner</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">                    
                            <div class="form-group">
                                <label>Ảnh</label>
                                <input name="image" type="file" class="form-control" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Thêm">
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div id="<?= $editSP ?>" class="modal fade">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <form action="?mod=product&xuly=update" method="post" enctype="multipart/form-data">
                        <div class="modal-header">                      
                            <h4 class="modal-title">Chỉnh sửa Bác sĩ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">                    
                            <div class="form-group">
                                <label>ID</label>
                                <input value="<?= $data_pro['id']?>" name="id" type="text" class="form-control" readonly required>
                            </div>
                            <div class="form-group">
                                <label>Tên Bác sĩ</label>
                                <input value="<?= $data_pro['name']?>" name="name" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Tên phòng khám</label>
                                <input value="<?= $data_pro['clinic']?>" name="clinic" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Địa chỉ</label>
                                <input value="<?= $data_pro['address']?>" name="address" type="text" class="form-control" required>
                            </div>
                             <div class="form-group">

                                <label>Số điện thoai</label>
                                <input value="<?= $data_pro['phone'] ?>" name="phone" type="text" class="form-control"  required pattern="[0-9]+" minlength="10">
                            </div> 
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input value="<?= $data_pro['pass']?>" name="pass" type="passwork" class="form-control" required>
                            </div>


                            <div class="form-group">
                                <label>Thời gian hoạt động</label>
                                <input value="<?= $data_pro['workTime']?>" name="time" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Mô tả</label>
                                <textarea name="des" class="form-control" required><?= $data_pro['des']?></textarea>
                            </div>
                            <div class="form-group">
                                <label>Ảnh</label>
                                <input value="<?= $data_pro['image']?>" name="image" type="text" class="form-control" required>
                            </div>
            
                            


                            
                            <div class="form-group">
                                <label>Danh mục</label>
                                <select name="category" class="form-select" aria-label="Default select example">

                                    <?php foreach($data_danhmuc as $row) : ?>
                                    
                                     
                                            <option value="<?= $row['id']?>" <?php if($data_pro['cateID']==$row['id']) echo 'selected' ?>><?= $row['name']?></option>
                                    <?php endforeach; ?>

                                  
                                </select>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn " value="Sửa">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="<?= $editAC ?>" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=account&xuly=update" method="post" >
                        <div class="modal-header">                      
                            <h4 class="modal-title">Chỉnh sửa tài khoản</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body"> 
                            <div class="form-group">
                                <label>ID</label>
                                <input value="<?= $data_acc['id']?>" name="id" type="text" class="form-control" readonly required>
                            </div>                 
                            <div class="form-group">
                                <label>Tên Tài khoản</label>
                                <input name="name" type="text" class="form-control" value="<?= $data_acc['fullName'] ?>" minlength="6" required>
                            </div>
                    
                            <div class="form-group">

                                <label>Số điện thoai</label>
                                <input name="phone" type="text" class="form-control"  value="<?= $data_acc['phone'] ?>" required pattern="[0-9]+" minlength="10">
                            </div>  
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input name="pass" type="password" class="form-control"  value="<?= $data_acc['pass'] ?>" required minlength="6">
                            </div>
                            <div class="form-group">
                                <label>Phân quyền</label>
                                <select name="quyen" class="form-select" aria-label="Default select example">
                                     <?php foreach($data_phanquyen as $row) : ?>
                                        <option value="<?= $row['maQuyen'] ?>"<?php if($data_acc['maQuyen']==$row['maQuyen']) echo 'selected' ?>><?= $row['motaQuyen']?></option>
                                     <?php endforeach ; ?>
                                </select>
                            </div>
                           

                            

                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Sửa">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="<?= $editDM ?>" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=category&xuly=update" method="post" >
                        <div class="modal-header">                      
                            <h4 class="modal-title">Chỉnh sửa danh mục</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body"> 
                            <div class="form-group">
                                <label>ID</label>
                                <input value="<?= $data_dm['cid']?>" name="id" type="text" class="form-control" readonly required>
                            </div>                     
                            <div class="form-group">
                                <label>Tên danh mục</label>
                                <input name="name" value="<?= $data_dm['cname']?>" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Sửa">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="<?= $editBN ?>" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="?mod=banner&xuly=update" method="post"  enctype="multipart/form-data">
                        <div class="modal-header">                      
                            <h4 class="modal-title">Chỉnh sửa banner</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">  
                            <div class="form-group">
                                <label>ID</label>
                                <input value="<?= $data_banner['id']?>" name="id" type="text" class="form-control" readonly required>
                            </div>                  
                            <div class="form-group">
                                <label>Ảnh</label><br>
                              
                                    <img src="../public/images/<?= $data_banner['image']?>" width="100" height="70" alt="alt"/>
                             
                                <input name="image" type="file"class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
                            <input type="submit" class="btn btn-success" value="Sửa">
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
         <script src="https://cdn.ckeditor.com/ckeditor5/31.0.0/classic/ckeditor.js"></script>
        <script>
            function sweetalertTC(){
            Swal({
                <?php if(isset($_COOKIE['mess'])) { ?>
                text: '<?= $_COOKIE['mess'] ?>',
                <?php } ?>
                type: 'success',
                confirmButtonColor :"#80bb35",            
               })
            }
            function sweetTB(){
            Swal({
        
                <?php if(isset($_COOKIE['messX'])) { ?>
                text: '<?= $_COOKIE['messX'] ?>',
                <?php } ?>
                type: 'error',
                confirmButtonColor :"#ff0000",            
               })
            }

            $('#bar').click(function () {
                $(this).toggleClass('open');
                $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');

            });
            $(document).ready(function () {
                // Show the Modal on load
                $("#editSP").modal("show");
                $("#editAC").modal("show");
                $("#editDM").modal("show");
                $("#editBN").modal("show");
                <?php if(isset($_COOKIE['mess'])) { ?>
                sweetalertTC("show");
                <?php } ?>
                <?php if(isset($_COOKIE['messX'])) { ?>
                sweetTB("show");
                <?php } ?>

            
            });

            ClassicEditor
            .create( document.querySelector( '#ckeditor1' ) )
            .catch( error => {
                console.error( error );
            } );
           
            ClassicEditor
            .create( document.querySelector( '#ckeditor2' ) )
            .catch( error => {
                console.error( error );
            } );
        </script>
    