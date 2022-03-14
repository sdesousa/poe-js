class Stat {
    numbers = [];

    entrer(nombre) {
        this.numbers.push(nombre);
    }

    getSum() {
        return this.numbers.reduce((x, nb) => x + nb);
    }

    getAvg() {
        return this.getSum()/this.numbers.length;
    }

    getMedian() {
        return this.numbers.sort((a, b) => a - b)[Math.floor((this.numbers.length-1)/2)];
    }
}

let stat = new Stat();
stat.entrer(2);
stat.entrer(5);
stat.entrer(7);
stat.entrer(1);
stat.entrer(3);
stat.entrer(2);
stat.entrer(8);

document.write(`Somme: ${stat.getSum()} <br />`);
document.write(`Moyenne: ${stat.getAvg()} <br />`);
document.write(`Medianne: ${stat.getMedian()} <br />`);

let stat2 = new Stat();
stat2.entrer(11);
stat2.entrer(7);
stat2.entrer(23);
stat2.entrer(4);
stat2.entrer(8);
stat2.entrer(9);

document.write(`Somme: ${stat2.getSum()} <br />`);
document.write(`Moyenne: ${stat2.getAvg()} <br />`);
document.write(`Medianne: ${stat2.getMedian()} <br />`);