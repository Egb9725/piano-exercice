// Ajoute un écouteur d'événement de pression de touche
document.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);// Sélectionne l'élément audio correspondant à la touche pressée
    // Vérifie si un élément audio correspondant a été trouvé
    if (audio) {
        audio.play();  
    }

})


/*
// cas pour n'est pas utiliser la propriété keycode
function soundPlayer(key){
    if (!key) return;
    const pianoPlay=document.querySelector('audio[data-key="${key}"]')
    pianoPlay.play();

}

const soundKeys={d:68,r:82,f:70;t:84,g:71,h:72,u:85,j:74;i=79,k:76,o:73,l:76}

document.addEventListener('keydown', function(event) {
soundPlayer(soundKeys[event.key])
}
/*
