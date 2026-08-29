// Questão 4

let altura = number(prompt(`Digite sua altura em centimetros:`));
let sexo = prompt(`Digite 'm' para masculino ou 'f' para feminino:`).toLowerCase();

if (sexo == 'm'){
  peso = altura - 100 - (altura - 150 / 4)
} else {
  peso = altura - 100 - (altura - 150 / 2)
}
   
console.log(`A altura é ${altura}, o sexo é ${sexo}`)