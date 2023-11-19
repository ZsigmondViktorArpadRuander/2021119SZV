/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szamok tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/
function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
function KorKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));
