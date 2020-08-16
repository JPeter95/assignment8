require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Make jQuery available even in the "views" folder
global.$ = require("jquery")

require("jquery-ui")

$(function(){
	// Fade Out notices after 5 seconds
	$('#notice').fadeOut(5000);
})
