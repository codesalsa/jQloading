(function($) {

	'use strict';

	$.fn.jqloading = function() {

		var loadingContainer = this;

		var loader = loadingContainer.children('.loader');

		var initialData = loader.data( 'initial' );

		var dataMax = loader.data( 'maxlimit' );

		loader.append('<span class="load-animate"></span><span class="loading-text"></span>');

		var loadAnimate = loadingContainer.children(loader).children('.load-animate');

		var loadingtext = loadingContainer.children(loader).children('.loading-text');

		loadAnimate.css({'width': initialData+'%', 'max-width': dataMax+'%', 'min-width': initialData+'%'});

		loadingtext.text(initialData+'%');

		var addButton = loadingContainer.children('.buttons').children('.plus');

		var subtractButton = loadingContainer.children('.buttons').children('.minus');

		addButton.on('click', function(){
			addWidth(10);
		})
		subtractButton.on('click', function(){
			subtractWidth(10);
		})

		$('.plus').dblclick(function(){
		    return false;
		});


		function addWidth(param){
			var addParam = param;

			var currentWidth = loadAnimate.width() / loadAnimate.parent().width() * 100;

			var newWidth = Math.round(currentWidth + addParam);

			if(newWidth > dataMax){
				return false;
			}

			changeColor(newWidth);

			loadAnimate.css({'width': newWidth+'%'});

			loadingtext.text(newWidth+'%');
		}

		function subtractWidth(param){
			var subtractParam = param;

			var currentWidth = loadAnimate.width() / loadAnimate.parent().width() * 100;

			var newWidth = Math.round(currentWidth - subtractParam);

			if(newWidth < initialData){
				return false;
			}

			changeColor(newWidth);

			loadAnimate.css({'width': newWidth+'%'});

			loadingtext.text(newWidth+'%');
		}

		function changeColor(newWidth){

			if(newWidth < 50){
				loadAnimate.css('background', 'green');
			} 

			if(newWidth > 50){
				loadAnimate.css('background', 'orange');
			} 

			if(newWidth > 80){
				loadAnimate.css('background', 'red');
			}
		}
	}

}(jQuery));