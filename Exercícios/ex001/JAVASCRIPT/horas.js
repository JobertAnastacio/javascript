  var time = new Date()
    var hora = time.getHours()
    var horario = document.querySelector('div#horas')
    var fundo = document.getElementById('fundo')
    var titulo = document.getElementById('titulo')
    var imagem = document.getElementById('img')
    var rodape = document.getElementById('rodape')
    var main = document.getElementById('main')
        
        
    if (hora <= 12){
        horario.innerHTML = `<h3>Bom dia, são ${hora} horas</h3>`
    }
    else if(hora < 18){
        horario.innerHTML = `<h3>Boa tarde, são ${hora} horas</h3>`
        fundo.style.background = 'url("../imagens/background_tarde.gif") center center/cover no-repeat fixed'
        rodape.style.color = 'white'
        titulo.style.color = 'white'
        img.style.background = 'black'
        img.src = '../imagens/sol-tarde.png'
    }
    else{
        horario.innerHTML = `<h3>Boa noite, são ${hora} horas</h3>`
        horario.style.color = '#FCBC3A'
        fundo.style.background = 'url("../imagens/background_noite.jpg") center center/cover no-repeat fixed'
        rodape.style.color = '#FCBC3A'
        rodape.style.background = '#0D1F2D'
        titulo.style.color = '#FCBC3A'
        titulo.style.background = '#0D1F2D'
        img.style.background = '#FCBC3A'
        img.src = '../imagens/lua-noite.png'
        main.style.background = '#0D1F2D'
    }