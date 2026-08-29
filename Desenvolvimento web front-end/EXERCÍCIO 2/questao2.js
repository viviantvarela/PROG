// Questão 2 

let ladoA = 5;
let ladoB = 8;
let ladoC = 10;

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){
  console.log(`A medida A é ${ladoA}, a medida B é ${ladoB} e a medida C é ${ladoC}. Essas medidas PODEM formar um triângulo, porque os seus três lados são menores que a soma dos outros dois.`);
} else {
  console.log(`A medida A é ${ladoA}, a medida B é ${ladoB} e a medida C é ${ladoC}. Essas medidas NÃO PODEM formar um triângulo, pois pelo menos um dos lados é maior ou igual a soma dos outros dois.`);
}


