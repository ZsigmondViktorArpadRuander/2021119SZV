/*
- Keszits alprogamot, ami...:
    - Egy szam tombbol visszaadja a szamok atlagat
    - Egy szoveg tombbol visszaadja a leghosszabb szoveg karakterszamat
    - Egy logikai tombbol visszaadja, hogy hany igaz es hany hamis volt (tombben adja vissza)
    - Egy szam tombbol visszaadja a legnagyobb szamot

A TESZTEKET MOST NE VEDD FIGYELEMBE!
- A teszteseket hivd meg, az eredmenyek pedig jelenjenek meg egy BS tablaban
    - [5, 23, 12, 0, 13, 112]               >> 27.5
    - [alma, korte, barack, fa, dio, papir] >> 6
    - [t, t, f, t, f, f, t, f]              >> t = 4, f = 4
    - [5, 23, 12, -5, 0, 13, 112]           >> 112
*/

function SzamokAtlaga(szamok){
    var atlag = 0;

    for(var i = 0; i < szamok.length; i++){
        atlag += szamok[i];
    }

    atlag /= szamok.length;
    return atlag;
}

function MaxSzoveg(szavak){
    var max = szavak[0].length;

    for(var i = 1; i < szavak.length; i++){
        if(szavak[i].length > max){
            max = szavak[i].length;
        }
    }

    return max;
}

function TrueFalseDarab(logikaiak){
    var tDb = 0;
    var fDb = 0;

    for(var i = 0; i < logikaiak.length; i++){
        if(logikaiak[i] /*== true*/){
            tDb++;
        }
        else{
            fDb++;
        }
    }

    return [tDb, fDb];
}

function MaxSzam(szamok){
    var max = szamok[0];

    for(var i = 1; i < szamok.length; i++){
        if(szamok[i] > max){
            max = szamok[i];
        }
    }

    return max;
}

/*console.log(SzamokAtlaga([5, 23, 12, 0, 13, 112]));
console.log(MaxSzoveg(["alma", "korte", "barack", "fa", "dio", "papir"]));
console.log(TrueFalseDarab([true, true, false, true, false, false, true, false]));
console.log(MaxSzam([5, 23, 12, -5, 0, 13, 112]));*/

//UNIT tesztek
function Teszt1(bemenet, kimenet){
    return SzamokAtlaga(bemenet) == kimenet;
}

function Teszt2(bemenet, kimenet){
    return MaxSzoveg(bemenet) == kimenet;
}

function Teszt3(bemenet, kimenet){
    var eredmenyTomb = TrueFalseDarab(bemenet);
    var tesztEredmeny = true;

    for(var i = 0; i < kimenet.length; i++){
        if(eredmenyTomb[i] != kimenet[i]){
            tesztEredmeny = false;

            //stop, kilepes az alprogrambol
            break;
        }
    }

    return tesztEredmeny;
    //[4, 4] == [4, 4]
}

function Teszt4(bemenet, kimenet){
    return MaxSzam(bemenet) == kimenet;
}

/*console.log(Teszt1([5, 23, 12, 0, 13, 112], 27.5));
console.log(Teszt2(["alma", "korte", "barack", "fa", "dio", "papir"], 6));
console.log(Teszt3([true, true, false, true, false, false, true, false], [4, 4]));
console.log(Teszt4([5, 23, 12, -5, 0, 13, 112], 112));*/

/*
- Keszits alprogamot, ami...:
    - Egy szam tipusu tombot szetvalogat parosakra es paratlanokra
    - Egy szoveget ekezet mentesse alakit
    - Ami egy szoveget URL kompatibilissa alakit (Ez magyar nyelvű mondat >> ez_egy_magyar_nyelvu_mondat)
        - Csak kis betu, ekezetek nelkul, szokoz helyett alavonassal

- Tesztesetek:
    - [10, 23, -1, 0, 12] >> [10, 0, 12], [23, -1]
    - Árvíztűrő tükörfúrógép >> Arvizturo tukorfurogep
    - Ez egy magyar nyelvű mondat >> ez_egy_magyar_nyelvu_mondat
*/

function PsPtlSzetvalogatas(szamok){
    var psTomb = [];
    var ptlTomb = [];

    for(var i = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            psTomb.push(szamok[i]);
        }
        else{
            ptlTomb.push(szamok[i]);
        }
    }

    return [psTomb, ptlTomb];
    //[[2, 4, 6], [3, 5, 7, 9]]
}

