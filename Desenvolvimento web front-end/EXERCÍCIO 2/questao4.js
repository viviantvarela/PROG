// Questão 4

let altura = Number(prompt(`Digite sua altura em centimetros: `));
let sexo = prompt(`Digite 'm' para masculino ou 'f' para feminino: `).toLowerCase();
let k;

if (sexo == 'm') {
    k = 4;
} else {
    k = 2;
}

let pesoIdeal = (altura - 100) - ((altura - 150) / k);

console.log(`A sua altura em centímetros é ${altura}cm, seu sexo é ${(sexo == `f`) ? `feminino` :  `masculino`}, e o seu peso ideal é ${pesoIdeal.toFixed(2)}kg.`)
