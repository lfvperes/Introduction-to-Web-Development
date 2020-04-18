/*
SCC0219 - Exercise 4, part 2
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/

var botoes = window.document.querySelectorAll("button");
var entrada;
for (botao of botoes){
    entrada = botao;
    entrada.addEventListener("click", display);
}

function display(){
    var tela = window.document.querySelector("#display");
    tela.innerText = event.target.innerText;
}