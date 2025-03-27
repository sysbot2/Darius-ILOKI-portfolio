document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9wJotwI4p-13R6XUE"); // Remplace par ton User ID

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("ameliorer").value;

        if (!nom || !prenom || !email || !message) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        const params = {
            nom: nom,
            prenom: prenom,
            email: email,
            message: message,
        };

        emailjs.send("service_z7a3bbo", "template_m6qijnd", params)
            .then(response => {
                alert("Message envoyé avec succès !");
                document.querySelector("form").reset();
            })
            .catch(error => {
                alert("Erreur lors de l'envoi : " + error);
            });
    });
});
