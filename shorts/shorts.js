

let numinres = 0;

function increase() {
    numinres++;
    $('.incres').text(numinres);
}

function slide() {
    let pos = 0;
    pos=(pos+1)
    $(' .video1')
        .animate({
            marginTop: -800 * pos + 'px'
        });
}

function slide2() {
    let pos = 0;
    pos=(pos+1)
    $(' .video1')
        .animate({
            marginTop: pos + 'px'
        });
}

$(document)
.on('click','.icon2',increase)
.on('click','.back',slide2)
.on('click','.next',slide)