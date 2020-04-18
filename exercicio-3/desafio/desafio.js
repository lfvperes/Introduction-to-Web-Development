/*
SCC0219 - Exercise 3
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/

// Item 1.
document.body.style.fontFamily = "Trebuchet MS, sans-serif";

// Item 2.
var apelido = document.createTextNode("Star Lord");
var favorito = document.createTextNode("Walkman");
var cidade = document.createTextNode("St. Charles, Missouri");

var nickname = document.getElementById("nickname");
var favorites = document.getElementById("favorites");
var hometown = document.getElementById("hometown");

nickname.appendChild(apelido);
favorites.appendChild(favorito);
hometown.appendChild(cidade);

// Item 3. 
var imagem = document.createElement("img");
imagem.src = "starlord.gif"
//imagem.setAttribute("src", "starlord.gif");   // metodo alternativo
document.body.appendChild(imagem);