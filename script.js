

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
    somButton.innerHTML = '🔊';
    playSound = playSoundOriginal;
  } else {
    somButton.innerHTML = '🔇';
    playSound = function() {}; // função vazia que não faz nada
  }
}

function onOff(){
  
}
