/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    
    calcularGasto(km, precoCombustivel) {
        return km * (this.gastoMedio * precoCombustivel);
    }

    descrever(km, precoCombustivel) {
        return `O carro ${this.marca} de cor ${this.cor} gastará R$ ${this.calcularGasto(km, precoCombustivel).toFixed(2)} para percorrer ${km} km`; 
    }

}

const carro = new Carro('Fiat', 'Preto', 10);




    