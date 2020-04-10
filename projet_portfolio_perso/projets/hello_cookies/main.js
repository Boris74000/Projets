function survol(name)
{
	document.getElementById(name).style.borderColor = "red";
	
}

function out(name)
{
	document.getElementById(name).style.borderColor = "blue";
	
}

function envoie()
{
	var x = document.getElementById("nom").value
    var y = document.getElementById("prenom").value

	alert(`${x} ${y}. Nous avons bien reçu votre message`);
}