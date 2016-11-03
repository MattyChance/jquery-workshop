/* Write your code here! */
// var mq = window.matchMedia("(min-width: 500px)");

// console.log(mq);
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
    	$('.container').addClass('content');
    	$(document).ready(function(){
			$("aside form").sticky({topSpacing:0});
			});

  } else {
    // window width is less than 500px
    	$('.container').removeClass('content');
	  	$("aside form").unstick();
  }
}
