// Questão 3

let bimestre1 = 70;
let bimestre2 = 85;

const mediaParcial = (bimestre1 * 2 + bimestre2 * 3) / 5;
console.log(`A média parcial do aluno é ${mediaParcial.toFixed(2)}`)

if (mediaParcial >= 60.00) {
    console.log(`Aprovado!`);
} else if ( mediaParcial >= 10) {
    console.log(`Prova final!`);
} else {
    console.log(`Reprovado`)
}
