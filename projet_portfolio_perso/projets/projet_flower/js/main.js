new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        992: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();

var rellax = new Rellax('.rellax', {
    speed: -4,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

AOS.init();

$(function(){
    $.scrollIt({
        scrollTime: 3000,
        topOffset: -50,
        easing: 'linear'
    });
});

/* Change la classe du menu lorsqu'on clique sur le menu burger. */
$("#burger").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

/* cache le menu lorsqu'on clique dessus */
$("#list1").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

$("#list2").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

$("#list3").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

$("#list4").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

$("#list5").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

/*$(window).scroll(function () {

})*/


// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.


function onWindowScroll(event) {

    const nav = document.getElementsByClassName('navbartop');

    console.log(window.pageYOffset)

	if (window.pageYOffset < 516) {
  	nav[0].classList.remove('scrolled')
  } else {
  	nav[0].classList.add('scrolled')
  }
}
window.addEventListener('scroll', onWindowScroll);


















