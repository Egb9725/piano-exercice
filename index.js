// Ajoute un écouteur d'événement de pression de touche
document.addEventListener('keydown', function(event) {
   
    const audio = document.querySelector(`audio[data-key="${event.keycode}"]`);// Sélectionne l'élément audio correspondant à la touche pressée

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // Vérifie si un élément audio correspondant a été trouvé
    if (audio) {
        audio.play();  
    }

    if (key) {
        key.classList.add('playing'); // Ajoute la classe 'playing' à l'élément piano pour appliquer un style visuel
 
 
        // Ajoute un écouteur d'événement de fin de transition pour supprimer la classe 'playing' une fois la transition terminée
        key.addEventListener('transitionend', function() {
            key.classList.remove('playing');
        });
    };
 
})


/*
// cas pour n'est pas utiliser la propriété keycode
function soundPlayer(keyCode){
    if (!keyCode) return;

    const selector = '[data-key="${keyCode}]'

    const sound=document.querySelector('audio${selector}')

    const key=document.querySelector('key${selector}')

    sound.play();

    

}

const soundKeys={d:68,r:82,f:70;t:84,g:71,h:72,u:85,j:74;i=79,k:76,o:73,l:76}

document.addEventListener('keydown', function(event) {
soundPlayer(soundKeys[event.key])
}
/*
