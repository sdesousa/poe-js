class Addition {

    static addition(c1, c2, c3) {
        return c1+c2+c3;
    }
}

class Moyenne{

    static moyenne(c1, c2, c3) {
        return Addition.addition(c1, c2, c3)/3;
    }
}

document.write(`1+2+3 = ${Addition.addition(1, 2, 3)}<br />`);
document.write(`Moyenne de [1,2,3] = ${Moyenne.moyenne(1, 2, 3)}<br />`);
