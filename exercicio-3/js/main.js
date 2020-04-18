/*
SCC0219 - Exercise 3
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
/* Tentei deixar de um jeito que o HTML e CSS ficassem mais organizados para
ser mais simples de analisar, mesmo que aumentasse algumas linhas no JS */
function grifar(elemento, tag){
    textoOriginal = elemento;
    var textoNovo = document.createElement(tag);
    var divisores = "\ !.',\"():;[]/&|<>";
    var divisao, quebra;
    var grifado, palavra;
    var inicio = 0;
    var final;
    var contagem = 0;

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
                    grifado.setAttribute("class", "roxo");  // organizar o CSS
                    //grifado.style.backgroundColor = "#C035F4"; // roxo
                    break;
                case 6:
                    grifado.setAttribute("class", "azul");
                    //grifado.style.backgroundColor = "#6985FF"; // azul
                    break;
                default:
                    grifado.setAttribute("class", "rosa");
                    //grifado.style.backgroundColor = "#FF63D8"; // rosa
                    break;
                /*
                O default foi atribuído ao caso length >= 8 porque são
                infinitos números
                */
            }

            /*
            Apesar de essa função ser só para grifar as palavras, identifiquei
            os finais de frase aqui pra ficar mais fácil na hora de quebrar as
            linhas e não ficar redundante.
            */

            //textoNovo.appendChild(grifado);
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
            contagem++;
            // Também achei mais fácil já contar as palavras aqui dentro mesmo
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

    return textoNovo, contagem;
}

function adicionarLink(paragrafo){
    var brk = document.createElement("br");     // pular linha antes do link
    var link = document.createElement("a");
    endereco = document.createAttribute("href");
    link.setAttributeNode(endereco);
    endereco.value = document.referrer;   // link aponta para a propria pagina
    link.innerHTML = "home";
    paragrafo.appendChild(brk);
    paragrafo.appendChild(link);
}

// Item 1. Grifando palavras
var paragrafoOriginal = document.querySelector("p").innerHTML;
var paragrafoNovo, paragrafoContagem = grifar(paragrafoOriginal, "p");

var tituloOriginal = document.querySelector("h1").innerHTML;
var tituloNovo, tituloContagem = grifar(tituloOriginal, "h1");

// Item 2. Adicionar um link home
var semLink = document.querySelector("p");
adicionarLink(semLink);

// Item 3. Separar cada frase numa linha
// Procurar os spans de classe "ponto" e adicionar um <br/> dentro do span
var pontos = document.querySelectorAll(".ponto");
for (i = 0; i < pontos.length; i++){
    quebra = document.createElement("br");
    pontos[i].appendChild(quebra);
}

// Item 4. Contar as palavras em <p>
var contagem = document.createElement("div");
contagem.innerText = "Nro. de palavras no paragrafo: " + paragrafoContagem;
corpo = document.body;
corpo.insertBefore(contagem, corpo.childNodes[0]); // antes do heading