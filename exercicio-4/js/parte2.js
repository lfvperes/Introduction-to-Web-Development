/*
SCC0219 - Exercise 4, part 2
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
// item a)
//???

// item b)
var changeMe = window.document.getElementById("change_heading");
changeMe.innerText = "Este texto foi mudado."

// item c)
var caixas = window.document.getElementsByTagName("div");
var cor;
for (var caixa of caixas){
    cor = window.document.getElementsByClassName(caixa.className)[0];
    cor.addEventListener("mousemove", nomeCor);
    cor.addEventListener("mouseout", nenhumaCor);
}

function nomeCor(){
    var selection = window.document.querySelector(".selected");
    selection.innerText = event.target.className;
}

function nenhumaCor(){
    var selection = window.document.querySelector(".selected");
    selection.innerText = "None!";
}

// item d)
var secao = window.document.querySelector("section");
var novaCaixa = window.document.createElement("div");
novaCaixa.setAttribute("class", "random");
secao.appendChild(novaCaixa);

var random
random = window.document.querySelector(".random");
random.innerText = "Clique aqui!";
random.addEventListener("click", mudaCor);

function mudaCor(){
    var r = Math.floor(Math.random() * 256);    // números inteiros aleatórios
    var g = Math.floor(Math.random() * 256);    // entre 0 e 255
    var b = Math.floor(Math.random() * 256);

    random.style.background = `rgb(${r}, ${g}, ${b})`;              // cor aleatória
    random.style.color = `rgb(${255 - r},${255 - g},${255 - b})`;   // cor negativa

    console.log(r,g,b)
}