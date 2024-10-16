/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }   

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 24.9) {
            return 'Peso normal';
        } else if (imc < 29.9) {
            return 'Sobrepeso';
        } else if (imc < 34.9) {
            return 'Obesidade grau 1';
        } else if (imc < 39.9) {
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    }
    
}   

const pessoa = new Pessoa('José', 70, 1.75);
console.log(pessoa.calcularIMC()); // 22.86 
console.log(pessoa.classificarIMC()); // Peso normal


