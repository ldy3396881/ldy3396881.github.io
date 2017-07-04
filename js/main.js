$(function(){
	$(".personel-info picture img").mouseover(function(event){
		$(this).stop().animate({
			top:"-40px",
		}).css("z-index","1100");
	}).on("mouseout",function(){
		$(this).stop().animate({
			top:"0px",
		}).css("z-index","100");
	});
});