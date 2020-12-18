r2 = document.getElementsByClassName('date')[0],
r1 = document.getElementsByClassName('moon')[0],
date = new Date();
r2.innerHTML = date.getDate();
if (date.getMonth() == 1) {r1.innerHTML = "Jan";}
else if (date.getMonth() == 2) {r1.innerHTML = "Feb";}
else if (date.getMonth() == 3) {r1.innerHTML = "Mar";}
else if (date.getMonth() == 4) {r1.innerHTML = "Apr";}
else if (date.getMonth() == 5) {r1.innerHTML = "May";}
else if (date.getMonth() == 6) {r1.innerHTML = "Jun";}
else if (date.getMonth() == 7) {r1.innerHTML = "Jul";}
else if (date.getMonth() == 8) {r1.innerHTML = "Aug";}
else if (date.getMonth() == 9) {r1.innerHTML = "Sep";}
else if (date.getMonth() == 10) {r1.innerHTML = "Oct";}
else if (date.getMonth() == 11) {r1.innerHTML = "Nov";}
else {r1.innerHTML = "Dec";}
var s = 1
$(function(){$('button').click(function(){
	if (s == 1) {
		$(function(){$('header').animate({marginLeft:'-100%'});});
		s = 0
	}
	else {
		$(function(){$('header').animate({marginLeft:'0'});});
		s = 1
	}
})
})