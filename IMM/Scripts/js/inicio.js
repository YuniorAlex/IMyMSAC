var menu = document.querySelector('nav.navbar');
console.log(menu);

function cambiarNav() {
    if (document.documentElement.scrollTop > 0) {
        menu.classList.add('deslizar');
        console.log('hecho');
    }
    else {
        menu.classList.remove('deslizar');
    }
}

window.addEventListener('scroll', cambiarNav, false);