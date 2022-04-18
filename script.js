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
    // if (window.screen.availWidth > 800 && window.screen.availHeight > 1880) {
    //     $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 2000);
    // } else {
    //     $('html, body').animate({
    //         scrollTop: $("#about").offset().top
    //     }, 2000);
    // }
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 300);
}