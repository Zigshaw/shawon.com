$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbarc").addClass("sticky");
        } else {
            $(".navbarc").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".up-btn").addClass("show");
        } else {
            $(".up-btn").removeClass("show");
        }
    });

    $(".up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavor", "auto");
    });

    $(".menu-bar").click(function () {
        $(".navbarc .menuc").toggleClass("active");
        $(".menu-bar i").toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Web-Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web-Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    var offsetTop = $('#skills').offset().top;
    $(window).scroll(function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            jQuery('.line').each(function () {
                jQuery(this).find('.line-progress').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
            });
        }
    });

    $(function () {
        $("#main").on("click", function () {
          setTimeout(function () {
            $("#lnch").addClass("launching").text("Sending");
            $("#lnch_btn").addClass("launching");
          }, 0);
      
          setTimeout(function () {
            $("#lnch").addClass("launched").text("Message sent !");
            $("#lnch_btn").addClass("launched");
            $("#main").attr("disabled", true);
            

          }, 1500);
        });
      });

});