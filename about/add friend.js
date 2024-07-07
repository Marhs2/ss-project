let numinres = 0;

$(".back_next a").data("number",numinres);

function increase() {
    let number = $(".back_next a").data("number");
    
    numinres++;
    $('.incres').text(numinres);
    $('.incres2').text(number);
}

$(document)
.on('click','.icon2',increase)
