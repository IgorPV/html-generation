
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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector("#menu-principal").style.width = "250px";
    document.getElementById("principal").style.marginLeft = "250px";
}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.querySelector("#menu-principal").style.width = "0";
  
}