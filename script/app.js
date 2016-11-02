/* Write your code here! */
$(".announcement").append('<button type="button" class="closeBtn">X</button>');

$(".closeBtn").click(function() {
	var announcement = $(this).parent('.announcement');
	announcement.toggleClass('hide');
	if (announcement.hasClass('hide')) {
		$(this).html("show announcement");
	} else {
		$(this).html("X");
	}
});