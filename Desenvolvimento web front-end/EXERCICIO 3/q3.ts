// Questão 3

let inicio: number = Number(prompt('Digite o número inicial do intervalo: '));

let fim: number = Number(prompt('Digite o número final do intervalo: '));

if (inicio >= 1 && fim >= inicio) {
  let contadorPrimos: number = 0;

for (let num: number = inicio; num <= fim; num ++) {
if (num > 1) {
  let primo: boolean = true;
  let divisor: number = num - 1; 

