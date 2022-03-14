class Joueur {
    nom;
    position;
    nbBut;

    constructor(nom, position, nbBut) {
        this.nom = nom;
        this.position = position;
        this.nbBut = nbBut;
    }

    comparaison(joueur) {
        return (this.nbBut < joueur.nbBut) ? `${joueur.nom} est meilleur que ${this.nom}` : `${this.nom} est meilleur que ${joueur.nom}`;
    }
}

let messi = new Joueur("Messi", "AMF", 21);
let ronaldo = new Joueur("Ronaldo", "CF", 18);
document.write(messi.comparaison(ronaldo) + "<br />");
document.write(ronaldo.comparaison(messi) + "<br />");