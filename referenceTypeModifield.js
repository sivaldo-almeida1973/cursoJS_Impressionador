const cartao1 = {
  nome: 'sivaldo vieira',
  saldo: 10000000,
};


const cartao2 = cartao1;

console.log(cartao1)
console.log(cartao2)

cartao2.saldo -= 2000000;

console.log(cartao1)
console.log(cartao2)

const listaAlunos = ['sivaldo','alice','lucas']
//adicionar novo aluno
listaAlunos[3] = 'gute';

console.log(listaAlunos)