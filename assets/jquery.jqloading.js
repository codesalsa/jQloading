(function($) {

	'use strict';

	$.fn.jqloading = function() {

		$('#loader01').append('<span class="load-animate"></span>');
		var loadingContainer = this;



		var loader = loadingContainer.children('loader');

		var initialData = loader.data( "initial" );
		alert('initialData');

		loadingContainer.append('<span class="load-animate"></span>');
	}

}(jQuery));