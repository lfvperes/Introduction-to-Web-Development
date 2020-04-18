/*
// EXEMPLO 1
let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form = document.querySelector("#form");

//console.log(name, job, form)

form.addEventListener("submit", function(event){
    event.preventDefault();

    let dados = {
        name: name.value,
        job: job.value
    };

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        alert("ok cadastro com sucesso")
    })
})
*/

// EXEMPLO 2
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", function(){
    fetch("https://reqres.in/api/users?page=2")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        response.data.forEach(function(user){
            let item = document.createElement("li");
            item.classList.add("item");
            item.innerHTML = '<img src="'+user.avatar+'"/><span>'+user.first_name+'</span>';
            list.appendChild(item);
        })
    })
})