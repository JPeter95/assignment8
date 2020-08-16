require("jquery-ui")
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Make jQuery available even in the "views" folder
global.$ = require("jquery")

$(function(){
	// Fade Out notices after 5 seconds
	$('#notice').fadeOut(5000);

	$('body').on('focus', '.date input[type=text]', function(){
		$(this).datepicker( { dateFormat: 'yy-mm-dd' } );
	})
})
