const mediaParcial = 48;
const notaAVfinal = 120 - mediaParcial;

if (notaAVfinal > 100) {
  console.log(`Com a média parcial de ${mediaParcial}, você precisaria de ${notaAVfinal} na avaliação final. Como a nota máxima é 100, não é possível atingir a média.`);
}
  
else {
  const mediaFinal = (mediaParcial + notaAVfinal) / 2;
  console.log(`A nota que você precisa na avaliação final é ${notaAVfinal}, com isso sua média final será ${mediaFinal}!`);
}  
