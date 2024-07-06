let numinres = 0
function increase(){
    numinres++
    $('.incres').text(numinres);
}






$(document)
.on('click','.icon2',increase)
