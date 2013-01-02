$(document).ready(function() {
	nextTimer = setInterval(function(){
		showNext();
	}, 5000);
 });

$('#next').click(function(){
	showNext();
	clearInterval(nextTimer);
});

$('nav li').click(function(){
	var id = $(this).attr('data-ind');
	$('.current').hide();
	$(id).fadeIn().addClass('current');
	clearInterval(nextTimer);
	$('li').addClass('opacity');
	$(this).removeClass('opacity');
});

function resize() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var quoteHeight = $('.quote').height();
	var quoteWidth = $('.quote').width();
}

function showNext() {
	if (!$('.current').is($('.last')) )
		$('.current').hide().removeClass('current').next().fadeIn().addClass("current");
	else {
		$('.current').hide().removeClass('current');
		$('.first').fadeIn().addClass("current");
	}
	$('li').addClass('opacity');
	var id = $('.current').attr('id');
	$('li[data-ind=#' + id + ']').removeClass('opacity');
}

function showPrev() {
	if (!$('.current').is($('.first')) )
		$('.current').hide().removeClass('current').prev().fadeIn().addClass("current");
	else {
		$('.current').hide().removeClass('current');
		$('.last').fadeIn().addClass("current");
	}
}

$(window).resize(function(){
	resize();
});
