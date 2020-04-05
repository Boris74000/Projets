// Création de l'évenement de type "Click" sur le bouton "Charger les personnages"
var loadIt = document.getElementsByClassName("loadIt");
loadIt[1].addEventListener("click", function() {
    loadPoke()
});

// Fonction qui charge le nom des personnages
function loadPoke() {
    fetch('https://swapi.co/api/people/')

        .then(
        function (response) {
            return response.json()

        }
    )
        .then(
            function (data) {
                //console.log(data.results[1].url);
                for (let i=0; i<data.results.length; i++) {

                    p = document.getElementById("name1");

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG");

                    // Insertion de l'enfant dans le parent
                    p.appendChild(r);

                    // Paragraphe qui contient le nom du personnage
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p");
                    e2.innerHTML = "Voir le détail";

                    // Insertion des enfants dans le parent
                    r.appendChild(e);
                    r.appendChild(e2);

                    // Création de l'événement sur "Voir le détail"
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].url)
                    });
                }

                // Affichage du bouton Suivant
                next= document.getElementsByClassName("loadIt");
                next[2].className = "loadIt visible";

                // Affichage du bouton Précédent
                previous = document.getElementsByClassName("loadIt");
                previous[0].className = "loadIt visible";

            }
        )
}


// Fonction qui affiche le détail des personnages
function loadDetail(url) {

    fetch(`${url}`)

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function(data) {
                p = document.getElementById("detail1");
                p.innerHTML = " ";

                // Creation de la Div qui recoit les détails
                d = document.createElement("div");
                d.setAttribute("class", "divDetail");
                p.appendChild(d);


                // Ajout du nom
                e2 = document.createElement("p");
                e2.innerHTML = 'NOM : ' + data.name ;
                d.appendChild(e2);

                // Ajout de la hauteur
                e3 = document.createElement("p");
                e3.innerHTML = 'HAUTEUR : ' + data.height;
                d.appendChild(e3);

                // Ajout du genre
                e = document.createElement("p");
                e.innerHTML = 'POIDS : ' + data.mass;
                d.appendChild(e);

                // Ajout couleur de cheveux
                e = document.createElement("p");
                e.innerHTML = 'COULEUR DE CHEVEUX : ' + data.hair_color;
                d.appendChild(e);

                // Ajout couleur de peau
                e = document.createElement("p");
                e.innerHTML = 'COULEUR DE PEAU : ' + data.skin_color;
                d.appendChild(e);

                // Ajout couleur des yeux
                e = document.createElement("p");
                e.innerHTML = 'COULEUR DES YEUX : ' + data.eye_color;
                d.appendChild(e);


            }
        )
}

// Creation de la variable qui contient le numéro de page
page = 1;

// Creation de l'événement sur le bouton suivant
next = document.getElementsByClassName("loadIt");
next[2].addEventListener("click", function () {
    page += 1;
    nextCharacter()
});

// Création de l'événement sur le bouton précédent
previous = document.getElementsByClassName("loadIt");
previous[0].addEventListener("click", function () {
    page -= 1;
    if (page < 1) {
        page = 1
    } else {
        nextCharacter()
    }
});

// Fonction qui modifie la page
function nextCharacter() {
    fetch(`https://swapi.co/api/people/?page=${page}`)

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function (data) {
                p = document.getElementById("name1")
                p.innerHTML = " ";
                for (let i=0; i<data.results.length; i++) {

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG");

                    p.appendChild(r);

                    // Paragraphe qui contient le nom des personnages
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p");
                    e2.innerHTML = "Voir le détail";

                    r.appendChild(e);
                    r.appendChild(e2);
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].name)
                    });
                }

            }
        )
}



