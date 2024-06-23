$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow', function() {
          $(".main_section").css("display", "flex");
        });
	},1000);
});
$(document).ready(function(){
    // alert("hello i am shahrukh")
  $(".bars").click(function(){
    $(".header").toggleClass("showMenu");
  });
  $("#mobileMenu ul li").click(function(){
    $(".header").toggleClass("showMenu");
    $("#cross").hide();
    $("#lines").show();
  });
  $("#cross").hide();
   $("#lines").click(function(){
       $(this).hide("fast");
       $("#cross").show("fast");
   });
   $("#cross").click(function(){
       $(this).hide("fast");
       $("#lines").show("fast");
   });
});