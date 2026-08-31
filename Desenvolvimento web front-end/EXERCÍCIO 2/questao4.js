// Questão 4

let altura = Number(prompt(`Digite sua altura em centimetros: `));
let sexo = prompt(`Digite 'm' para masculino ou 'f' para feminino: `).toLowerCase();
let pesoIdeal;

if (sexo == 'm'){
  peso = (altura - 100) - ((altura - 150) / 4);
} else {
  peso = (altura - 100) - ((altura - 150) / 2);
}
   
console.log(`A sua altura em centímetros é ${altura}cm, seu sexo é ${sexo}, e o seu peso ideal é ${pesoIdeal.toFixed(2)}kg.`)
