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
for ( let i = 0; i < pinigine.length; i++) {
    suma += pinigine[i];
}
console.log(suma);

console.log("3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą");
let suma2 = 0;
for ( let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2)
    suma2 += pinigine[i];
}
console.log(suma2);

console.log("4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio");
for ( let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2)
    pinigine[i] = 0;
}
console.log(pinigine);

console.log("5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra");
let didziausia = 0;
let kartai = 0;
for ( let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > didziausia) {
        didziausia = pinigine[i];
        kartai = 0;
    }
    if (pinigine[i] === didziausia) {
        kartai++;
    }
}
console.log("didziausia: ", didziausia);
console.log("kiek kartu: ", kartai);


console.log("6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes");
for(let i = 0; i < ilgis; i++) {
    if(pinigine[i] === 0) {
    pinigine[i] = i;
    }
}
console.log("reiksme: ", pinigine);

console.log("7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30");
for (let i = ilgis; i < 30; i++) {
    pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);
}
console.log("masyvo ilgis butu 30:", pinigine);

console.log("8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus");
let monetos = [];
let popieriniaiPinigai = [];
for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    }
    if(pinigine[i] > 2) {
        popieriniaiPinigai.push(pinigine[i]);
    }
}
console.log("mazesni arba lygi 2: ", monetos);
console.log("didesni nei 2: ", popieriniaiPinigai);

console.log("9.	Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais");
let pinigine1 = [];
pinigine1.push(monetos);
pinigine1.push(popieriniaiPinigai);
console.log("pinigine su skyreliais: monetoms ir popieriniams pinigams: ", pinigine1);

console.log("10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']");
pinigine1.push(['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']);
console.log(pinigine1);

console.log("11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę");
pinigine1[2].sort();
console.log(pinigine1);

console.log("12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20");
while(pinigine[2].length < 20) {
        if(Math.random() < 0.5) {
            pinigine[2].push('MasterCard')
        } else {
            pinigine[2].push('Visa')
        };
    }
    console.log(pinigine);


console.log("13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau");
let master = 0;
let visa = 0;
for(i = 0; i < pinigine[2].length; i++) {
    if(pinigine[2][i] === 'MasterCard') {
        master++
    } else if(pinigine[2][i] === 'Visa') {
        visa++;
    }   
}
console.log('MasterCard =', master, 'Visa =', visa);

console.log("14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999");
let bilietai = [];
for (let i = 0; i < 10; i++) {
    let reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
    bilietai.push(reiksmes);
}
pinigine1.push(bilietai);
console.log("keturi skyreliai: ", pinigine1);

console.log("15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio");
pinigine1[1].sort(function(a, b) {
    return b - a;
  });
console.log(pinigine1[1]);

console.log("16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500)");
let popieriniuPiniguSuma = 0;
let kupiura;

while (popieriniuPiniguSuma < 500) {
    kupiura = rand(3, 10)
    pinigine1[2].push(kupiura)
    popieriniuPiniguSuma += kupiura
    }
    
    console.log(pinigine1[2]);
    console.log(popieriniuPiniguSuma);

console.log("17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.");
let laimingiBilietai = [];

pinigine1[3].forEach(bilietas => {
    if (bilietas % 777 === 0) laimingiBilietai.push(bilietas);
});
console.log('Kiek laimingu: ', laimingiBilietai.length, ' Laimingi bilietai: ', laimingiBilietai);

console.log("18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai");
pinigine1.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);
console.log(pinigine1[4]);

pinigine1[4].sort((a, b) => {
    return a.length - b.length;
});
console.log(pinigine1[4]);

