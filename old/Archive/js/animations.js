$(document).ready(function() {

   
    // Hovering over the icons switches src (colors changed using Photoshop)
    $(".git-icon").hover(function() {
        $(this).attr("src", "../img/git-hover.png");
    }, function() {
        $(this).attr("src", "../img/git.png")
    }).click(function() {
        $(this).attr("src", "../img/git.png")
    });

    $(".linkedin-icon").hover(function() {
        $(this).attr("src", "../img/linkedin-hover.png");
    }, function() {
        $(this).attr("src", "../img/linkedin.png")
    }).click(function() {
        $(this).attr("src", "../img/linkedin.png")
    });

    $(".resume-icon").hover(function() {
        $(this).attr("src", "../img/resume-hover.png");
    }, function() {
        $(this).attr("src", "../img/resume.png")
    }).click(function() {
        $(this).attr("src", "../img/resume.png")
    });



    // Interests Section
    // Initial Fade in
    $("#slot0").fadeOut(0);
    $("#slot1").fadeOut(0);
    $("#slot2").fadeOut(0);
    $("#slot0").fadeIn(2000);
    $("#slot1").fadeIn(2000);
    $("#slot2").fadeIn(2000);

    // Swap interest every 2000 ms
    setInterval(swap, 2000);
});

// List of interests
var interests = ['Algorithms', 'User Interface Design', 'Problem Solving', 'Product Design', 'Web Development', 'Artificial Intelligence', 'iOS Development'];
var i = 0; // Index in interests
var s = 0; // Slot index

// Swap out interest
function swap() {
    //  Get current slot and increment slot number
    var slot = $("#slot" + (s++ % 3));
    slot.fadeOut(500); // Fade out
    setTimeout(function() { // Wait until fully disappeared...
        // Set the text of curr slot to curr interest and increment i
        slot.text(interests[i++ % interests.length]);
        slot.fadeIn(600); // Fade in with new text
    }, 500)
}
