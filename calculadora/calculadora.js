const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"];

const operadores = ["/", "x", "+", "-"];

const visor = document.querySelector('.input-visor');

var operador = '';
var valor1 = '';

const botoes = document.querySelectorAll('button');
botoes.forEach((botao) => {
  
  botao.addEventListener('click', () => {
    adicionarEfeitoClick(botao);
    processarClick(botao.textContent);
  });
});

function adicionarEfeitoClick(botao) {
  botao.classList.add('background-skyblue');
  
  setTimeout(
    (botao) => {
      botao.classList.remove('background-skyblue');
    },
    120,
    botao
  );
}

function ultimaTecla() {
  if (visor.value == '') {
    return ''
  }

  return visor.value.slice(-1);
}

function processarClick(tecla) {
  const comando = getComando(tecla);
  
  if (comando == 'numerico') {
    processarComandoNumerico(tecla);
  } else if (comando == 'limpeza') {
    limpar();
  } else if (comando == 'operacao') {
    processarComandoOperacao(tecla)
  } else if (comando == 'calcular') {
    processarComandoCalcular()
  } else if (comando == 'virgula') {
    processarComandoVirgula()
  }
}

function processarComandoVirgula() {
  if (visor.value.includes(',')) {
    return;
  }
  
  const uTecla = ultimaTecla();
  if (!numeros.includes(uTecla)) {
    return;
  }
  
  visor.value += ',';
}

function processarComandoNumerico(tecla) {
  const uTecla = ultimaTecla();
  if (operadores.includes(uTecla)) {
    valor1 = visor.value;
    visor.value = '';
  }
  
  if (visor.value.length >= 13){
    return;
  }
  
  if (visor.value == '0')
    visor.value = '';
  
  visor.value += tecla;
}

function processarComandoOperacao(tecla) {
  const uTecla = ultimaTecla();
  if (operadores.includes(uTecla)) {
    operador = tecla;
    visor.value = visor.value.substring(0, visor.value.length -1) + tecla;
  } else if (numeros.includes(uTecla)) {
    
    if (operador != '') {
      calcular();
    }
    
    operador = tecla;
    visor.value += tecla;
  }
}

function processarComandoCalcular() {
  const uTecla = ultimaTecla();
  
  if (!numeros.includes(uTecla)) {
    return;
  }

  if (valor1 == '')
    return;

  calcular();
  
  operador = '';
  valor1 = '';
}

function calcular() {
  
  valor1 = valor1.replace(',', '.');
  visor.value = visor.value.replace(',', '.');
  
  if (operador == '+') {
    visor.value = parseFloat(valor1) + parseFloat(visor.value);
  } else if (operador == '-') {
    visor.value = parseFloat(valor1) - parseFloat(visor.value);
  } else if (operador == 'x') {
    visor.value = parseFloat(valor1) * parseFloat(visor.value);
  } else {
    if (visor.value == 0) {
      visor.value = 'Operação Inválida';
      return;
    }
    
    visor.value = parseFloat(valor1) / parseFloat(visor.value);
  }
  
  visor.value = visor.value.replace('.', ',');
  
  const tamanho = visor.value.length < 13 ? visor.value.length : 13; 
  visor.value = visor.value.substring(0, tamanho);
}

function limpar() {
  visor.value = '0';
  operador = '';
  valor1 = '';
}

function getComando(tecla) {
  if (numeros.includes(tecla))
    return 'numerico';
    
  if (operadores.includes(tecla))
    return 'operacao';
    
  if (tecla == 'C')  
    return 'limpeza';
    
  if (tecla == ',')
    return 'virgula';  
    
  return 'calcular';
}
