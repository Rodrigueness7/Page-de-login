let nameLogin = document.getElementById("nameLogin");
let passwordLogin = document.getElementById("passwordLogin");
let entrar = document.getElementById("entrar");
let resultado = document.getElementById("resultado")

entrar.addEventListener("click", function(){
    if(nameLogin.value == localStorage.getItem("name") && passwordLogin.value == localStorage.getItem("senha")){
        location.replace("principal.html")
    }else{
        resultado.innerHTML = "Usuário ou senha inválido"
    }
    
})

