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


	// INTERESTS
	
	// Initial Fade in
	$("#slot0").fadeOut(0);
	$("#slot1").fadeOut(0);
	$("#slot2").fadeOut(0);
	$("#slot0").fadeIn(2000);
	$("#slot1").fadeIn(2000);
	$("#slot2").fadeIn(2000);

 	// So it doesn't take longer the first time
 	swap();
	// Calls swap every 2000 ms
	setInterval(swap, 2000);
});

// List of interests
var interests = ['Algorithms', 'User Interface Design', 'Problem Solving', 'Web Development', 'Artificial Intelligence', 'iOS Development', 'Product Design'];
var i = 0; // Index in interests
var s = 0; // Slot index (0-2)

// Swap out interest
function swap() {
	// Increment and get current slot
	var slot = $("#slot" + (s++ % 3));
	setTimeout(function() { // Wait (while displayed fully)
		slot.fadeOut(500); // Fade out
		setTimeout(function() { // Wait until fully disappeared
			// Increment and set the test of curr slot to curr interest
			slot.text(interests[i++ % interests.length]);
			// Fade out
			slot.fadeIn(600);
		}, 500)
	}, 2000);
}
