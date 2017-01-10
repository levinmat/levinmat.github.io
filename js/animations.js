$(document).ready(function() {


// Hovering over the icons switches src (colors changed using Photoshop)
	$(".git-icon").hover(function() {
		$(this).attr("src", "img/git-hover.png");
	}, function() {
		$(this).attr("src", "img/git.png")
	});

	$(".linkedin-icon").hover(function() {
		$(this).attr("src", "img/linkedin-hover.png");
	}, function() {
		$(this).attr("src", "img/linkedin.png")
	});


	$(".resume-icon").hover(function() {
		$(this).attr("src", "img/resume-hover.png");
	}, function() {
		$(this).attr("src", "img/resume.png")
	});


// Interests section
var text = ['Algorithms', 'User Interaction Design', 'Problem Solving', 'Web Development', 'Artificial Intelligence', 'iOS Development', 'Product Design'];
var i = 0;
var slot1 = $('#slot1');
var slot2 = $('#slot2');
var slot3 = $('#slot3');

	// Initial Fade in
	slot1.fadeOut(0);
	slot1.fadeIn(2000);
	slot2.fadeOut(0);
	slot2.fadeIn(2000);
	slot3.fadeOut(0);
	slot3.fadeIn(2000);

	// First two switches
	setTimeout(function() {
		slot2.fadeOut(600);
		setTimeout(function() {
			slot2.text(text[i++ % text.length]);
			slot2.fadeIn(600);
		}, 600);
	}, 2000);

	setTimeout(function() {
		slot3.fadeOut(600);
		setTimeout(function() {
			slot3.text(text[i++ % text.length]);
			slot3.fadeIn(600);
		}, 600);
	}, 4000);


	// Loops
	setInterval(function ()
	{
		slot1.fadeOut(600);
		setTimeout(function() {
			slot1.text(text[i++ % text.length]);
			slot1.fadeIn(600);
		}, 600);
	}, 6000);

	setTimeout(function() {
		setInterval(function ()
		{
			slot2.fadeOut(600);
			setTimeout(function() {
				slot2.text(text[i++ % text.length]);
				slot2.fadeIn(600);
			}, 600);
		}, 6000);
	}, 2000);

	setTimeout(function() {
		setInterval(function ()
		{
			slot3.fadeOut(600);
			setTimeout(function() {
				slot3.text(text[i++ % text.length]);
				slot3.fadeIn(600);
			}, 600);
		}, 6000);
	}, 4000);


});