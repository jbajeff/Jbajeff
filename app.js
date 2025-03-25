console.log("Hello Haïti !");

const menuToggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");
	
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });


const form = document.getElementById('contact-form');

form.addEventListener('sumit', function(event) {
    let isValid = true;

    const nom = document.getElementById('nom').ariaValueMax.trim();
    if (nom.length < 2) {
        alert("");
        isValid = false;
    }

    const prenom = document.getElementById ('prenom').ariaValueMax.trim();
    if (prenom.length < 2) {
        alert("");
        isValid =false;
    }

    const sujet = document.getElementById ('sujet').ariaValueMax.trim();
    if (sujet.length < 5) {
        alert("");
        isValid =false;
    }

    const message = document.getElementById ('message').ariaValueMax.trim();
    if (message.length <10) {
        alert("");
        isValid =false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
