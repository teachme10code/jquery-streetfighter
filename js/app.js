$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
    $( "li" ).fadeOut( "slow", function() {
  }), 90
  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-cool').hide();
  })

  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
  	$('.hadouken').finish().show()
  	   .animate(
    	 {'left': '600px'},
    	 600,
    	 function() {
      	 $(this).hide();
      	 $(this).css('left', '-15px');
    })
  })

  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
   })

  $(this).keydown(function(event) {
    if ( event.which == 88 ) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  })

  $(this).keyup(function(event) {
    if ( event.which == 88 ) {
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-still').show();
    }
  })
}); 

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}