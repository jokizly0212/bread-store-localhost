$(function () {
    $(window).scroll(function() {
        scrollPosition = $(window).scrollTop();
        if(scrollPosition > 100) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    })
})