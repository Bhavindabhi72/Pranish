/************* Main Js File ************************
	Template Name: PRANISH
	Author: Kaushik Kaklotar
    Developer: Kaushik Kaklotar
	Version: 1.0
	Copyright 2023
	Please ❤ this if you like it!
*************************************************************/

/*------------------------------------------------------------------------------------ 
	==============
	= J S INDEX  =
	==============
	01 - Fixed Header
	02 - Scroll to top
	03 - Clock Menu in mobile
	
-------------------------------------------------------------------------------------*/

/*=====================================================================
01 - Fixed Header
=====================================================================*/

$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height >= 60) {
		$('header').addClass('fixed-header');
	} else {
		$('header').removeClass('fixed-header');
	}
});



/*=====================================================================
02 - Scroll to top
=====================================================================*/

var btn = $('.back-to-top');

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '600');
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

/*=====================================================================
03 - Clock Menu in mobile
=====================================================================*/

$("#navbarNav .nav-link").click(function(){
	$(".navbar-collapse").removeClass("show");
	$(".navbar-toggler").attr("aria-expanded","false");
});
