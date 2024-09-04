

function calcular (tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar o visor (id resultado)
            document.getElementById('resultado').value= ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value )
            document.getElementById('resultado').value = valor_campo
        }
        console.log(eval(valor_campo))
    }
        else if (tipo === 'valor' ){ 
        document.getElementById('resultado').value += valor
        }
}

function playSound() {
  const audio = document.getElementById('myAudio');
  audio.play();
}
let playSoundOriginal = function playSound() {
  const audio = document.getElementById('myAudio');
  audio.play();
};

let somAtivo = true 

function toggleSom() {
  somAtivo = !somAtivo;
  const somButton = document.querySelector('.som');
  
  if (somAtivo) {
    somButton.innerHTML = 'SOM';
    playSound = playSoundOriginal;
  } else {
    somButton.innerHTML = 'MUDO';
    playSound = function() {}; // função vazia que não faz nada
  }
}

function onOff() {
  // Get the button element
  const button = document.getElementById('onoff');
  const inputs = document.getElementsByClassName('ipt'); 
  
  // Toggle the button's text and color
  if (button.innerText === 'ON') {
    button.style.color = 'red';
    button.innerText = 'OFF';
    playSound = function() {};
    document.getElementById('resultado').value= ''

    // Change the color of the input elements to black
    Array.prototype.forEach.call(inputs, function(input) {
      input.style.background = 'rgb(98, 95, 95)';
      input.style.color = 'rgb(98, 95, 95)';
      input.style.setProperty('--placeholder-color', '');
    });
  
  } else {
    button.style.color = 'rgba(55, 232, 61)'; // reset to default color
    button.innerText = 'ON';
    playSound = playSoundOriginal;
    document.getElementById('resultado').value= ''
    
    // Reset the color of the input elements to default
    Array.prototype.forEach.call(inputs, function(input) {
      input.style.background = 'rgb(98, 95, 95)'; // or set it to a default color
      input.style.color = 'rgba(55, 232, 61, 0.859)';
      input.style.setProperty('--placeholder-color', 'rgba(55, 232, 61, 0.859)');
    });
  }
}