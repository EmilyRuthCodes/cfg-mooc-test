function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        alert("You're already on your way to being a pro!");
    } else if (average >= 4) {
        alert("Don't worry, you'll get there! It just takes time and practice.");
    } else {
        alert("The only way to get better is to keep trying! You can do this!");
    }
}

comfortLevel(8, 9, 10);

// DARK MODE IN PRACTICE
// IT ONLY GOES TO DARK MODE, NOT BACK TO LIGHT AT A TOGGLE
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
} 