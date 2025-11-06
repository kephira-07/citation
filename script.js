// On sélectionne les éléments HTML dont on a besoin
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// L'URL de l'API que nous allons appeler
// C'est une API gratuite et sans clé : https://quotable.io
const apiUrl = "http://api.quotable.io/random";

// On crée une fonction pour aller chercher la citation
async function getNewQuote() {
    try {
        // 1. On "fetch" (récupère) les données depuis l'URL de l'API
        // "await" met en pause le script jusqu'à ce que la réponse arrive
        const response = await fetch(apiUrl);

        // 2. On convertit la réponse (qui est brute) en objet JSON
        const data = await response.json();

        // 3. On met à jour le contenu de nos éléments HTML
        // (En regardant la doc de l'API, on sait que la citation est dans 'data.content' et l'auteur dans 'data.author')
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;

    } catch (error) {
        // En cas de problème (ex: pas d'internet)
        quoteElement.textContent = "Oops, quelque chose s'est mal passé.";
        authorElement.textContent = "";
        console.error(error);
    }
}

// On attache notre fonction à l'événement "clic" du bouton
newQuoteBtn.addEventListener("click", getNewQuote);

// Optionnel : on charge une première citation dès l'ouverture de la page
getNewQuote();
