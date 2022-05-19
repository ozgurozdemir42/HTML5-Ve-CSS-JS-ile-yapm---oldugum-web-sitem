// Get the modal


function ktoBilgi() {
    var ktoModal = document.getElementById("KTOModal");
    ktoModal.style.display = "block";
}

function ktoKapat() {
    var ktoModal = document.getElementById("KTOModal");
    ktoModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var ktoModal = document.getElementById("KTOModal");
    var farabiModal = document.getElementById("farabiModal");
    if (event.target == ktoModal) {
        ktoModal.style.display = "none";
    }
    if (event.target == farabiModal) {
        farabiModal.style.display = "none";
    }
}