import fs from "fs";

const dadosDoJson = fs.readFileSync("dados.json");
const faturamentoMensal = JSON.parse(dadosDoJson);

let valoresValidos = [];

for (let i = 0; i < faturamentoMensal.length; i++) {
  if (faturamentoMensal[i].valor > 0) {
    valoresValidos.push(faturamentoMensal[i].valor);
  }
}

console.log(valoresValidos);

let menor = valoresValidos[0];
let maior = valoresValidos[0];

for (let i = 1; i < valoresValidos.length; i++) {
  if (valoresValidos[i] < menor) {
    menor = valoresValidos[i];
  }
  if (valoresValidos[i] > maior) {
    maior = valoresValidos[i];
  }
}

console.log("Menor faturamento:", menor);
console.log("Maior faturamento:", maior);

let somaTotal = 0;

for (let i = 0; i < valoresValidos.length; i++) {
  somaTotal += valoresValidos[i];
}

let media = somaTotal / valoresValidos.length;

let diasAcimaMedia = 0;

for (let i = 0; i < valoresValidos.length; i++) {
  if (valoresValidos[i] > media) {
    diasAcimaMedia++;
  }
}

console.log("Menor faturamento do mês:", menor.toFixed(2));
console.log("Maior faturamento do mês:", maior.toFixed(2));
console.log("Número de dias com faturamento acima da média:", diasAcimaMedia);
