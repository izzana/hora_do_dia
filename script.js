function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    //var hora = 18

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = "manha.jpg"
        document.body.style.background = '#4c914c'
    }else if(hora >12 && hora < 18) {
        //Boa tarde!
        img.src = "tarde.jpg"
        document.body.style.background = '#d29a21'
    } else {
        //Boa noite
        img.src = "noite.jpg"
        document.body.style.background = '#323131'
    }
}


