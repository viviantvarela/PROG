// Questão 3

let inicio: number = Number(prompt('Digite o número inicial do intervalo: '));

let fim: number = Number(prompt('Digite o número final do intervalo: '));

if (inicio > 1 && fim >= inicio) {
  let contadorPrimos: number = 0;

for (let num: number = inicio; num <= fim; num ++) {
  let primo: boolean = true;
  let divisor: number = num - 1; 

while (primo && divisor > 1) {
if (num % divisor === 0) {
  primo = false;
} else {
  divisor = divisor -1;
  }
}

if (primo) {
  contadorPrimos++;
  }
}

console.log(`No intervalo de números de ínicio ${inicio} e fim ${fim}, existem ${contadorPrimos} números primos!`);

} else {
  console.log(`O intervalo de números digitado está inválido!`);
}
