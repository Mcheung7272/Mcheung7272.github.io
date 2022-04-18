// window.onscroll = function (e) {
//     parallax();
// };

// function parallax() {
//     let scrolled = $(window).scrollTop();
//     let h1Opacity = 1 - (scrolled / 270);
//     let pOpacity = 1 - (scrolled / 390);
//     let bOpacity = 1 - (scrolled / 410);
//     let arrowOpacity = 1 - (scrolled / 450);
//     if (h1Opacity > 0) {
//         $('.hero-text h1').css('opacity', h1Opacity);
//     }

//     if (pOpacity > 0) {
//         $('.hero-text p').css('opacity', pOpacity);
//     }

//     if (bOpacity > 0) {
//         $('.hero-text button').css('opacity', bOpacity);
//     }

//     if (arrowOpacity > 0) {
//         $('.wrap .arrow').css('opacity', arrowOpacity);
//     }

// };

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $('.hero-text').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });

    $('.wrap').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});

function arrowOnClick() {
    if (window.screen.availWidth > 800 && window.screen.availHeight > 1880) {
        $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 2000);
    } else {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    }
}