$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
 	$('.hadouken').finish().show()
  		.animate(
    	{'left': '600px'},
    	600,
    	function() {
      	$(this).hide();
      	$(this).css('left', '-15px');
    	});
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
   })
});