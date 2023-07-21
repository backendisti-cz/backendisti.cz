$(function () {
    $('#previous-meetups-cta').on('click', function (e) {
        e.preventDefault();

        // TODO: show loading?

        $.ajax({
            url: 'past.html',
            type: 'GET',
            success: function(response) {
                $('.previous-meetups').html(response);
                $('.previous-meetups').slideToggle();
            },
            error: function(xhr, status, error) {
                console.error("Error: " + error);
            }
        });
    });

});
