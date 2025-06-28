let txtpeso = document.getElementById('weight')
let txtaltura = document.getElementById('height')
let resultado = document.getElementById('numvalue')
let infos = document.getElementById('infos')
let analise = document.getElementById('description')
let site = document.getElementById('site')


function format1(input){
  let valor = input.value.replace(/[^0-9]/g,'');
  if (valor.length === 0){
    input.value = ''
  } else {
    input.value = valor
  }
}

function format2(input) {
  let valor = input.value.replace(/[^0-9]/g,'');
  if (valor.length === 0){
    input.value = ' ';
  } else if (valor.length === 1) {
    input.value = valor;
  } else if (valor.length === 2) {
    input.value = valor[0] + '.' + valor[1];
  } else {
    input.value = valor[0] + '.' + valor.slice(1, 3);
  }
}


function calcular(){
  let calculadora = document.getElementById('calculadora')
  let peso = Number(txtpeso.value)
  let altura = parseFloat(txtaltura.value.replace(',','.'))
  let imc = peso/(altura**2)
  let mensagem = ' '
  analise.style.color = 'red'
  if (txtpeso.value.length == 0 || txtaltura.value.length == 0) {
    alert('[ERRO!] Preencha os dados para calcular!')
  } else if (imc <= 18.5) { // Abaixo do normal
    mensagem = 'Abaixo do normal'
  } else if (imc <= 24.9){ // Normal
    analise.style.color = '#16a34a'
    mensagem = 'Você esta no peso ideal!'
  } else if (imc <= 29.9){ // Sobrepeso
    mensagem = 'Sobrepeso'
  } else if (imc <= 34.9) { // Obesidade grau I
    mensagem = 'Obesidade grau I'
  } else if (imc <= 39.9) { // Obesidade grau II
    mensagem = 'Obessidade grau II'
  } else { // Obesidade grau III
    mensagem = 'Obesidade grau III'
  } 
    calculadora.style.height = '520px'
    resultado.innerHTML = imc.toFixed(1)
    analise.innerHTML = mensagem
    infos.style.display = 'block'
  
}

function mudar() {
  const body = document.body
  const icon = document.getElementById('mode')
  document.body.classList.toggle('modo-claro')
  if (body.classList.contains('modo-claro')){
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')
    localStorage.setItem('tema','claro')
  } else {
    icon.classList.remove('fa-moon')
    icon.classList.add('fa-sun')
    localStorage.setItem('tema','escuro')
  }
  }

  window.addEventListener('DOMcontentLoaded',()=>{
    const temaSalvo = localStorage.getItem('tema')
    const body = document.body
    const icon = document.getElementById('mode')
    if (temaSalvo === 'claro'){
      body.classList.add('modo-claro')
      icon.classList.remove('fa-sun')
      icon.classList.add('fa-moon')
    } else {
      body.classList.remove('modo-claro')
      icon.classList.remove('fa-moon')
      icon.classList.add('fa-sun')
    }
  })
