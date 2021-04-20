
let nome = document.querySelector("input#nome")
let email = document.querySelector("input#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validarNome(){
    let avisoNome = document.querySelector("#avisoNome")
    if(nome.value.length<2){
        avisoNome.innerHTML = "Nome Inválido!"
        avisoNome.style.color = "red"
    } else {
        avisoNome.innerHTML = null
    }
}

function validarEmail(){
    let avisoEmail = document.querySelector("#avisoEmail")
    if(email.value.indexOf("@") == -1){
        avisoEmail.innerHTML = "Email Inválido!"
        avisoEmail.style.color = "red"
    } else {
        avisoEmail.innerHTML = null
    }
}


function openNav() {
    document.querySelector("#menu-principal").style.width = "250px";
}
  

function closeNav() {
    document.querySelector("#menu-principal").style.width = "0";
}