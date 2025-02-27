function pertenceFibonacci(num) {
  let primeiro = 0;
  let segundo = 1;
  let proximo;

  while (segundo < num) {
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
  }

  if (segundo === num || num === 0) {
    return true;
  } else {
    return false;
  }
}

let numero = 21;

if (pertenceFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
