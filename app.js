const formulaire = document.getElementById("contactForm");

const nom = document.getElementById("nom");

const email = document.getElementById("email");

const message = document.getElementById("message");

const resultat = document.getElementById("resultat");


// Écoute de l'envoi du formulaire

formulaire.addEventListener("submit", function(event){

    // Empêche le rechargement de la page
    event.preventDefault();

    // Supprime l'ancien message
    resultat.textContent = "";

    // Vérifie que tous les champs sont remplis
    if(
        nom.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ){

        resultat.textContent = "Veuillez remplir tous les champs.";

        resultat.style.color = "red";

        return;

    }

    // Vérifie l'email
    if(!email.value.includes("@")){

        resultat.textContent = "Adresse email invalide.";

        resultat.style.color = "red";

        return;

    }

    // Succès
    resultat.textContent = "Message envoyé avec succès !";

    resultat.style.color = "green";

    formulaire.reset();

});