// Création de l'évenement de type "Click" sur le bouton "Charger les planètes"
var loadIt = document.getElementsByClassName("loadIt");
loadIt[1].addEventListener("click", function() {
    loadPlanet()
});

// Fonction qui charge le nom des planètes
function loadPlanet() {
    fetch('https://swapi.co/api/planets/')

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function (data) {
                p = document.getElementById("name1");
                p.innerHTML = " ";
                for (let i=0; i<data.results.length; i++) {



                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG");

                    // Insertion de l'enfant dans le parent
                    p.appendChild(r);

                    // Paragraphe qui contient le nom de la planète
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


// Fonction qui affiche le détail des planètes
function loadDetail(url) {

    fetch(`${url}`)

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function(data) {
                console.log(data.residents);
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

                // Ajout de la période de rotation
                e3 = document.createElement("p");
                e3.innerHTML = 'PERIODE DE ROTATION : ' + data.rotation_period;
                d.appendChild(e3);

                // Ajout de la période de l'orbite
                e = document.createElement("p");
                e.innerHTML = 'PERIODE ORBITE : ' + data.orbital_period;
                d.appendChild(e);

                // Ajout du diamètre
                e = document.createElement("p");
                e.innerHTML = 'DIAMETRE : ' + data.diameter;
                d.appendChild(e);

                // Ajout du climat
                e = document.createElement("p");
                e.innerHTML = 'CLIMAT : ' + data.climate;
                d.appendChild(e);

                // Ajout de la gravité
                e = document.createElement("p");
                e.innerHTML = 'GRAVITE : ' + data.gravity;
                d.appendChild(e);

                // Ajout du terrain
                e = document.createElement("p");
                e.innerHTML = 'TERRAIN : ' + data.terrain;
                d.appendChild(e);

                // Ajout surface de l'eau
                e = document.createElement("p");
                e.innerHTML = 'SURFACE EAU : ' + data.surface_water;
                d.appendChild(e);

                // Ajout population
                e = document.createElement("p");
                e.innerHTML = 'POPULATION : ' + data.population;
                d.appendChild(e);

                // Ajout résident
                resident(data.residents);

                //e = document.createElement("p");
                //e.innerHTML = 'RESIDENT : ' + data.eye_color;
                //d.appendChild

            }
        )

}

// Fonction qui ajoute les noms des résidents
function resident (url) {
    for (i=0; i<url.length; i++) {
        var info = url[i];
        fetch(info)

            .then(
                function (response) {
                    return response.json()
                })

            .then(
                function (data) {

                    e = document.createElement("p");
                    e.innerHTML = 'RESIDENT : ' + data.name;
                    d.appendChild(e);
                    console.log(data.name)
                }
            )

    }
}

// Creation de la variable qui contient le numéro de page
page = 1;

// Creation de l'événement sur le bouton suivant
next = document.getElementsByClassName("loadIt");
next[2].addEventListener("click", function () {
    page += 1;
    nextPlanet()
});

// Création de l'événement sur le bouton précédent
previous = document.getElementsByClassName("loadIt");
previous[0].addEventListener("click", function () {
    page -= 1;
    if (page < 1) {
        page = 1
    } else {
        nextPlanet()
    }
});

// Fonction qui modifie la page
function nextPlanet() {
    fetch(`https://swapi.co/api/planets/?page=${page}`)

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function (data) {
                p = document.getElementById("name1");
                p.innerHTML = " ";
                for (let i=0; i<data.results.length; i++) {

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG");

                    p.appendChild(r);

                    // Paragraphe qui contient le nom des planètes
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p");
                    e2.innerHTML = "Voir le détail";

                    r.appendChild(e);
                    r.appendChild(e2);
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].name);
                    });
                }

            }
        )
}

// RECHERCHE



      