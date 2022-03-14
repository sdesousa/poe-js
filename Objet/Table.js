class Table {

    static start(width, border) {
        return `<table style='width: ${width}%; border: ${border}px solid black'>`
    }

    static header(head) {
        let msg = "<tr>"
        for(let x in head) {
            msg += `<th>${head[x]}</th>`
        }
        msg += "</tr>"
        return msg;
    }

    static row(row) {
        let msg = "<tr>"
        for(let x in row) {
            msg += `<td>${row[x]}</td>`
        }
        msg += "</tr>"
        return msg;
    }

    static end() {
        return "</table>"
    }

}

document.write(
    Table.start(75, 4), // <table>
    // (largeur du tableau en %, épaisseur de la bordure en px)
    Table.header(["Firstname", "Lastname", "Email"]),
    Table.row(["Daniel", "Laroche", "d.laroche@mail.com"]),
    Table.row(["Florence", "Bert", "f.bert@mail.com"]),
    Table.end() // </table>
);