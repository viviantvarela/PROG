function diasDesdeInicioDoAno() {
  const dataDeHoje = new Date();
  const inicioDoAno = new Date(dataDeHoje.getFullYear(), 0, 1);

  return Math.floor(
    (dataDeHoje.getTime() - inicioDoAno.getTime()) / (1000 * 60 * 60 * 24)
  );
}

console.log(
  `A data de hoje é ${new Date()} e se passaram ${diasDesdeInicioDoAno()} dias desde o início do ano!`
);