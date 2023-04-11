var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav-con').addClass('nav-con-fixed');
    } else {
        $('.nav-con').removeClass('nav-con-fixed');
    }
});