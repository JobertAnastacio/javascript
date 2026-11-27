function passos(){
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('p#txt')
    
    if(passo == ''){
        window.alert ('Numero de passos invalido considerando igual a 1')
        passo = 1
    }
    if (inicio == '' || fim == '') {
        res.innerHTML = 'Impossivel contar'
    }
    else{
        res.innerHTML = 'Contando:<br>'
        for (inicio; inicio <= fim; inicio += passo){
            res.innerHTML += `${inicio} 👟 `
        }
        res.innerHTML += ' 🏁' 
    }
}



// var p = document.querySelector('section#pai')
    // seria essa outra forma de fazer isso
    // var eend = document.createElement('div')
    // eend.setAttribute('id','eend')
    // eend.innerHTML = '🏁' 
    // p.appendChild(eend)