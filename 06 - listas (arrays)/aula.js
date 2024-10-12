
const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
/*
soma = 0;
let i = 0;

while (i < notas.length) {
    const nota = notas[i];
    soma = soma + nota;
    i++;
}

const mediaWhile = soma / notas.length;
console.log(mediaWhile);
*/
