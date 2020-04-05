// AFFICHER
function load() {

    $.ajax({
        url: "http://jihane.fr/dwmg2/api/music/liste.php",
        type: "GET",
        success: function (add_all) {
            //console.log(add_all);
            for (i=0; i<add_all.length; i++) {
                $("<tr> <td>"+ add_all[i].id +"</td> <td>"+ add_all[i].Titres +"</td> <td>"+ add_all[i].Genres +"</td> <td>"+ add_all[i].Artistes +"</td> <td>"+ add_all[i].Dates +"</td> <td>"+ add_all[i].Temps +"</td> <td><button onclick='see("+add_all[i].id+")' type=\"button\" class=\"btn btn-primary\" id='button_see_music' data-target=\"#staticBackdrop2\" data-toggle=\"modal\">Voir</button></td>  </tr>").appendTo($('#begin_tbody'));
            }
        },
        dataType: "json"
    });

}
load();

//$('#staticBackdrop').modal('show');



// AJOUTER
$("#button_add_music").on({
    click: function () {
        $.post ({
            url: "http://jihane.fr/dwmg2/api/music/create.php",

            data: {
                Titres : $("#titre").val(),
                Artistes : $("#artiste").val(),
                Genres : $("#genre").val(),
                Dates : $("#date").val(),
                Temps: $("#temps").val()
            },
            success: function () {
                $("#begin_tbody").html(" ");
                load();
            },
            dataType: "text"
        });

    }
});

// VOIR
function see(id) {
    $.get ({
        url: "http://jihane.fr/dwmg2/api/music/read.php",
        data: {
            id:id
        },
        success: function(rep) {
            //console.log(rep);
            $("#idcache").val(rep.id),
            $("#titre2").val(rep.Titres),
            $("#artiste2").val(rep.Artistes),
            $("#genre2").val(rep.Genres),
            $("#date2").val(rep.Dates),
            $("#temps2").val(rep.Temps)
        },
        dataType: "json"
    })
    }



// SUPPRIMER

$("#button_delete_music").on({
    click: function () {
        $.get ({
            url:'http://jihane.fr/dwmg2/api/music/delete.php',
            data: {
                id : $("#idcache").val()
            },
            success: function() {
                $("#begin_tbody").html(" ");
                load();
            },
            dataType: "text"
        });
    }
});

// MODIFIER

$("#button_update_music").on({
    click: function () {
        console.log("update");
        $.get ({
            url:'http://jihane.fr/dwmg2/api/music/update.php',
            data: {
                id : $("#idcache").val(),
                Titres : $("#titre2").val(),
                Artistes : $("#artiste2").val(),
                Genres : $("#genre2").val(),
                Dates : $("#date2").val(),
                Temps: $("#temps2").val()
            },
            success: function () {
                //console.log(x);
                $("#begin_tbody").html(" ");
                load();
            },
        });

    }
});


// TRI

$("#button_sort_music").on ({
    click: function () {
        $.get ({
            url: 'http://jihane.fr/dwmg2/api/music/tri.php',
            data: {
                Titres : $("#titre").val(),
                Artistes : $("#artiste").val(),
                Genres : $("#genre").val(),
                Dates : $("#date").val(),
                Temps: $("#temps").val()
            },
            success: function (tri) {
                console.log(tri);
                $("#begin_tbody").html(" ");

                for (i=0; i<tri.length; i++) {
                    $("<tr> <td>"+ tri[i].id +"</td> <td>"+ tri[i].Titres +"</td> <td>"+ tri[i].Genres +"</td> <td>"+ tri[i].Artistes +"</td> <td>"+ tri[i].Dates +"</td> <td>"+ tri[i].Temps +"</td> <td><button onclick='see("+tri[i].id+")' type=\"button\" class=\"btn btn-primary\" id='button_see_music' data-target=\"#staticBackdrop2\" data-toggle=\"modal\">Voir</button></td>  </tr>").appendTo($('#begin_tbody'));
                }
            },
            dataType: "json"
        })
    }
})


/*function afficher(choix) {
    $.get ({
        url: 'http://jihane.fr/dwmg2/api/music/tri.php?'+choix,
        data: {

        },
        success: function (v) {
            console.log(v)
        },
        dataType: "json"
    });
}


$(document).ready(function() {
    $("select").change(function () {
        var choix = $(this).children("option:selected").val();
        console.log(choix);
   if (choix="Genres")
        afficher("Genres=Pop");
    });
});*/