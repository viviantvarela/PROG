// Questão 2 

let ladoA = 5;
let ladoB = 8;
let ladoC = 10;

let formarTriangulo = ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB);
console.log(formarTriangulo);
