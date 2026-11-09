function verificar(){
    var nacionalidade = (document.getElementById('inasc').value).toUpperCase()
    
    var resultado = document.querySelector('div#res')

    if (nacionalidade === 'BRASIL'){
        resultado.innerHTML = `<h3>Você é do <strong>${nacionalidade}</strong> portanto é <strong>Brasileiro</strong>.</h3> 🌎`
                    
    }
    else{
        resultado.innerHTML = `<h3>Você é do <strong>${nacionalidade}</strong> portanto é <strong>Estrangeiro</strong>.</h3> 🌐`
    }
}