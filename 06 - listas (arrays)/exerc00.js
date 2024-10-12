
class jurosComposto {
    constructor(capital,taxames,tempo) {
        this.capital = capital;
        this.taxames = taxames;
        this.tempo = tempo;
    }
    calcularJuros() {
        return (this.capital * Math.pow((1 + this.taxames),this.tempo).toFixed(2));
    }

}

const jurosiva = new jurosComposto(220,0.05,240);
console.log(jurosiva.calcularJuros()); // 200 * (1 + 0.5) ^ 60 = 1.152921504606847e+18
console.log(jurosiva);
const jurosiva2 = new jurosComposto(220,0.05);
console.log(jurosiva2.calcularJuros());
