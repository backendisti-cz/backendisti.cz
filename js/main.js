$(function () {
    $('#previous-meetups-cta').on('click', function (e) {
        e.preventDefault();

        $('.previous-meetups').slideToggle();
    });
    $('.previous-meetups-header').on('click', function (e) {
        e.preventDefault();
        $('.previous-meetups').show();
        $('body').scrollTop($('#previous').offset().top);
    });
});
