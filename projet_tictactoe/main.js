function cliquer(id) 
{
	if ((document.getElementById(id).style.backgroundColor == "blue") || (document.getElementById(id).style.backgroundColor == "red")) {
		
	
	} else {
		if (color == "blue") {

			document.getElementById(id).style.backgroundColor = "red";
			color = "red"
		}else {
			document.getElementById(id).style.backgroundColor = "blue";
			color = "blue"

		}
	}

}

var color = "blue"


function rejouer()
{
	for (i=1; 1<=9; i++) {
			document.getElementById(i).style.backgroundColor = "";

	}
	

}






