// Création d'un objet de synthèse vocale qui contiendra le texte et les paramètres de lecture.
let speech = new SpeechSynthesisUtterance();

// Déclaration d'un tableau pour stocker toutes les voix disponibles.
let voices = [];

// Sélection de l'élément <select> (menu déroulant) dans le document HTML.
let voiceSelect = document.querySelector("select");

// Événement déclenché lorsque la liste des voix disponibles est mise à jour (au chargement de la page ou ajout de nouvelles voix).
window.speechSynthesis.onvoiceschanged = () => {
    // Récupère toutes les voix disponibles et les stocke dans le tableau `voices`.
    voices = window.speechSynthesis.getVoices();

    // Définit par défaut la première voix disponible pour l'objet `speech`.
    speech.voice = voices[0];

    // Ajoute chaque voix dans le menu déroulant <select>, avec son nom et son index.
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i); // `Option` crée une nouvelle option dans le menu déroulant.
    });
};

// Événement déclenché lorsqu'une nouvelle voix est sélectionnée dans le menu déroulant.
voiceSelect.addEventListener("change", () => {
    // Change la voix utilisée par l'objet `speech` en fonction de la sélection de l'utilisateur.
    speech.voice = voices[voiceSelect.value];
});

// Ajout d'un événement sur le bouton pour lire le texte saisi dans la zone de texte.
document.querySelector("button").addEventListener("click", () => {
    // Récupère le texte saisi par l'utilisateur dans la zone de texte <textarea>.
    speech.text = document.querySelector("textarea").value;

    // Utilise la méthode `speak()` pour lire le texte avec la voix sélectionnée.
    window.speechSynthesis.speak(speech);
});


/*SpeechSynthesisUtterance() : Une API JavaScript intégrée qui crée un objet représentant une unité de texte à lire à voix haute. Cet objet contient des propriétés comme le texte à lire, la langue, la vitesse, etc.*/