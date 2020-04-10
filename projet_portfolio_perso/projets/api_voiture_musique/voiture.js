// AFFICHER
function load2() {
    fetch('http://jihane.fr/dwmg2/api/voiture/liste.php')

        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function (data) {
                //console.log(data)
                document.getElementById("begin_tbody").innerHTML = " ";
                for (i=0; i<data.length; i++) {

                    // Selection du parent
                    var parent_tbody = document.getElementById("begin_tbody");

                    // Creation de l'enfant tr
                    var enfant_tr = document.createElement("tr");
                    enfant_tr.setAttribute("id", "tr"+i);
                    parent_tbody.appendChild(enfant_tr);

                    // Creation des td
                    var element_td1 = document.createElement("td");
                    element_td1.setAttribute("id", "td"+i);
                    element_td1.innerHTML = data[i].marque;
                    enfant_tr.appendChild(element_td1);

                    var element_td2 = document.createElement("td");
                    element_td2.setAttribute("id", "td"+i);
                    element_td2.innerHTML = data[i].model;
                    enfant_tr.appendChild(element_td2);

                    var element_td3 = document.createElement("td");
                    element_td3.setAttribute("id", "td"+i);
                    element_td3.innerHTML = data[i].gamme;
                    enfant_tr.appendChild(element_td3);

                    var element_td4 = document.createElement("td");
                    element_td4.setAttribute("id", "td"+i);
                    element_td4.innerHTML = data[i].prix;
                    enfant_tr.appendChild(element_td4);

                    var element_td5 = document.createElement("td");
                    element_td5.setAttribute("id", "td"+i);
                    element_td5.innerHTML = data[i].id;
                    enfant_tr.appendChild(element_td5);

                    var element_td6 = document.createElement("td");
                    element_td5.setAttribute("id", "td"+i);

                    // Création du bouton voir
                    var boutonVoir = document.createElement("button");
                    boutonVoir.innerHTML = "Voir";

                    boutonVoir.setAttribute("id", "button_see_cars");
                    boutonVoir.setAttribute("onclick", "see("+data[i].id+")");
                    boutonVoir.setAttribute("type", 'button');
                    boutonVoir.setAttribute("class", 'btn btn-primary');
                    boutonVoir.setAttribute("data-target", '#staticBackdrop2');
                    boutonVoir.setAttribute("data-toogle", 'modal');
                    // Insertion du bouton dans le td
                    element_td6.appendChild(boutonVoir);
                    // Insertion du td dans le tr
                    enfant_tr.appendChild(element_td6);


                }
            }
        );
}
load2();

// AJOUTER

document.getElementById("button_add_car").addEventListener("click", function () {
    var data = new FormData(document.getElementById("addForm"));
    /* var data_id = document.getElementById("ID");
    var data_marque = document.getElementById("marque");
    var data_model = document.getElementById("model");
    var data_gamme = document.getElementById("gamme");
    var data_prix = document.getElementById("prix"); */

    fetch('http://jihane.fr/dwmg2/api/voiture/create.php', {
        method: "POST",
        body: data
            /* "marque=data_marque.value&model=data_model.value&gamme=data_gamme.value&prix=data_prix.value", */
        /* headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }*/
    })

        .then(
            data=> {
                console.log(data);
                load2();
            }
        )
});

// VOIR

function see(id) {
    $('#staticBackdrop2').modal('show');
    fetch('http://jihane.fr/dwmg2/api/voiture/read.php?id='+id)

        .then(
            function(response) {
                return response.json()
            }
        )

        .then(
            function (data) {
                // $("#idcache").val(rep.id),
                // $("#titre2").val(rep.Titres),
                document.getElementById("marque2").value = data.marque;
                document.getElementById("model2").value = data.model;
                document.getElementById("gamme2").value = data.gamme;
                document.getElementById("prix2").value = data.prix;
                document.getElementById("idcache").value = data.id;

                //console.log(data.marque);

            }
        )
}

// SUPPRIMER

document.getElementById("button_delete_car").addEventListener("click", function () {
    var id = document.getElementById("idcache").value;
    fetch('http://jihane.fr/dwmg2/api/voiture/delete.php?id='+id)

        .then(
            function (response) {

            }
        )

        .then(
            function () {
                load2();
            }
        )
});

// MODIFIER

document.getElementById("button_update_car").addEventListener("click", function () {

        var marque1 = document.getElementById("marque2").value;
        var model1 = document.getElementById("model2").value;
        var gamme1 = document.getElementById("gamme2").value;
        var prix1 = document.getElementById("prix2").value;
        var id1 = document.getElementById("idcache").value;


    fetch('http://jihane.fr/dwmg2/api/voiture/update.php?marque='+marque1+'&model='+model1+'&gamme='+gamme1+'&prix='+prix1+'&id='+id1)

            .then(
                function (response) {

                }
            )

            .then(
                function (data) {
                    console.log(data);
                    load2();
                }
            )
});

// TRIER
// trie.php
document.getElementById("button_sort_car").addEventListener("click", function () {
    console.log("ici");
    $.get ({
        url: 'http://jihane.fr/dwmg2/api/voiture/trie.php?',
        data: {
            marque : document.getElementById("marque").value,
            model : document.getElementById("model").value,
            gamme : document.getElementById("gamme").value,
            prix : document.getElementById("prix").value
        },
        success: function (tri) {
            console.log(tri);
            document.getElementById("begin_tbody").innerHTML = " ";

            for (i=0; i<tri.length; i++) {

                // Selection du parent
                var parent_tbody = document.getElementById("begin_tbody");

                // Creation de l'enfant tr
                var enfant_tr = document.createElement("tr");
                enfant_tr.setAttribute("id", "tr"+i);
                parent_tbody.appendChild(enfant_tr);

                // Creation des td
                var element_td1 = document.createElement("td");
                element_td1.setAttribute("id", "td"+i);
                element_td1.innerHTML = tri[i].marque;
                enfant_tr.appendChild(element_td1);

                var element_td2 = document.createElement("td");
                element_td2.setAttribute("id", "td"+i);
                element_td2.innerHTML = tri[i].model;
                enfant_tr.appendChild(element_td2);

                var element_td3 = document.createElement("td");
                element_td3.setAttribute("id", "td"+i);
                element_td3.innerHTML = tri[i].gamme;
                enfant_tr.appendChild(element_td3);

                var element_td4 = document.createElement("td");
                element_td4.setAttribute("id", "td"+i);
                element_td4.innerHTML = tri[i].prix;
                enfant_tr.appendChild(element_td4);

                var element_td5 = document.createElement("td");
                element_td5.setAttribute("id", "td"+i);
                element_td5.innerHTML = tri[i].id;
                enfant_tr.appendChild(element_td5);

                var element_td6 = document.createElement("td");
                element_td5.setAttribute("id", "td"+i);
            }
        },
        dataType: "json"
    })
})








