var caixa = window.document.querySelector(".caixa");
var botao = window.document.querySelector("#change");
var hex = window.document.querySelector("#hex");
var nome = window.document.querySelector("#nome");
var cores;
var corAtual;

// listar as cores uma só vez
fetch("https://reqres.in/api/unknown")
.then(response => response.json())
.then(success => {
    cores = success.data;
})
.then(() => {botao.addEventListener("click", mudarCor)})


function mudarCor(){
    corAtual = Math.floor(Math.random() * cores.length);
    console.log(cores[corAtual].name, cores[corAtual].color);
    nome.innerText = cores[corAtual].name;
    hex.innerText = cores[corAtual].color;
    caixa.style.backgroundColor = cores[corAtual].color;
}