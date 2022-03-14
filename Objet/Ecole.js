class Personne {
    constructor(nom) {
        this.nom = nom;
    }
    display() {
        return `Nom: ${this.nom}`;
    }
}

class Etudiant extends Personne {
    constructor(nom, ine) {
        super(nom);
        this.ine = ine;
    }
    display() {
        return `Nom: ${this.nom} - INE: ${this.ine}`;
    }
}

class Professeur extends Personne {
    constructor(nom, specialite) {
        super(nom);
        this.specialite = specialite;
    }
    display() {
        return `Nom: ${this.nom} - Specialité: ${this.specialite}`;
    }
}

let personnes = [
    new Professeur("Daniel", "Mathématiques"),
    new Professeur("Florence", "Histoire"),
    new Etudiant("David", "E1234"),
    new Professeur("Damien", "Biologie"),
    new Etudiant("Hugo", "E9876"),
    new Etudiant("Luc", "E2345"),
    new Etudiant("Laura", "E5555")
];

for (let i in personnes) {
    document.write(`${personnes[i].display()} <br />`);
}

