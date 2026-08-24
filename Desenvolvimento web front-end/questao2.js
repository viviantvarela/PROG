const mediaParcial = 45;
const notaNecessaria = 120 - mediaParcial;

if (notaNecessaria > 100 ){
    console.log(`Minha média parcial é ${mediaParcial},será necessario ${notaNecessaria}`+
        `pontos na avaliação final - como a nota máxima é 100, não é possivel aprovar.`);
}
else {
    console.log (`Com a media parcial ${mediaParcial},o estudante precisa tirar` +
        `${notaNecessaria} na avaliação final para ser aprovado.`);
}
