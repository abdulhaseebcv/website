// Global variables
let isToggledOn = false;

// Fucntion for when toggle button clicked
function toggle() {
    isToggledOn = !isToggledOn;
    isToggledOn ? document.getElementById('nav-items').style.right = '0' : document.getElementById('nav-items').style.right = '-200px';
}
