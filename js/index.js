function play() {
    q('#conteudo').style.marginTop = '-100vh';
    q('#pointers').style.display = 'none';
}
function inicio() {
    q('#conteudo').style.marginTop = '0';
    q('#pointers').style.display = 'flex';
}

function goSlide() {
    if(temp >= itensSlider.length) {
        temp = 0;
    }
    for(let i = 0; i < itensSlider.length; i++) {
        pointerItem[i].classList.remove('atual');
    }
    console.log(temp)
    q('#slider-width').style.marginLeft = `calc(-100vw * ${temp})`;
    pointerItem[temp].classList.add('atual');
    temp++
}

const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);

itensSlider.map( (item) => {
    let sliderItem = q('#models .slider-item').cloneNode(true);
    let pointerItem = q('#models .pointer-item').cloneNode();

    sliderItem.querySelector('.item-left .message').innerHTML = item.h1;
    sliderItem.querySelector('.item-right img').src = item.img;
    sliderItem.querySelector('.item-left .button').innerHTML = 'Jogar agora';

    q('#slider-width').append(sliderItem);
    q('#pointers').append(pointerItem);
});

let widthSlider = q('#slider-width').style.width = `calc(100vw * ${itensSlider.length})`;
let pointers = q('#pointers');
let pointerItem = qa('#pointers .pointer-item');

pointerItem[0].classList.add('atual');

for(let i = 0; i < pointerItem.length; i++){
    pointerItem[i].addEventListener("click", () => {
        for(let i = 0; i < itensSlider.length; i++) {
            pointerItem[i].classList.remove('atual');
        }
        q('#slider-width').style.marginLeft = `calc(-100vw * ${i})`;
        pointerItem[i].classList.add('atual');
        temp += i;
    })
}

itensGame.map( (item ) => {
    let gameItem = q('#models .game-item').cloneNode(true);

    gameItem.querySelector('.game-item .message').innerHTML = item.h1;
    gameItem.querySelector('.item-right img').src = item.img;
    gameItem.querySelector('.button-game').innerHTML = 'Mudar humor';
   
    q('#game-width').append(gameItem);
});

let widthGame = q('#game-width').style.width = `calc(100vw * ${itensGame.length})`;
let buttonsGame = qa('.button-game');

for(let i = 0; i < buttonsGame.length; i++) {
    buttonsGame[i].addEventListener("click", () => {
        if(i == buttonsGame.length - 1) {
            q('#game-width').style.marginLeft = `calc(-100vw * 0)`;
        } else {
            q('#game-width').style.marginLeft = `calc(-100vw * ${i})`;
        }
            q('#game-width').style.backgroundColor = `${colors[i].cor}`;
    })
}

let temp = 1;
setInterval(goSlide, 5000);