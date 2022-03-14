class Animal {
    constructor(nom, point_de_vie = 100) {
        this.nom = nom;
        this.point_de_vie = point_de_vie;
    }
    dormir() {
        this.point_de_vie++;
    }

    display() {
        return  `Nom: ${this.nom}, Pv: ${this.point_de_vie}`;
    }
}

class Carnivore extends Animal {
    chasser(animal) {
        this.point_de_vie += 5;
        animal.point_de_vie = 0;
    }
}

class Herbivore extends Animal {
    paturer() {
        this.point_de_vie += 5;
    }
}

loup = new Carnivore("loup");
lapin = new Herbivore("lapin", 60);
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
lapin.paturer();
document.write("Lapin paturer:  <br />")
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
lapin.dormir();
document.write("Lapin dormir:  <br />")
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
loup.dormir();
document.write("Loup dormir:  <br />")
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
loup.chasser(lapin);
document.write("Loup chasser:  <br />")
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
lapin.dormir();
document.write("Lapin dormir:  <br />")
document.write(`${loup.display()} <br />`);
document.write(`${lapin.display()} <br />`);
