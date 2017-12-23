$(document).ready(function() {



    // Interests Section
    // Initial Fade in
    $("#slot0").animate({opacity: 0}, duration=20);
    $("#slot1").animate({opacity: 0}, duration=20);
    $("#slot2").animate({opacity: 0}, duration=20);
    $("#slot0").animate({opacity: 1});
    $("#slot1").animate({opacity: 1});
    $("#slot2").animate({opacity: 1});

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
    slot.animate({opacity: 0}); // Fade out
    setTimeout(function() { // Wait until fully disappeared...
        // Set the text of curr slot to curr interest and increment i
        slot.text(interests[i++ % interests.length]);
        slot.animate({opacity: 1}); // Fade in with new text
    }, 500)
}
