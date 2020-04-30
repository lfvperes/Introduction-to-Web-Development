/*
SCC0219 - Exercise 5, part 5
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/
var select = window.document.getElementById("state");
var option;
// Adicionando os 12 signos com js ao invés de HTML:
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

// instancia do vuejs
const app = new Vue({
    el: "#app",
    data: {
        erro: [     // verificando erros e guardando a possivel saida
            {id: 0, invalido: false, msg: "o primeiro nome"},
            {id: 1, invalido: false, msg: "o sobrenome"},
            {id: 2, invalido: false, msg: "uma data válida"},
            {id: 3, invalido: false, msg: "a cidade"},
            {id: 4, invalido: false, msg: "o signo"}            
        ]
    },
    methods: {
        validar(){
            // armazenar os blocos de input
            let forms = window.document.getElementsByClassName("form-control");
            /* criar um regex que checa o formato de data, podendo ser:
            28/04/2020, 28/04/20, 28-04-2020, 28-04-20, 280420, 28 04 2020 etc
            */
            let formatoData = new RegExp(/(\d{2})[ /-]?(\d{2})[ /-]?(\d{4}|\d{2})/,"g");
            
            let ind = 0;
            for (form of forms){                // para cada input
                switch(form.placeholder){       // verificar qual input
                    case undefined:             // signos
                        // se não faz parte da lista, armazena true em invalido
                        this.erro[ind].invalido = !signos.includes(form.value);
                        break;
                    case "Data de Nascimento":  // data
                        // se não é uma data, armazena true em invalido
                        this.erro[ind].invalido = !formatoData.test(form.value);
                        break;
                    default:                    // nome, sobrenome, cidade
                        // se não é vazio, armazena true em invalido
                        this.erro[ind].invalido = form.value == "";
                        break;
                }
                ind++;                       // iterar para checar a lista toda
            }

            // adicionando os avisos de erro se necessário
            let container = window.document.getElementById("app");
            let pp = document.querySelectorAll("p");
            /* atualizar apagando os paragrafos para nao acumular erros passados
            se o erro for corrigido, o aviso some no próximo "enviar" */
            for(p of pp){
                container.removeChild(p);
            }
            for (e of this.erro){   // verificar os erros
                if (e.invalido) {   // se a entrada for inválida
                    // criar um parágrafo vermelho para cada erro
                    let pp = document.createElement("p");
                    let texto = document.createTextNode("Erro: Insira " + e.msg);
                    pp.appendChild(texto);
                    container.appendChild(pp);
                    console.log("Erro: Insira " + e.msg);
                }
            }
        }
    }
});
/*
Eu percebi que algumas coisas ficariam mais otimizadas se eu usasse $refs, mas
não consegui implementar porque ainda estou um pouco confuso com os conceitos. 
Então não usei, mas com mais tempo usaria.
*/