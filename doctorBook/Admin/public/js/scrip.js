	 pos = $("#menuTop").position();
  	$(window).scroll(function(){
  		var posScroll = $(document).scrollTop();
  		if(parseInt(posScroll) > parseInt(pos.top)){
  			$("#menuTop").addClass('fixed');

  		}else{
  			$("#menuTop").removeClass('fixed');
  		}
  	});
  	
  	
 
  	
		function ht_icon(){
			document.getElementById("icons").style.display="block";
		}

		function mota(){
			document.getElementById('ndMota').style.display="block";
			document.getElementById('ndDanhgia').style.display="none";

			document.getElementById('mota').style.background="#008000";
			document.getElementById('danhgia').style.background="#80bb35";
		}
		function danhgia(){
			document.getElementById('ndMota').style.display="none";
			document.getElementById('ndDanhgia').style.display="block";

			document.getElementById('mota').style.background="#80bb35";
			document.getElementById('danhgia').style.background="#008000";


		}
		    function lh(){
              var arr = document.getElementById("lh");
              alert("cảm ơn bae đã phản hồi >_>");
                }
		$('#bar').click(function(){
    $(this).toggleClass('open');
    $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled' );

});
		$(document).ready(function(){
  // Show the Modal on load
  $("#myModal").modal("show");
    
  // Hide the Modal
  
});