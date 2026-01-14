/*importation of module fs in mode 
promise(userland)*/
const fs = require("fs").promises;

/* function async for read and treat folder*/
async function lireFichier(filePath) {
  try {
    /* await = waiting the resolution of promise fs.readfile*/
    const data = await fs.readFile(filePath, "utf-8");

    /* simple traiting : count words*/
    const mots = data.split(" ").length;
    console.log("Le fichier contient ${mots} mots.");
  } catch (err) {
    console.error("Erreur lors de la lecture du fichiers : ", err);
  }
}

/*call of function*/
lireFichier("test.txt");
console.log("Le programme continue pendant que le fichiers est lu...");

async function lirePlusieursFichiers(files) {
  const promises = files.map(f => lireFichier(f));
  await Promise.all(promises);
}

lirePlusieursFichiers(["test.txt", "test2.text"]);

function attendre(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve('Attendu ${ms} ms');
    }, ms);
});
}

async function testAsync() {
  console.log("Début");
  const resultat = await attendre(2000);
  console.log(resultat);
  console.log("Fin");
}

testAsync();
console.log("Ce message s'affiche tout de suite");
