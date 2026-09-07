// Questão 2

let num: number;

do {
num = Number(prompt('Digite um número inteiro positivo (>1): '));
} while (num <= 1); 


let primo: boolean = true;
let divisor: number = num - 1;
