// Questão 2 

let ladoA = parseInt(prompt(`Digite um número inteiro para o lado A: `));
let ladoB = parseInt(prompt(`Digite um número inteiro para o lado B: `));
let ladoC =  parseInt(prompt(`Digite um número inteiro para o lado C: `));

const formarTriangulo = ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB);
console.log(formarTriangulo);
