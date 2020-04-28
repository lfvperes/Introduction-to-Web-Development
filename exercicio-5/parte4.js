/*
SCC0219 - Exercise 5, part 4
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
const app = new Vue({
    el: "#app",
    data: {
        procurado: "",      // texto digitado no input pra ser procurado
        resultado: [],      // resultados que serão exibidos
        herois: [
            // Marvel é melhor que DC
            {nome: "Mulher Maravilha"},
            {nome: "Brainiac"},
            {nome: "Aquaman"},
            {nome: "Ravena"},
            {nome: "Batman"},
            {nome: "Superman"},
            {nome: "Mulher Gavião"},
            {nome: "Flash"},
            {nome: "Lanterna Verde"},
            {nome: "Shazam"}
        ]
    },
    methods: {
        procurar(){
            /* zerar o vetor de resultados e começar outra busca para não
            acumular nomes repetidos */
            this.resultado = [];
            // criar RegExp para a busca
            let procuradoReg = new RegExp(this.procurado, "gi");
            // iterar entre cada item do array
            for (h in this.herois){
                // comparar o .nome de cada item com o RegExp
                if (procuradoReg.test(this.herois[h].nome)){
                    /* se o texto for encontrado no nome, o nome todo é 
                    adicionado como outro elemento do array */
                    this.resultado.push(this.herois[h].nome);
                }
            }
        }
    }
});