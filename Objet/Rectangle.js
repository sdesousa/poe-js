class Rectangle {
    longueur;
    largeur;

    constructor(lon, lar) {
        this.longueur = lon;
        this.largeur = lar;
    }

    getPerimetre() {
        return (this.longueur + this.largeur) * 2;
    }

    getAire() {
        return this.longueur*this.largeur;
    }

    estCarre() {
        return this.longueur === this.largeur;
    }

    afficher() {
        let estC = (this.estCarre()) ? "C'est" : "Ce n'est pas";
        return `Longueur: [${this.longueur}] - Largeur: [${this.largeur}] - Périmètre: [${this.getPerimetre()}] - Aire: [${this.getAire()}] - ${estC} un carré`;
    }
}

let rect1 = new Rectangle(4,3);
document.write(`${rect1.afficher()} <br />`);
let rect2 = new Rectangle(6,6);
document.write(`${rect2.afficher()} <br />`);