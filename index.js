// Ajoute un écouteur d'événement de pression de touche
document.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);// Sélectionne l'élément audio correspondant à la touche pressée
    const key = document.querySelector(`.piano-ele[data-key="${event.keyCode}"]`); // Sélectionne l'élément piano correspondant à la touche pressée

    // Vérifie si un élément audio correspondant a été trouvé
    if (audio) {
        audio.currentTime = 0;// faire la lecture répétée
        audio.play();
        
    }

    // Vérifie si un élément piano correspondant a été trouvé
    if (key) {
        key.classList.add('playing'); // Ajoute la classe 'playing' à l'élément piano pour appliquer un style visuel

        // Ajoute un écouteur d'événement de fin de transition pour supprimer la classe 'playing' une fois la transition terminée
        key.addEventListener('transitionend', function() {
            key.classList.remove('playing');
        });
    }
    // Ajoute un écouteur d'événement de clic de souris
document.addEventListener('click', function(event) {
    // Vérifie si le clic a été effectué sur un élément de touche de piano
    if (event.target.matches(pianoKeySelector)) {
        // Récupère le code de la touche à partir de l'attribut data-key
        const keyCode = event.target.getAttribute('data-key');
        // Appelle la fonction pour jouer le son avec le code de touche
        playSound(keyCode);
    }
});



