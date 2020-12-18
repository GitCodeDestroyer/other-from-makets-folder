var videoNum = $('.playlist').data('video');
var nowPlace = 1;
var nextCanClick = true;
var prevCanClick = true;

$('.next.active').click(function() {
	if (nextCanClick && videoNum != nowPlace) {
		nextCanClick = false;
		nowPlace++;
		$('.video-1').animate({ left: '-70%' }, 300);
		$('.video-2').animate({ height: '70%', top: '15%', left: '15%' }, 300);
		$('.video-3').animate({ height: '60%', top: '20%', left: '20%' }, 300);
		$('.video-4').animate({ height: '50%', top: '25%', left: '24%' }, 300);
		$('.video-5').animate({ left: '27%' }, 500);
		setTimeout(function() {
			$('.video-1').css({ left: '15%' });
			$('.video-2').css({ height: '60%', top: '20%', left: '20%' });
			$('.video-3').css({ height: '50%', top: '25%', left: '24%' });
			$('.video-4').css({ height: '40%', top: '30%', left: '27%' });
			$('.video-5').css({ left: '-70%' });
			nextCanClick = 1;
		}, 501);
		$('.prev').addClass('active');
	}
	if (nowPlace == 15) {
		nextCanClick = true;
		$('.next.active').removeClass('active');
	}
	$('.count')[0].innerHTML = nowPlace;
});

$('.prev').click(function() {
	if (prevCanClick && nowPlace != 1) {
		nowPlace--;
		prevCanClick = false;
		$('.video-1').animate({ left: '100%' }, 300);
		$('.video-2').animate({ height: '70%', top: '15%', left: '15%' }, 300);
		$('.video-3').animate({ height: '60%', top: '20%', left: '20%' }, 300);
		$('.video-4').animate({ height: '50%', top: '25%', left: '24%' }, 300);
		$('.video-5').css({ left: '100%' });
		$('.video-5').animate({ height: '40%', top: '30%', left: '27%' }, 500);
		$('.video-6').animate({ left: '-70%' }, 300);
		// $('.video-3').animate({height: '60%', top: '20%', left: '20%'}, 300);
		// $('.video-4').animate({height: '50%', top: '25%', left: '24%'}, 300);
		// $('.video-5').animate({left: '27%'}, 300);
		setTimeout(function() {
			$('.video-1').css({ left: '15%' });
			$('.video-2').css({ height: '60%', top: '20%', left: '20%' });
			$('.video-3').css({ height: '50%', top: '25%', left: '24%' });
			$('.video-4').css({ height: '40%', top: '30%', left: '27%' });
			$('.video-5').css({ left: '-70%' });
			prevCanClick = true;
		}, 501);
		$('.next').addClass('active');
	}
	if (nowPlace == 1) {
		$('.prev.active').removeClass('active');
	}
	$('.count')[0].innerHTML = nowPlace;
});

$('.menu-button').click(function() {
		$('.simple-playlist').animate({width: '100%', height: '100%', top: 0, left: 0}, 500);
		setTimeout(function () {
			$('.close').css({'visibility': 'visible'});
			$('.nicescroll-rails').css({'display':'block'});
		}, 501);
});

$('.close').click(function() {
		$('.simple-playlist').animate({width: '0%', height: '0%', top: '50%', left: '50%'}, 500);
		$('.close').css({'visibility': 'hidden'});
		$('.nicescroll-rails').css({'display':'none'});
});