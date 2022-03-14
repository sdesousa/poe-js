const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const startProg = () => {
    /*
    Le programme ne sera pas exécuté correctement, car les deux lignes :
        13 et 16 seront exécutée parallèlement (Asynchrone).
     */
    // rl.question('Entrez votre nom? \n', reponse => {
    //     console.log('Votre nom est ' + reponse);
    // });
    // rl.question('Entrez votre age? \n', reponse => {
    //     console.log(' et vous avez ' + reponse + 'ans');
    //     rl.close();
    // })

    /* plusieurs solutions: imbriquer les fonctions ou utiliser des callbacks */
    const getName = name => {
        console.log('Votre nom est ' +name);
        rl.question('Entrez votre age : ', getAge);
    }
    const getAge = age => {
        console.log('et vous avez ' + age + ' ans');
        rl.close();
    }
    rl.question('Entrez votre nom : ', getName);

}

startProg();