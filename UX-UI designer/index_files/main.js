$(document).ready(function() {

    $(".portfolio img").unveil();

    /***************** Smooth Scroll ******************/

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInUp');
    }, {
        offset: '95%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function() {
        $('.wp7').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function() {
        $('.wp8').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    /***************** Responsive Nav ******************/

    $('.nav-bg').click(function() {
        $(this).toggleClass('open');
        $('.nav-toggle').toggleClass('active');
        $('.responsive-menu').toggleClass('visible');
        $('ul.primary-nav-menu').toggleClass('open');
        $('body').toggleClass('modal-open');
        event.preventDefault();
    });
    $('.nav-link').click(function() {
        $('.nav-bg').removeClass('open');
        $('.nav-toggle').removeClass('active');
        $('.responsive-menu').removeClass('visible');
        $('ul.primary-nav-menu').toggleClass('open');
        $('body').toggleClass('modal-open');
        event.preventDefault();
    });

    /***************** Share dialog ******************/

    $('.share-icon').click(function() {
        $('.share-overlay').addClass('share-overlay-visible');
        $('body').addClass('modal-open');
        event.preventDefault();
    });
    $('.share-close-icon').click(function() {
        $('.share-overlay').removeClass('share-overlay-visible');
        $('body').removeClass('modal-open');
        event.preventDefault();
    });

    /***************** Subscribe modal ******************/

    window.setTimeout(function() {
        $('.subscribe-driver').addClass("subscribe-driver-visible");
    }, 3000);
    $('.subscribe-close-icon').click(function() {
        $('.subscribe-driver').removeClass('subscribe-driver-visible');
        event.preventDefault();
    });

    /***************** Overlay touch/hover events ******************/

    if (Modernizr.touch) {
        $('figure').bind('touchstart touchend', function(e) {
            $(this).toggleClass('hover');
        });
    }
});

;(function($){$.fn.unveil=function(threshold, callback){var $w = $(window),th = threshold || 0,retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);