/* Write your code here! */
// $('li').click(function () {

// 	$(this).parent().parent().toggleClass('overlay');
// })

$('img').click(function(){
	var imgAlt = $(this).attr('alt');
	var imgSrc = $(this).attr('src');
	console.log(imgSrc);
	console.log(imgAlt);
	$('.overlay img').attr('src', imgSrc);
	$('.image-caption').text(imgAlt);
	$('.overlay').addClass('show');
	$('.overlay').click(function() {
		$(this).removeClass('show');
	});

});

