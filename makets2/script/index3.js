(function () {
	var circlePath = document.querySelector(".circle path");
	var animateButton = document.querySelector(".animate");
	var text = document.querySelector(".circle text");
	var inputField = document.querySelector(".enterValue");
	var strokeStartColour = "#579fb4";
	var strokeEndColour = "#2db8e2";
	var radial = {
		initialisePath: function() {
			circlePath.style.strokeDashoffset = "-" + 713.2404174804688;
			circlePath.style.strokeDasharray = 713.2404174804688  + ' ' + 713.2404174804688;
			circlePath.style.stroke = strokeStartColour;
		},
		animateClick: function() {
			animateButton.addEventListener('click', function() {
				var input = 100;
				var lineLengthFromInput = 0;
				radial.animateSVG(lineLengthFromInput, input);
			}, false);
		},
		animateSVG: function(amount, inputValue) {
			radial.initialisePath();
			TweenLite.to(circlePath,1.5,{'stroke-dashoffset': "-"+amount, stroke: strokeEndColour});
			var counter = { var: 0 };
			TweenLite.to(counter, 1.5, {
				var: inputValue,
				onUpdate: function () {
					text.textContent = Math.ceil(counter.var) + "%";
				},
			});
		},
		changeWidth: function() {
			circlePath.style.strokeWidth = 2;
		}
	};
	radial.changeWidth();
	radial.initialisePath();
	radial.animateClick();
})();
(function () {
	var circle1Path = document.querySelector(".circle1 path");
	var animateButton = document.querySelector(".animate");
	var text = document.querySelector(".circle1 text");
	var inputField = document.querySelector(".enterValue");
	var strokeStartColour = "#579fb4";
	var strokeEndColour = "#2db8e2";
	var radial = {
		initialisePath: function() {
			circle1Path.style.strokeDashoffset = "-" + 713.2404174804688;
			circle1Path.style.strokeDasharray = 713.2404174804688  + ' ' + 713.2404174804688;
			circle1Path.style.stroke = strokeStartColour;
		},
		animateClick: function() {
			animateButton.addEventListener('click', function() {
				var input = 100;
				var lineLengthFromInput = 0;
				radial.animateSVG(lineLengthFromInput, input);
			}, false);
		},
		animateSVG: function(amount, inputValue) {
			radial.initialisePath();
			TweenLite.to(circle1Path,1.5,{'stroke-dashoffset': "-"+amount, stroke: strokeEndColour});
			var counter = { var: 0 };
			TweenLite.to(counter, 1.5, {
				var: inputValue,
				onUpdate: function () {
					text.textContent = Math.ceil(counter.var) + "%";
				},
			});
		},
		changeWidth: function() {
			circle1Path.style.strokeWidth = 2;
		}
	};
	radial.changeWidth();
	radial.initialisePath();
	radial.animateClick();
})();
(function () {
	var circle2Path = document.querySelector(".circle2 path");
	var animateButton = document.querySelector(".animate");
	var text = document.querySelector(".circle2 text");
	var inputField = document.querySelector(".enterValue");
	var strokeStartColour = "#579fb4";
	var strokeEndColour = "#2db8e2";
	var radial = {
		initialisePath: function() {
			circle2Path.style.strokeDashoffset = "-" + 713.2404174804688;
			circle2Path.style.strokeDasharray = 713.2404174804688  + ' ' + 713.2404174804688;
			circle2Path.style.stroke = strokeStartColour;
		},
		animateClick: function() {
			animateButton.addEventListener('click', function() {
                $('.anim_Wrapper').css({'opacity':'1'});
                $('.anim_Wrapper').css({'display':'block'});
				var input = 100;
				var lineLengthFromInput = 0;
				radial.animateSVG(lineLengthFromInput, input);
			}, false);
		},
		animateSVG: function(amount, inputValue) {
			radial.initialisePath();
			TweenLite.to(circle2Path,1.5,{'stroke-dashoffset': "-"+amount, stroke: strokeEndColour});
			var counter = { var: 0 };
			TweenLite.to(counter, 1.5, {
				var: inputValue,
				onUpdate: function () {
					text.textContent = Math.ceil(counter.var) + "%";
				},
			});
		},
		changeWidth: function() {
			circle2Path.style.strokeWidth = 2;
		}
	};
	radial.changeWidth();
	radial.initialisePath();
	radial.animateClick();
})();

$(function(){
    $('.animate').click(function(){
		$(this).css({'display':'none'});        
    })
    $('.anim_Wrapper').css({'display':'none'})
})