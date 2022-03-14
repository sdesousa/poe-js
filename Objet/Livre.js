class Livre {
    constructor(nbPage, titre) {
        try {
            this.checkNbPage(nbPage);
            // finally par defaut ?
            this.titre = titre;
            this.nbPage = nbPage;
        } catch (error) {
            console.log("ERROR : " + error);
        }
    }

    checkNbPage(nbPage) {
        if (nbPage > 100)
            throw "Nombre de page trop important";
    }

    display() {
        return  `Titre: ${this.titre}, Pages: ${this.nbPage}`;
    }
}

let livre1 = new Livre(90, "Harry Potter");
document.write(`${livre1.display()} <br />`);
let livre2 = new Livre(190, "Narnia");
document.write(`${livre2.display()} <br />`);
