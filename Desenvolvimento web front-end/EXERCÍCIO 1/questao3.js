function diasDesdeInicioDoAno() {
  const inicioDoAno = new Date(dataDeHoje.getFullYear(), 0, 1);

  return Math.floor(
    (dataDeHoje.getTime() - inicioDoAno.getTime()) / (1000 * 60 * 60 * 24)
  );
}

const dataDeHoje = new Date();
const dataFormatada = dataDeHoje.toLocaleDateString('pt-BR');

console.log(
  `A data de hoje é ${dataFormatada} e se passaram ${diasDesdeInicioDoAno()} dias desde o início do ano!`
);
