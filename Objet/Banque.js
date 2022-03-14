class BankAccount {
    #numero;

    constructor(num, nom, solde, decouvert) {
        this.#numero = num;
        this.titulaire = nom;
        this.solde = solde;
        this.decouvertAutorise = decouvert;
    }

    crediter(montant) {
        this.solde += montant;
    }

    virer(montant) {
        try {
            this.checkDecouvert(montant);
            this.solde -= montant;
        } catch (error) {
            console.log("ERROR : " + error);
        }
    }

    checkDecouvert(montant) {
        if (this.solde - montant < this.decouvertAutorise)
            throw "Le virement dépasse le montant du découvert autorisé";
    }

    display() {
        return  `Titulaire: ${this.titulaire}, Numero: ${this.numero}, Découvert autorisé: ${this.decouvertAutorise}, Solde: ${this.solde}`;
    }
}

let compte = new BankAccount("A1", "Sylvain", 0, 200);
document.write(`${compte.display()} <br />`);
compte.virer(50);
compte.crediter(300);
document.write(`${compte.display()} <br />`);
compte.virer(100);
document.write(`${compte.display()} <br />`);
compte.virer(500);
document.write(`${compte.display()} <br />`);
