const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const total = SP + RJ + MG + ES + Outros;

console.log("Percentual de representação de cada estado:");
console.log("SP: " + ((SP / total) * 100).toFixed(2) + "%");
console.log("RJ: " + ((RJ / total) * 100).toFixed(2) + "%");
console.log("MG: " + ((MG / total) * 100).toFixed(2) + "%");
console.log("ES: " + ((ES / total) * 100).toFixed(2) + "%");
console.log("Outros: " + ((Outros / total) * 100).toFixed(2) + "%");
