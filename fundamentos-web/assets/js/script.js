
let nome = document.querySelector("input#nome")
let email = document.querySelector("input#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector(".mapsGoogle")

nome.style.width = "100%"
email.style.width = "100%"

function validarNome(){
    let avisoNome = document.querySelector("#avisoNome")
    if(nome.value.length<2){
        avisoNome.innerHTML = "Nome Inválido!"
        avisoNome.style.color = "red"
        avisoNome.style.display = "block"
    } else {
        avisoNome.style.display = "none"
        nomeOk = true
    }
}

function validarEmail(){
    let avisoEmail = document.querySelector("#avisoEmail")
    if(email.value.indexOf("@") == -1){
        avisoEmail.innerHTML = "Email Inválido!"
        avisoEmail.style.color = "red"
        avisoEmail.style.display = "block"
    } else {
        avisoEmail.style.display = "none"
        emailOk = true
    }
}

function validarAssunto(){
    let avisoAssunto = document.querySelector("#avisoAssunto")
    if(assunto.value.length>240){
        avisoAssunto.innerHTML = "Texto muito grande. Digite no máx 100 caracteres"
        avisoAssunto.style.color = "red"
        avisoAssunto.style.display = "block"
    } else{
        avisoAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function openNav() {
    document.querySelector("#menu-principal").style.width = "250px";
}
  

function closeNav() {
    document.querySelector("#menu-principal").style.width = "0";
}