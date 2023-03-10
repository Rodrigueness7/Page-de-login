let nameCadastro = document.getElementById("nameCadastro");
let passwordCadastro = document.getElementById("passwordCadastro");
let enviar = document.getElementById("enviar");
let resultado = document.getElementById("resultado");



enviar.addEventListener("click", function(){
    localStorage.setItem("name",nameCadastro.value);
    localStorage.setItem("senha",passwordCadastro.value)
    
    nameCadastro.value = "";
    passwordCadastro.value = null ;
    
    resultado.innerHTML = "Cadastro concluido com sucesso."
})