function load() {

var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

msg.innerHTML= `<p><strong>${dia}/${mes}/${ano}</strong></p> <p><strong>${hora}:${min}</strong></P>`

if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = "img/foto-manha.jpg"
    document.body.style.backgroundColor = "khaki"    
} 
else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "img/foto-tarde.jpg"
    document.body.style.backgroundColor = "orange"
}
else {
    //Boa Noite
    img.src = "img/foto-noite.jpg"
  document.body.style.background = " #21262d"
}

}