$(document).ready(function() {



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
var interests = ['Algorithms', 'Product Design', 'Big Data', 'Artificial Intelligence', 'Problem Solving', 'API Development', 'Machine Learning'];
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
