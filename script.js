//on écoute le scroll sur la fenêtre (window)
//addEventListener pour écouter l'"evenement et on écoute le 'scroll'
//Au 'scroll' on va déclencher une fonction
window.addEventListener('scroll', function() {
    //la const header va récupérer la class header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    //on on ajoute ou supprime si existante une class à header qui s'apelle 'sticky' qui vient si scroll est > à 0
});