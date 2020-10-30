let nome = 'alexandre';

//alert('ola' + nome);
console.log('ola, mundo');

let lista = ['maça', 'laranja', 'manga'];
//push adiciona item no array
lista.push('uva');
lista.push('caja');
lista.push('caju');

console.log(lista);

//let fruta = { nome: 'maca', cor: 'vermelho' };
//console.log(fruta);

let fruta = [
  { nome: 'maca', cor: 'vermelho' },
  { nome: 'uva', cor: 'roxo' },
];
console.log(fruta);

//condicionais

//let idade = prompt('qual a sua idade');
//let idade = 18;

/* if (idade >= 18) {
  alert('maior de idade');
} else {
  alert('menor de idade');
} */

/*let count = 0;
while (count < 5) {
  console.log(count);
  count = count + 1;
} */
/*
var count;
for (count = 0; count < 5; count++) {
  console.log(count);
}

let d = new Date();
console.log(d);

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 3));

function valida(idade) {
  if (idade >= 18) {
    console.log('maior idade');
  } else {
    console.log('menor idade');
    return valida;
  }
}
*/
/* let idade = prompt('qual a sua idade');
console.log(valida(idade));
*/

/*function botao() {
  alert('obrigado');
}
*/

function botao() {
  document.getElementById('agd').innerHTML = 'obrigado por clicar';
}

function redirecionar() {
  window.open(
    'https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML'
  );
}

function mouse(elemento) {
  elemento.innerHTML = 'obrigado por passar o mouse.';
  //document.getElementById('onmouseover').innerHTML =
  // 'obrigado por passar o mouse.';
  // alert('obrigado');
}

function voltar(elemento) {
  elemento.innerHTML = 'passe o mouse aqui.';
  // document.getElementById('onmouseover').innerHTML = 'passe o mouse aqui.';
}
