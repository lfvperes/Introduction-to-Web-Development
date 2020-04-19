/*
SCC0219 - Exercise 4, part 3
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/

var p = document.querySelector("p");
var h = document.querySelector("h1");
var corpo = window.document.body;
var botao = window.document.createElement("button");

botao.innerText = "Click me!";
botao.style = "font-size: 300%; font-family: inherit;";
botao.addEventListener("click", () => {
    grifar(p);
    grifar(h);
});

corpo.appendChild(botao);

// função do exercício 3, sem contagem e com algumas otimizações
function grifar(elemento){
    var textoOriginal = elemento.innerHTML;
    var tag = elemento.tagName;
    var textoNovo = document.createElement(tag);
    var divisores = "\ !.',\"():;[]/&|<>";
    var divisao, quebra, grifado, palavra, final;
    var inicio = 0;

    for (i = 0; i <= textoOriginal.length; i++){
        if((divisores.includes(textoOriginal[i]))||(i == textoOriginal.length)){
            
            /*
            A função separa o texto palavra por palavra, conta os tamanhos e
            cria uma <span> para as que precisam ser grifadas. Dependendo do
            tamanho, o elemento vai ter uma classe para identificar como será
            grifado.
            */
            palavra = textoOriginal.slice(inicio, i);
            if (!(palavra.length < 4 || palavra.length == 7)){
                grifado = document.createElement("span");
                grifado.innerHTML = palavra;            // criar span e grifar
                textoNovo.appendChild(grifado);
            }else{                    // não criar span se não precisar grifar
                normal = document.createTextNode(palavra);
                textoNovo.appendChild(normal);
            }
            
            switch(palavra.length){
                case 0:
                case 1:
                case 2:
                case 3:
                case 7:                                 // nenhuma cor
                    break;
                case 4:
                case 5:
                    grifado.setAttribute("class", "roxo");// roxo
                    break;
                case 6:
                    grifado.setAttribute("class", "azul");// azul
                    break;
                default:
                    grifado.setAttribute("class", "rosa");// rosa
                    break;
                /*
                O default foi atribuído ao caso length >= 8 porque são
                infinitos números
                */
            }
            switch (i){
                case textoOriginal.length: 
                    break; // quando a frase não termina em pontuação (título)
                default:
                    quebra = textoOriginal[i];
                    if (".!".includes(quebra)){
                        divisao = document.createElement("span");
                        divisao.innerHTML = quebra;
                        classe = document.createAttribute("class");
                        divisao.setAttributeNode(classe);
                        classe.value = "ponto";
                    }else{
                        divisao = document.createTextNode(quebra);
                    }
                    textoNovo.appendChild(divisao);
                    break;
            }
            inicio = i + 1;
        }
    }
    document.querySelector(tag).innerHTML = textoNovo.innerHTML;

    /* o .js fica menor se eu usar backgroundColor direto no primeiro switch, 
    mas as tags ficam melhor organizadas assim */
    var estilo = document.createElement("style");
    var cores = document.createTextNode(
        ".roxo{background-color:#C035F4}"
        + ".rosa{background-color:#FF63D8}"
        + ".azul{background-color:#6985FF}"
    )
    estilo.appendChild(cores);
    
    estiloOriginal = document.querySelectorAll("style");
    // evitar que sejam criadas duas ou mais tags <style>
    switch (estiloOriginal.length){
        case 0:                                         // cria primeira
            document.head.appendChild(estilo);
            break;
        default:                                        // substitui existente
            document.head.replaceChild(estilo, estiloOriginal[0]);
            break;
    }
}