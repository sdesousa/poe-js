class Calculatrice {
    nb1;
    nb2;

    constructor(nb1, nb2) {
        this.nb1 = nb1;
        this.nb2 = nb2;
    }

    addition() {
        return this.nb1 + this.nb2;
    }
    soustraction() {
        return this.nb1 - this.nb2;
    }
    multiplication() {
        return this.nb1 * this.nb2;
    }
    division() {
        return this.nb1 / this.nb2;
    }
    puissance() {
        return this.nb1 ** this.nb2;
    }

}
let nb1 = 8;
let nb2 = 6;
let calc = new Calculatrice(nb1, nb2);
console.log(calc);
document.write(`nb1: ${nb1} - nb2: ${nb2} <br />`);
document.write(`Addition: ${calc.addition()} <br />`);
document.write(`Soustraction: ${calc.soustraction()} <br />`);
document.write(`Multiplication: ${calc.multiplication()} <br />`);
document.write(`Division: ${calc.division()} <br />`);
document.write(`Puissance: ${calc.puissance()} <br />`);