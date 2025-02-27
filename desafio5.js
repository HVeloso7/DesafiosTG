let palavra = "Vianey";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  invertida += palavra[i];
}

console.log("Palavra original:", palavra);
console.log("Palavra invertida:", invertida);
