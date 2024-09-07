function calcular (tipo, valor,calcularTabuada){
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


    function calcularTabuada() {
      let numero = document.getElementById('resultado').value;
      let result = "";
      for (let i = 1; i <= 10; i++) {
        result += `${numero} x ${i} = ${numero * i}<br>`;
      }      
      document.getElementById("tabuada").innerHTML = result;
    }
   calcularTabuada()
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
  const button = document.getElementById('onoff');
  const inputs = document.getElementsByClassName('ipt');

  if (button.innerText === 'ON') {
    button.style.color = 'red';
    button.innerText = 'OFF';
    playSound = function() {};
    
    Array.from(inputs).forEach(input => {
      input.style.background = 'rgb(98, 95, 95)';
      input.style.color = 'rgb(98, 95, 95)';
    });
  } else {
    button.style.color = 'rgba(55, 232, 61)';
    button.innerText = 'ON';
    document.getElementById('resultado').value= ''
    playSound = playSoundOriginal;
    
    Array.from(inputs).forEach(input => {
      input.style.background = 'rgb(98, 95, 95)';
      input.style.color = 'rgba(55, 232, 61, 0.859)';
      input.style.setProperty('--placeholder-color', 'rgba(55, 232, 61, 0.859)');
    });
  }
}

function ce(input) {
  const currentValue = input.value;
  const newValue = currentValue.slice(0, -1);
  input.value = newValue;
}

// Selecionar o botão CE com a classe "ce"
const ceButton = document.querySelector('.ce');

// Atribuir a função ao botão CE
ceButton.addEventListener('click', () => {
  const input = document.querySelector('input'); // Selecionar o input
  ce(input);
});




 
