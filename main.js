console.log("Hello, World!");

let numeroActual = '0';
let operador = '';
let operando = '';

const inputDisplay = document.querySelector('.inputDisplay');

//console.log(inputDisplay);

const buttons = document.querySelectorAll('.button');

//console.log(buttons);

buttons.forEach(function(button){
    //console.log(button);
    button.addEventListener('click', function(event){
        console.log('Me hicieron click');
        console.log('event')

    })        
})