// Initialisation librairie Typed pour avoir la phrase dynamique dans le header
var typed = new Typed('.animatedSentence', {
    strings: ["Je suis Charles-Boris DAUVIER", "Je suis apprenant développeur Web et Mobile"],
    typeSpeed: 80,
    startDelay: 50,
    loop: true
});

/* ========= MENU BURGER ========== */

// Change la classe du menu lorsqu'on clique sur le menu burger.
$("#burger").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Accueil
$("#list1").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Présentation
$("#list2").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Parcours
$("#list3").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Compétences
$("#list4").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Projet
$("#list5").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Contact
$("#list6").on({
    click: function () {
        $("#listNav").toggleClass("deplacement")
    }
});



// Initialisation librairie scrollIt qui permet de modifier la vitesse du scroll
$(function() {
    $.scrollIt({
        scrollTime: 2000,
        topOffset: -50,
        easing: 'linear'
    });
});



//  Initialisation owl carousel
// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel({
//         items: 1,
//         animateOut: 'slideOutDown',
//         animateIn: 'flipInX',
//         loop: true
//     });
// });

/* Initialisation Isotope */
window.onload = function() {
    $grid = $('.allProject').isotope({
        itemSelector: '.parentHovering',
        masonry: {
            columnWidth: 100,
            isFitWidth: true
        }
    });
};


// Lorsqu'on clique sur All, affiche tout et enlève classe "active1" à tous les éléments puis ajoute classe "active1"  à All
$("#all-filter").on("click", function() {
    $grid.isotope({ filter: '*' });
    $(".portfolioMenu").removeClass("active1");
    $("#all-filter").addClass("active1");
});

// Lorsqu'on clique sur Js, affiche les éléments avec la classe "js" et enlève classe "active1" à tous les éléments puis ajoute classe "active1" à Js
$("#js-filter").on("click", function() {
    $grid.isotope({ filter: '.js' });
    $(".portfolioMenu").removeClass("active1");
    $("#js-filter").addClass("active1");
});

$("#wordpress-filter").on("click", function() {
    $grid.isotope({ filter: '.wordpress' });
    $(".portfolioMenu").removeClass("active1");
    $("#wordpress-filter").addClass("active1");
});

$("#html-filter").on("click", function() {
    $grid.isotope({ filter: '.html' });
    $(".portfolioMenu").removeClass("active1");
    $("#html-filter").addClass("active1");
});

$("#vue-js-filter").on("click", function() {
    $grid.isotope({ filter: '.vue-js' });
    $(".portfolioMenu").removeClass("active1");
    $("#vue-js-filter").addClass("active1");
});

$("#php-filter").on("click", function() {
    $grid.isotope({ filter: '.php' });
    $(".portfolioMenu").removeClass("active1");
    $("#php-filter").addClass("active1");
});

$("#laravel-filter").on("click", function() {
    $grid.isotope({ filter: '.laravel' });
    $(".portfolioMenu").removeClass("active1");
    $("#laravel-filter").addClass("active1");
});



//fonction bouger permet d'afficher la div de position indice
function bouger(indice) {
    switch (indice) {
        case 1:
            document.getElementById("ropeUp").className = "visi";
            document.getElementById("itAkademy").className = "cache";
            document.getElementById("driver").className = "cache";
            document.getElementById("army").className = "cache";
            break;

        case 2:
            document.getElementById("ropeUp").className = "cache";
            document.getElementById("itAkademy").className = "visi";
            document.getElementById("driver").className = "cache";
            document.getElementById("army").className = "cache";
            break;

        case 3:
            document.getElementById("ropeUp").className = "cache";
            document.getElementById("itAkademy").className = "cache";
            document.getElementById("driver").className = "visi";
            document.getElementById("army").className = "cache";
            break;

        case 4:
            document.getElementById("ropeUp").className = "cache";
            document.getElementById("itAkademy").className = "cache";
            document.getElementById("driver").className = "cache";
            document.getElementById("army").className = "visi";
            break;
    }
}

var indice = 1; // initialisation de la variable indice à 1 car quand on charge la page on arrive sur la div numéro 1 par défaut
document.getElementById("rightArrowIcon").addEventListener("click", function() { // si on avance
    if (indice < 4) { // si on est pas à la fin du carousel
        bouger(indice + 1); // on affiche l'élément suivant
        indice++; // on augmente notre position sur l'élément suivant
    } else { //sinon si on est déjà sur indice 4
        bouger(1); // on retourne sur premier div
        indice = 1; // on marque qu'on est sur la première position
    }
});

