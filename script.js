// Pegar os Elementos html que serão usados
const calcular = document.querySelector('#calcular');

// criar uma função que faz o caulculo do imc
function imc() {
  const nome = document.querySelector('#nome').value;
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const resultado = document.querySelector('#resultado');

  //fazer uma validação se os campus estão preenchidos
  if (nome !== '' && altura !== '' && peso !== '') {
    // fazer o calculo do imc
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    //variavel de classificação vazia onde vai conter se está acima ou abixo do peso
    let classificação = '';
    
    if (valorIMC < 18.5) {
      classificação = 'abaixo do peso';
    } else if (valorIMC < 25){
        classificação = "Com peso ideal"
    } else if (valorIMC < 30){
        classificação = "Levemente acima do peso"
    }else if (valorIMC < 35) {
        classificação= "com obesidade grau I"
    }else if (valorIMC < 40){
        classificação= "com obesidade grau II"
    }else{
        classificação = "com obesidade grau III. cuidado!"
    }
     

    //mostrar no resultado  com o nome, IMC e Classificação
    resultado.textContent = `${nome} seu imc é ${valorIMC} e você está ${classificação}`;
  } else {
    alert('preencha todos os campos corretamente!');
  }
}

//adicionar um evento no botão calcular
calcular.addEventListener('click', imc);
