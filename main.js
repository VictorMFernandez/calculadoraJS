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
        //console.log('Me hicieron click');
        //console.log('event')
        const button = event.target;
        const buttontext = button.textContent;

        //console.log(buttontext);
        
        if('+-*'.includes(buttontext)){
            operador = buttontext;
            operando = Number(numeroActual);
            numeroActual = '0';

        
        }else if(buttontext === '='){
            // aqui realizo las operaciones matematicas en base al numero actualy el operador
            if(operador === '+'){
                numeroActual = Number(operando)+Number(numeroActual)
            }else if(operador === '-'){
                numeroActual = Number(operando)-Number(numeroActual)
            }else if(operador === '*'){
                numeroActual = Number(operando)*Number(numeroActual)
            }

        }else if(buttontext === 'AC'){
            numeroActual = '0';
            operador = '';
            operando = '';

        }else {// Se preciona algun numero
            numeroActual = Number(numeroActual + buttontext);
        }
        inputDisplay.value = numeroActual;
    })        
})