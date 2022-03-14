class Voiture {

    couleur;
    puissance;
    vitesse;

    constructor(couleur = "noire", puissance = 10, vitesse = 30) {
        this.couleur = couleur;
        this.puissance = puissance;
        this.vitesse = vitesse;
    }

    accelerer() {
        this.vitesse += this.puissance;
    }

    ralentir(amount) {
        this.vitesse -= this.puissance;
    }

    freiner() {
        this.vitesse = 0;
    }

}

let voit1 = new Voiture("bleu", 15, 50);
console.log(voit1);
document.write("couleur: " + voit1.couleur + "<br />");
document.write("puissance: " + voit1.puissance + "<br />");
document.write("vitesse: " + voit1.vitesse + "<br />");
voit1.accelerer();
voit1.accelerer();
document.write("vitesse: " + voit1.vitesse + "<br />");
voit1.ralentir();
document.write("vitesse: " + voit1.vitesse + "<br />");
voit1.freiner();
document.write("vitesse: " + voit1.vitesse + "<br />");

let voit2 = new Voiture();
console.log(voit2);
