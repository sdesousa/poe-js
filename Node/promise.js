const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getName = () => {
    return new Promise(resolve => {
        rl.question('Entrez votre nom : ', resolve);
        // Resolve est l’opération qui doit être exécuter,
        // lorsque l’opération asynchrone (rl.question()) finit à s'exécuter
    });
}
const getAge = () => {
    return new Promise(resolve => {
        rl.question('Entrez votre age : ', resolve);
    });
}
const display = data => { console.log(data) }

const startProg = () => {
    getName()
        .then(name => display(name))
        // name: la valeur du retour de la fonction getName()
        .then(() => getAge())
        .then(age => display(age))
        // age: la valeur du retour de la fonction getAge().
        .then(() => rl.close());
}
startProg();