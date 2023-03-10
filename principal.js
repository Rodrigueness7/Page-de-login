let usuario = document.getElementById("usuario");

function load(){
    usuario.innerHTML = localStorage.getItem("name")
}