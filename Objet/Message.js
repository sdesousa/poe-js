class Message {

    expediteur;
    destinataire;
    dateExpedition;

    constructor(expediteur, destinataire, dateEpxedition) {
        this.expediteur = expediteur;
        this.destinataire = destinataire;
        this.dateExpedition = dateEpxedition;
    }

    dateFormat() {
        return `${this.dateExpedition.getDate()}/${this.dateExpedition.getMonth()+1}/${this.dateExpedition.getFullYear()}, 
        ${this.dateExpedition.getHours()}:${this.dateExpedition.getMinutes()}:${this.dateExpedition.getSeconds()}`
    }

    display() {
        return `De: ${this.expediteur.display()} à ${this.destinataire.display()}
        <br />A: ${this.dateFormat()}`;
    }
}

class Personne {

    prenom;
    nom;

    constructor(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }

    display() {
        return `${this.prenom} ${this.nom}`;
    }
}

let expediteur= new Personne("David", "Bouneau");
let destinataire= new Personne("Damien", "Claustre");
let msg = new Message(expediteur, destinataire, new Date());

document.write(`${expediteur.display()} <br />`);
document.write(`${destinataire.display()} <br />`);
document.write(`${msg.display()} <br />`);