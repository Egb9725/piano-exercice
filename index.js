// Ajoute un écouteur d'événement de pression de touche
document.addEventListener('keydown', function(event) {
   
    const audio = document.querySelector(`audio[data-key="${event.keycode}"]`);// Sélectionne l'élément audio correspondant à la touche pressée

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // Vérifie si un élément audio correspondant a été trouvé
    if (audio) {
        audio.play();  
    }

    
}) 




/*
// cas pour n'est pas utiliser la propriété keycode
function soundPlayer(keyCode){
    if (!keyCode) return;

    const selector = '[data-key="${keyCode}]'

    const sound=document.querySelector('audio${selector}')

    const key=document.querySelector('key${selector}')

    key.classList.add("play");

    sound.play();

    

}
function switchStyle(selector){

    const key=document.querySelector(selector);
    if (key.classList.contains("play")){
        key.classList.remove("play");
    }
    key.classList.remove("play");
}

const soundKeys={d:68,r:82,f:70;t:84,g:71,h:72,u:85,j:74;i=79,k:76,o:73,l:76}

document.addEventListener('keydown', function(event) {
    event.repat=false;
    soundPlayer(soundKeys[event.key]);
}
document.addEventListener('keydown', function(event) {
    const selector='div[data-key="${soundKey[event.key]}"]';
    soundPlayer(soundKeys[event.key]);
}
/*
