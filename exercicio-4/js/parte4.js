/*
SCC0219 - Exercise 4, part 4
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
var caixa = window.document.querySelector(".caixa");
var botao = window.document.querySelector("#change");
var hex = window.document.querySelector("#hex");
var nome = window.document.querySelector("#nome");
var cores;

// listar as cores uma só vez
fetch("https://reqres.in/api/unknown")  // item a)
.then(response => response.json())
.then(success => cores = success.data)
.then(fetch("https://reqres.in/api/unknown?page=2")
.then(response => response.json())
.then(success => cores = cores.concat(success.data)))
.then(() => {botao.addEventListener("click", mudarCor)})

/*
    mudar para uma cor aleatória dentre as listadas,
    escrever o nome,
    escrever o código hexadecimal, pintar o fundo
*/
function mudarCor(){
    let indice, corAtual;
    indice = Math.floor(Math.random() * cores.length);
    corAtual = cores[indice];
    console.log(corAtual.id, corAtual.name, corAtual.color);
    nome.innerText = corAtual.name;
    caixa.style.backgroundColor = hex.innerText = corAtual.color;
}