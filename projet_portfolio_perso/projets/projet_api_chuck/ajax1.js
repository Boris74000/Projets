// Fonction pour générer une facts
function genere() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var j = JSON.parse(xhr.responseText);
        var e = document.createElement("p");

        // Selection du parent
        p = document.getElementById("rep");

        // Vidage du contenu du parent
        p.innerHTML = " ";

        // Ajout de la classe "para"
        e.setAttribute("class", "para"  );

        // Ajout des informations contenu dans le JSON(facts)
        e.innerHTML = j[0].fact;

        // Ajout de l'enfant dans le parent
        p.appendChild(e);

        // Modification des classes
        document.getElementById("hiddenButton").className = "autre visible ";
        document.getElementById("hiddenButton2").className = "autre invisible";
        document.getElementById("hiddenButton3").className = "autre invisible";



    };

    xhr.open('GET', 'http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1');
    xhr.send();
}

// Ajout d'un événement sur le bouton "top 10"
var top10 = document.getElementById("top10");
top10.addEventListener("click", function() {
    toptop()
});

// Affiche le top 10
function toptop() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;')

        .then(
        function (response) {
            return response.json()

        }
    )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";

                // Boucle pour inserer une fact dans un paragraphe
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");

                    // Ajouter la classe "para"
                    e.setAttribute("class", "para"  );

                    // Ajout des facts
                    e.innerHTML = data[i].fact;

                    // Insertion de l'enfant dans le parent
                    p.appendChild(e);

                    // Modification des classes
                    document.getElementById("hiddenButton2").className = "autre visible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                    document.getElementById("hiddenButton3").className = "autre invisible";
                }
            }
        )
}

// Variable qui contient le numéro de la page
var page = 1;

// Ajout de l'événement sur le bouton
var next = document.getElementById("next");
next.addEventListener("click", function() {
    page ++;
    showNext()
});

// Ajout de l'événement sur le bouton
var previous = document.getElementById("previous");
previous.addEventListener("click", function() {
    page --;
    if (page == 0) {
        page = 1;
    } else {
        showNext();
    }
})

// Fonction qui change la page du Top 10
function showNext() {

    fetch(`http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:${page}`)

        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre visible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                }
            }
        )
}

var lastFacts = document.getElementById("lastFacts");
lastFacts.addEventListener("click", function() { last()});

// Affiche les dernières facts
function last() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10')

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre invisible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                    document.getElementById("hiddenButton3").className = "autre visible";
                }
            }
        )
}


var page2 = 1;

var next2 = document.getElementById("next2");
next2.addEventListener("click", function() {
    page2 ++;
    showNext2()
});

var previous2 = document.getElementById("previous2");
previous2.addEventListener("click", function() {
    page2 --;
    if (page2 == 0) {
        page2 = 1;
    } else {
        showNext2();
    }
})

// Fonction qui change la page des dernières facts
function showNext2() {

    fetch(`http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10;page:${page2}`)

        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre invisible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                    document.getElementById("hiddenButton3").className = "autre visible";
                }
            }
        )
}





