var scr = screen.availWidth

$(function(){$('.d').click(function(){
		$(function(){$('.menu').animate({marginLeft:'0'},500);});
		$(function(){$('.black2').animate({marginLeft:'0'},700);});
})})

$(function(){$('.s').click(function(){
		$(function(){$('.catalog').animate({marginLeft: '0'},500);});
		$(function(){$('.black1').animate({marginLeft:'0'},700);});
})})

$(function(){$('.buy2').click(function(){
		$(function(){$('.catalog').animate({marginLeft: '0'},500);});
		$(function(){$('.black1').animate({marginLeft:'0'},0);});
})})

$(function(){$('.black2').click(function(){
		$(function(){$('.menu').animate({marginLeft:'-100%'},500);});
		$(function(){$('.black2').animate({marginLeft:'-100%'},0);});
})})

$(function(){$('.black1').click(function(){
		$(function(){$('.catalog').animate({marginLeft:'-100%'},500);});
		$(function(){$('.black1').animate({marginLeft:'-100%'},0);});
})})

$(function(){$('.like').animate({marginTop:''},4000);});

$(function(){$('.exit').click(function(){
	$(function(){$('.like').animate({marginTop:'-100%'},500);});
})})