var h = new Date()
var hora = h.getHours()
if (hora < 12){
    console.log('Bom dia')
} 
else if (hora <= 18) {
    console.log('Boa tarde')
} 
else{
    console.log('boa noite')
}