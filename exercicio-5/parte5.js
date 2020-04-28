/*
SCC0219 - Exercise 5, part 5
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
var select = window.document.getElementById("state");
var option;


for (let i = 4; i > 0; i--){
    select.removeChild(select[i]);
}

var signos = ["Aquário",
 "Peixes",
 "Áries",
 "Touro",
 "Gêmeos",
 "Câncer",
 "Leão",
 "Virgem",
 "Libra",
 "Escorpião",
 "Sargitário",
 "Capricórnio"
];

for (s in signos){
    option = document.createElement("option");
    option.innerHTML = signos[s];
    select.appendChild(option);
}

const app = new Vue({
    el: "#app",
    data: {
        erro: [
            {id: 0, invalido: false, msg: "o primeiro nome"},
            {id: 1, invalido: false, msg: "o segundo nome"},
            {id: 2, invalido: false, msg: "uma data válida"},
            {id: 3, invalido: false, msg: "a cidade"},
            {id: 4, invalido: false, msg: "o signo"}            
        ]
    },
    methods: {
        validar(){
            let forms = window.document.getElementsByClassName("form-control");
            let formatoData = new RegExp(/(\d{2})[ /-]?(\d{2})[ /-]?(\d{4}|\d{2})/,"g");
            
            let ind = 0;
            for (form of forms){
                switch(form.placeholder){
                    case undefined:
                        this.erro[ind].invalido = !signos.includes(form.value);
                        break;
                    case "Data de Nascimento":
                        this.erro[ind].invalido = !formatoData.test(form.value);
                        break;
                    default:
                        this.erro[ind].invalido = form.value == "";
                        break;
                }
                ind++;
            }
            for (e of this.erro){
                if (e.invalido) {
                    console.log("Insira " + e.msg);
                }
            }
        },
        pintarErro(){
            //chamar CSS
        }
    }
});