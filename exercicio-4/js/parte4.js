let caixa = window.document.querySelector(".caixa");
let botao = window.document.querySelector("#change");
let cores;
var lista = [];

// listar as cores uma só vez
var a = fetch("https://reqres.in/api/unknown")
.then(function(response){
    return response.json();
})
.then(function(response){
    var saida = response.data.map(function(cor){
        return cor.name;
    });
    console.log(saida);
    cores = saida;
    return saida;
})


console.log(a);
for (i in a){
    console.log(i);
}
console.log(cores);

botao.addEventListener("click", mudarCor);

function mudarCor(){
    
}