document.getElementById("leftArrowIcon").addEventListener("click", function() { // on recule
    if (indice > 1) { // si on recule et qu'on est pas encore au premier élément
        bouger(indice - 1); // on recule vers l'élément précédent
        indice--; // on décrémente notre position sur l'élément précédent
    } else { // sinon si on arrive sur le premier élément div
        bouger(4); //on retourne sur la dernière div pour faire une continuité
        indice = 4; // on marque notre position actuelle sur le dernier élément
    }
});

// Lorsqu'on scroll, lance la fonction onWindowScroll
window.addEventListener('scroll', onWindowScroll);

function onWindowScroll(event) {

    const nav = document.getElementById('navBar');

    //console.log(window.pageYOffset);

    if (window.pageYOffset < 2488) {
        nav.classList.remove('overCarousel')
    } else {
        nav.classList.add('overCarousel')
    }
}





/* ======== MODAL =========== */

// Permet de savoir quelle modal est ouverte
let modal = null;

// Contient tous les éléments focusables
const focusableSelector = 'button, a, input, textarea';

let focusables = [];

// fonction qui prend en paramètre l'événement
const openModal =  function (e) {
    e.preventDefault();
    // Sélectionne l'élément qui correspond à la valeur de l'attribut href
    modal = document.querySelector(e.target.getAttribute('href'));
    focusables = Array.from(modal.querySelectorAll(focusableSelector));
    focusables[0].focus();
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.addEventListener('click', closeModal);
    modal.querySelector('.jsModalClose').addEventListener('click', closeModal);
    modal.querySelector('.jsModalStop').addEventListener('click', stopPropagation);
};

const closeModal = function (e) {
    if (modal === null) return;
    e.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.jsModalClose').removeEventListener('click', closeModal);
    modal.querySelector('.jsModalStop').removeEventListener('click', stopPropagation);
    modal = null
};

const stopPropagation = function (e) {
    e.stopPropagation()
};

const focusInModal = function (e) {
    e.preventDefault();
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'));
    if (e.shiftKey === true) {
        index --
    } else {
        index ++
    }
    if (index >= focusables.length) {
        index = 0
    }
    if (index < 0) {
        index = focusables.length - 1
    }
    focusables[index].focus()
};


// sélectionne tous les éléments qui ont la class jsModal
// Pour chaque lien, ajoute un événement qui appelle la fonction openModal
document.querySelectorAll('.jsModal').forEach(a => {
    a.addEventListener('click', openModal);
});

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
    if (e.key === 'Tab' && modal !== null) {
        focusInModal(e)
    }
})

/* ========= VALIDATION FORMULAIRE ========== */


myForm.addEventListener('submit', function (e) {
    let er = false;
    let myNameInput = document.getElementById('name');
    let myEmailInput = document.getElementById('mail');
    let myMessageInput = document.getElementById('text');
    let myNameRegex = /^[a-zA-Z-\s]+$/;
    let myEmailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if (myNameInput.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le champs nom est requis.";
        er = true;
        myError.style.color = 'red';
        e.preventDefault();
    } else if (myNameRegex.test(myNameInput.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le nom doit comporter des lettres majuscules ou minuscules et des tirets uniquements.";
        er = true;
        myError.style.color = 'red';
        e.preventDefault();
    }

    if (myEmailInput.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le champs email est requis.";
        er = true;
        myError.style.color = 'red';
        e.preventDefault();
    } else if (myEmailRegex.test(myEmailInput.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "L'email doit être de la forme : xxxxxxx@xxxxxx.xx";
        er = true;
        myError.style.color = 'red';
        e.preventDefault();
    }

    if (myMessageInput.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le champs message est requis.";
        er = true;
        myError.style.color = 'red';
        e.preventDefault();
    }

    /* =============== ENVOIE FORMULAIRE ============== */


    if (er === false) {
        var frm = $('#myForm');
    e.preventDefault();
    //alert('yoo');
    $.ajax({
        // On recupere la methode du formulaire
        type: frm.attr('method'),

        // On specifie la cible pour traiter le formulaire
        url: frm.attr('action'),

        // Récupere et Formate les données du formulaire
        data: frm.serialize(),
        success: function(data) {
            $('#error').html('Votre message a été envoyé avec succès');
            $('#error').css('color', 'green');
            console.log(data);
            console.log('ici success');
        },
        error: function(data) {
            $('#error').html("Erreur lors de l'envoie du message");
            $('#error').css('color', 'red');
            console.log(data);
        },
    })

    }
});









