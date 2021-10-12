console.log("1 - Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai");
let pinigine = [];
const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

console.log("2.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą");
let suma = 0;
let pinigine1 = [];
const ilgis1 = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("ilgis1: ", ilgis1);
for (let i = 0; i < ilgis1; i++) {
let pinigai1 = Math.trunc(Math.random() * 11);
pinigine1.push(pinigai1);
suma += pinigai1;
}
console.log("masyvas: ", pinigine1);
console.log("pinigų suma: ", suma);

console.log("3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą");
let pinigine3 = [];
const ilgis3 = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis3);
for (let i = 0; i < ilgis3; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine3.push(pinigai);
}
console.log("masyvas3: ", pinigine3);

for (let i = 0; i < ilgis3; i++) {
    if (pinigine3[i] <= 2) {
        pinigine3[i] = 0;
    }
}
console.log("reikšmes, kurios yra mažesnės arba lygios 2 ir perdarytos i 0): ", pinigine3);

console.log("5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra");
let pinigine5 = [];
const ilgis5 = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis5);
for (let i = 0; i < ilgis5; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine5.push(pinigai);
}
console.log("masyvas: ", pinigine5);

let didziausia = 0;
let kartai = 0;

for (let i = 0; i < ilgis5; i++) {
    if (pinigine5[i] > didziausia) {
        didziausia = pinigine5[i];
        kartai = 0;
    }
    if (pinigine5[i] === didziausia) {
        kartai++;
    }
}

console.log("didziausia masyvo reiksme: ", didziausia);
console.log("kiek tokių didžiausių reikšmių masyve yra: ", kartai);

