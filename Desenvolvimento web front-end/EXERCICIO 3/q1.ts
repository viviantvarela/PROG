// Questão 1


let somaRenda: number = 0;
let somaFilhos: number = 0;
let quantFamilias: number = 0;


let renda: number = Number(prompt('Digite a renda da família (ou um número negativo para encerrar): '));
let filhos: number = Number(prompt('Digite a quantidade de filhos da famí­lia (ou um número negativo para encerrar): '));


while (renda >= 0 && filhos >= 0) {
 somaRenda += renda;
 somaFilhos += filhos;
 quantFamilias++;
  
 renda = Number(prompt('Digite a renda da família (ou um número negativo para encerrar): '));
 if (renda >= 0) {
   filhos = Number(prompt('Digite a quantidade de filhos da famí­lia (ou um número negativo para encerrar): '));
 }
}


 if (quantFamilias > 0) {
   let mediaRenda: number = somaRenda / quantFamilias;
   let mediaFilhos: number = somaFilhos / quantFamilias;


console.log(`Total de famílias: ${quantFamilias}`);
console.log(`Média de renda: ${mediaRenda.toFixed(2)}`);
console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`);


} else {
   console.log('Nenhuma família foi registrada.');
}
