/*
SCC0219 - Exercise 4, part 1
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
var corpo = window.document.body;
var phrase = window.document.getElementById("story");
var botao = window.document.getElementById("lib-button");
botao.addEventListener("click", makeMadTalk);   // item a)

function makeMadTalk(){                         // item b)
    
    var noun = window.document.querySelector("input#noun").value;
    var adjec = window.document.querySelector("input#adjective").value;
    var person = window.document.querySelector("input#person").value;
    
    /*
    var noun = window.document.getElementById("noun").value;
    var adjec = window.document.getElementById("adjective").value;
    var person = window.document.getElementById("person").value;
    */

    phrase.innerText = `Did you know that ${person} has a huge ${adjec} ${noun} tattoo?`;

}