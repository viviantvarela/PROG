const mediaParcial = 48;
const mediaIFRN = 60;

const notaAVfinal = (mediaIFRN * 2) - mediaParcial;
const mediaFinal = (mediaParcial + notaAVfinal) / 2;

console.log(`A nota que você precisa na avaliação final é ${notaAVfinal}, com isso sua média final será ${mediaFinal}!`);
