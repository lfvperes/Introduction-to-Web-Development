/*
SCC0219 - Exercise 4, part 2
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/

var botoes = window.document.querySelectorAll("button");
var tela = window.document.querySelector("#conteudo");
var conteudo = "0";
var anterior = "";

for (let botao of botoes){
    botao.addEventListener("click", computar);
}

function computar(){
    let botao = event.target;
    let entrada = botao.innerText;
    let ultimoOperador = 0;
    
    switch(botao.className){
        case "igual":
            // ao apertar = após um operador, ele será ignorado
            // ex: "3+4-" vira "3+4"
            if(anterior.className == "operator"){
                conteudo = conteudo.slice(0, conteudo.length-1);
            }
            // o botão é "x" por estética, mas a operação precisa ser "*"
            conteudo = conteudo.replace(/x/g, "*");
            conteudo = String(eval(conteudo));      // realizar o cáclulo
            ultimoOperador = 0;
            break;
        case "operator":
            // se um operador for digitado após outro, ele o substitui
            // do contrário apenas é concatenado
            // ex: "3+-" vira "3-"
            if(anterior.className == "operator"){
                conteudo = conteudo.slice(0, conteudo.length-1).concat(entrada);
            }else{conteudo = conteudo.concat(entrada);}
            break;
        case "dot":
            // evitar que o resultado de uma operação seja concatenado com um ponto
            // começa uma nova expressão
            if(anterior.innerText == "="){
                conteudo = "0";
            }
            // evitar que o número tenha mais de um ponto
            for (operador of "+-x/"){
                ultimoOperador = Math.max(ultimoOperador, conteudo.lastIndexOf(operador));
            }
            // se há um ponto depois do último operador digitado, não pode haver outro
            if(!conteudo.slice(ultimoOperador+1).includes(".")){
                conteudo = conteudo.concat(entrada);
            }
            break;
        case "C":
            conteudo = "0";
            break;
        case "CE":
            if(conteudo != "0" && anterior.innerText != "="){
                conteudo = conteudo.slice(0, conteudo.length-1);
            }
            if(conteudo == ""){
                conteudo = "0";
            }
            break;
        default:
            if(conteudo == "0" && entrada != "."||anterior.innerText == "="){
                conteudo = "";
            }
            conteudo = conteudo.concat(entrada);
            break;
    }
    display();
    if(botao.className != "CE"){
        anterior = botao;
    }
}

function display(){
    tela.innerText = conteudo;
}