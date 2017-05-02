;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Animate Intro
	var animateIntro = function() {
		if ( $('#fh5co-portrait').length > 0 ) {
			$('#fh5co-portrait .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};

	// Animate Social
	var animateSocial = function() {
		if ( $('#social-animate').length > 0 ) {
			$('#social-animate .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};


	var introWayPoint = function() {
		if ($('#fh5co-portrait').length > 0 ) {
			$('#fh5co-portrait').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateIntro , 200);

					setTimeout( animateSocial , 1200);

					setTimeout( function(){
						$('#fh5co-toggle').addClass('fadeInLeft animated')	
					}, 2200);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};


	$(function(){
		introWayPoint();
	});


}());