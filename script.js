let toggleButton = false;

function toggle() {
    toggleButton = !toggleButton;
    toggleButton ? document.getElementById('nav-items').style.right = '0' : document.getElementById('nav-items').style.right = '-200px';
}
