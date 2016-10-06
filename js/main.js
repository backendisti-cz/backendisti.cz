$(function() {
	$('#previous-meetups-cta').on('click', function(e) {
		e.preventDefault();

		$('.previous-meetups').slideToggle();
	})
})