function Ekezetmentesito(szoveg){
    for(var i = 0; i < szoveg.length; i++){
        //Árvíztűrő tükörfúrógép
        switch(szoveg[i]){
            case "á":
                szoveg = szoveg.replaceAll(szoveg[i], "a");
                break;
                
            case "é":
                szoveg = szoveg.replaceAll(szoveg[i], "e");
                break;

            case "í":
                szoveg = szoveg.replaceAll(szoveg[i], "i");
                break;

            case "ű":

            case "ü":

            case "ú":
                szoveg = szoveg.replaceAll(szoveg[i], "u");
                break;

            case "ő":

            case "ö":

            case "ó":
                szoveg = szoveg.replaceAll(szoveg[i], "o");
                break;

            case "Á":
                szoveg = szoveg.replaceAll(szoveg[i], "A");
                break;
                
            case "É":
                szoveg = szoveg.replaceAll(szoveg[i], "E");
                break;

            case "Í":
                szoveg = szoveg.replaceAll(szoveg[i], "I");
                break;

            case "Ű":

            case "Ü":

            case "Ú":
                szoveg = szoveg.replaceAll(szoveg[i], "U");
                break;

            case "Ő":

            case "Ö":

            case "Ó":
                szoveg = szoveg.replaceAll(szoveg[i], "O");
                break;
        }
    }

    return szoveg;
}

function UrlKeszito(szoveg){
    szoveg = szoveg.trim();
    szoveg = Ekezetmentesito(szoveg);
    szoveg = szoveg.replaceAll(" ", "_");
    szoveg = szoveg.toLowerCase();
    return szoveg;
}

function Teszt5(bemenet, kimenet){
    var fvEredmeny = PsPtlSzetvalogatas(bemenet);
    var tesztEredmeny = true;

    //Ps
    for(var i = 0; i < kimenet[0].length; i++){
        if(fvEredmeny[0][i] != kimenet[0][i]){
            tesztEredmeny = false;
            break;
        }
    }

    //Ptl
    for(var i = 0; i < kimenet[1].length; i++){
        if(fvEredmeny[1][i] != kimenet[1][i]){
            tesztEredmeny = false;
            break;
        }
    }

    return tesztEredmeny;
};

function Teszt6(bemenet, kimenet){
    return Ekezetmentesito(bemenet) == kimenet;
}

function Teszt7(bemenet, kimenet){
    return UrlKeszito(bemenet) == kimenet;
};

/*console.log(PsPtlSzetvalogatas([10, 23, -1, 0, 12]));
console.log(Ekezetmentesito("Árvíztűrő tükörfúrógép"));
console.log(UrlKeszito("Ez egy magyar nyelvű mondat"));*/

function TrKeszito(teszt, bemenet, kimenet, eredmeny){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(teszt));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(kimenet));
    td4.appendChild(document.createTextNode(eredmeny));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("torzs").appendChild(tr);
}

function Futtatas(){
    TrKeszito("Szamok atlaga", [5, 23, 12, 0, 13, 112], 27.5, Teszt1([5, 23, 12, 0, 13, 112], 27.5));
    TrKeszito("Max szoveg", ["alma", "korte", "barack", "fa", "dio", "papir"], 6, Teszt2(["alma", "korte", "barack", "fa", "dio", "papir"], 6));
    TrKeszito("True false db", [true, true, false, true, false, false, true, false], [4, 4], Teszt3([true, true, false, true, false, false, true, false], [4, 4]));
    TrKeszito("Max szam", [5, 23, 12, -5, 0, 13, 112], 112, Teszt4([5, 23, 12, -5, 0, 13, 112], 112));

    TrKeszito("Ps ptl", [10, 23, -1, 0, 12], [[10, 0, 12], [23, -1]], Teszt5([10, 23, -1, 0, 12], [[10, 0, 12], [23, -1]]));
    TrKeszito("Ekezetmentesito", "Árvíztűrő tükörfúrógép", "Arvizturo tukorfurogep", Teszt6("Árvíztűrő tükörfúrógép", "Arvizturo tukorfurogep"));
    TrKeszito("Url keszito", "Ez egy magyar nyelvű mondat", "ez_egy_magyar_nyelvu_mondat", Teszt7("Ez egy magyar nyelvű mondat", "ez_egy_magyar_nyelvu_mondat"));
}

Futtatas();