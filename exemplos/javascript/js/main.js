var p = document.createElement("p")
p.innerHTML = "oie rsrs"

var img = document.createElement("img")
img.src = "profile.png"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

document.getElementById("conteudo").removeChild(img)

