
document.getElementById('menuToggle').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

document.getElementById('menuToggle').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});

document.getElementById('menuToggle').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('active'); 
});

function adjustPageScaling() {
    const width = window.innerWidth;

    let scaleValue = 1;

    if (width >= 992 && width <= 1600) {
        scaleValue = 0.9; 
    } else if (width >= 700 && width <= 767) {
        scaleValue = 0.8; 
    } else if (width >= 600 && width <= 700) {
        scaleValue = 0.75; 
    } else if (width <= 600) {
        scaleValue = 0.5; 
    }
    document.body.style.transform = `scale(${scaleValue})`;
    document.body.style.transformOrigin = 'top center'; 
}


window.addEventListener('load', adjustPageScaling);
window.addEventListener('resize', adjustPageScaling);
