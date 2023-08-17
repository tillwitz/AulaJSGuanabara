function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if(hora >=0 && hora < 12){
        img.src = 'manhã-editada.png'
        document.body.style.background = '#e28743'
    }else if(hora >= 12 && hora < 18){
        document.body.style.background = '#4397e2'
        img.src = 'almoço-editado.png'
    }else{
        img.src = 'janta-editada.png'
    }
}