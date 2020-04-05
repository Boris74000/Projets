// Evenement sur le bouton rechercher planete
document.getElementById("searchPlanet").addEventListener("click", function () {

    var searchElement = document.getElementById("searchInput1").value;

    fetch('https://swapi.co/api/planets/?search='+searchElement)

        .then(
            function (response) {
                return response.json()

            }
        )

        .then(
            function (data) {
                console.log(data.results);
                p = document.getElementById("result");
                p.innerHTML = "";

                for (i=0; i<data.results.length; i++) {
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;
                    p.appendChild(e);
                }

            }
        )
});

// Evenement sur le bouton recherche personnage

document.getElementById("searchCharacter").addEventListener("click", function () {

    var searchElement = document.getElementById("searchInput2").value;

    fetch('https://swapi.co/api/people/?search='+searchElement)

        .then(
            function (response) {
                return response.json()

            }
        )

        .then(
            function (data) {
                console.log(data.results);
                p = document.getElementById("result");
                p.innerHTML = "";

                for (i=0; i<data.results.length; i++) {
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;
                    p.appendChild(e);
                }

            }
        )
});
