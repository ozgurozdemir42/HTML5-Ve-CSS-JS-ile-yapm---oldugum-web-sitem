
var mybutton = document.getElementById("ybtnid");
window.onscroll = function() {yukaricik()};
var altMenuGorunumu = false;

function getBtn(){
	if(mybutton == null)
	{
		mybutton = document.getElementById("ybtnid");
	}

}
function yukaricik(){
	getBtn();
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}

function altMenuyuDegistir(){
	if(altMenuGorunumu == false){
		altMenuGorunumu = true;
		var element = document.getElementById("EGITIMALTMENU");
		element.style.display = "block";
	}
	else{
		altMenuGorunumu = false;
		var element = document.getElementById("EGITIMALTMENU");
		element.style.display = "none";
	}
}

