function resolverBaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
  const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);

  console.log(`Os valores de X dos pontos da parábola no eixo X são ${x1} e ${x2}`);
}

function calcularRaizQuadrada(base) {
  console.log('Eu quero escrver isso aqui na tela');
  return base ** (1/2);
}

resolverBaskara(2, 3, -2);