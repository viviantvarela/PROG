interface Aluno{
    nome: string;
    matricula: number;
    curso: string;
    ira: number;
}

let aluno = {
    "nome" : "Maria",
    "matrícula" : 202092923222,
    "curso" : "Informática",
    "ira" : 83.2
}

console.log(`${aluno.nome} é aluna do curso de ${aluno.curso} com matrícula ${aluno.matrícula} e possui IRA ${aluno.ira}.`);