import promptSync from "prompt-sync";
const prompt = promptSync();

//Exercicio 1

let letraA: number = 0;
let letraFinalS: number = 0;
let nomeDigitado: string;
let nomeRecebido: string[] = [];
let numeroX: number;

numeroX = Number(prompt("Quantos nomes quer digitar?"));

for (let i = 0; i < numeroX; i++) {
  nomeDigitado = prompt("Digite o nome que desejar!");
  nomeRecebido.push(nomeDigitado.toUpperCase());

  let primeiraLetra: string = nomeRecebido[0].replace("A", "A");

  if (primeiraLetra == "A") {
    letraA = 1;
  }

  if (nomeRecebido[i].endsWith("S")) {
    letraFinalS = 1;
  }
}

console.log(
  'Nomes que começam com "A": ' +
    letraA +
    ' Nome que terminam com "S": ' +
    letraFinalS
);

//Exercicio 2
let vetor: number[] = [64, 34, 25, 12, 22, 11, 90];
const n = vetor.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (vetor[j] > vetor[j + 1]) {
      const aux = vetor[j];
      vetor[j] = vetor[j + 1];
      vetor[j + 1] = aux;
    }
  }
}

console.log(vetor);
