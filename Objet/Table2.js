class Table2 {

    static start(width, border, idTable = "table") {
        let tab = document.createElement("table");
        tab.setAttribute("id", idTable);
        tab.style.width = `${width}%`;
        tab.style.border = `${border}px solid black`;
        console.log(tab);
        document.body.append(tab);
    }

    static header(head, idTable) {
        let trHead = document.createElement("tr");
        trHead.setAttribute("id", "trHead");
        document.getElementById("table").appendChild(trHead)
        for(let x in head) {
            let thHead = document.createElement("th");
            thHead.innerHTML = head[x];
            document.getElementById("trHead").appendChild(thHead);
        }
    }

    static row(row, idTable = "table") {
        let trRow = document.createElement("tr");
        let trId = `trRow_${row[0]}`
        trRow.setAttribute("id", trId);
        document.getElementById("table").appendChild(trRow)
        for(let x in row) {
            let tdRow = document.createElement("td");
            tdRow.innerHTML = row[x];
            document.getElementById(trId).appendChild(tdRow);
        }
    }

}

Table2.start(75, 4); // <table>
// (largeur du tableau en %, épaisseur de la bordure en px)
Table2.header(["Firstname", "Lastname", "Email"]);
Table2.row(["Daniel", "Laroche", "d.laroche@mail.com"]);
Table2.row(["Florence", "Bert", "f.bert@mail.com"]);
