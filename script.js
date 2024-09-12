function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      // Limpar o visor
      document.getElementById('resultado').value = '';
      document.getElementById('operador').value = '';
      document.getElementById('tabuada').innerHTML = '';
    }
    
    if (['+', '-', '*', '/', '.'].includes(valor)) {
      // Adicionar operador ao campo de resultado
      document.getElementById('resultado').value += valor;
      document.getElementById('operador').value = valor; // Guardar o operador
      document.getElementById('operador').innerHTML = valor;
    }
    
    if (valor === '=') {
      // Obter o valor digitado no campo de resultado
       
      const resultado = document.getElementById('resultado').value;
      const operador = document.getElementById('operador').value;
       

      // Calcular o resultado da expressão
      try {
        const valor_campo = eval(resultado);
        document.getElementById('resultado').value = valor_campo;
        document.getElementById('resp').value = valor_campo;
        document.getElementById('resp').innerHTML = valor_campo;

        // Se o operador for de tabuada, chamar a função correspondente
        switch (operador) {
          case '+':
            Adicao();
            break;
          case '-':
            Subtracao();
            break;
          case '*':
            Multiplicacao();
            break;
          case '/':
            Divisao();
            break;
        }
      } catch (error) {
        document.getElementById('resultado').value = "Erro";
      }
    }
  } else if (tipo === 'valor') {
    // Adicionar valor ao campo de resultado
    document.getElementById('resultado').value += valor;
  }
}

function Multiplicacao() {
  let numero = document.getElementById('resultado').value;
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numero} X ${i} = ${numero * i}<br>`;
  }
  document.getElementById("tabuada").innerHTML = result;
}

function Divisao() {
  let numero = document.getElementById('resultado').value;
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numero} ÷ ${i} = ${(numero / i).toFixed(2)}<br>`;
  }
  document.getElementById("tabuada").innerHTML = result;
}

function Subtracao() {
  let numero = document.getElementById('resultado').value;
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numero} - ${i} = ${numero - i}<br>`;
  }
  document.getElementById("tabuada").innerHTML = result;
}

function Adicao() {
  let numero = document.getElementById('resultado').value;
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numero} + ${i} = ${numero + i}<br>`;
  }
  document.getElementById("tabuada").innerHTML = result;
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




 
