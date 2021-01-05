//on écoute le scroll sur la fenêtre (window)
//addEventListener pour écouter l'"evenement et on écoute le 'scroll'
//Au 'scroll' on va déclencher une fonction
window.addEventListener('scroll', function() {
    //la const header va récupérer la class header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    //on on ajoute ou supprime si existante une class à header qui s'apelle 'sticky' qui vient si scroll est > à 0
});

//////////////////////////////////
/*menu mobile*/
function toggleMenu() {
    // on crée une const et on slect la class menuToggle
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    //quand les classes sont active il se passe quelque chose en css
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/*========== ON SCROLL ANIMATION ==========*/

let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60)
}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()