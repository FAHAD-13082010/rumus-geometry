const prompt = require('prompt-sync')({ sigint: true });
console.log('==========================================')
console.log("perhitungan luas permukaan prisma segitiga");
console.log('==========================================');

console.log("rumus luas permukaan prisma segitiga L = (2 * luas alas) + (keliling alas * tinggi)")
let alas = Number(prompt("Masukkan alas : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let hasil_alas = (alas * alas) / 2
let keliling_alas = 3 * alas
let luas_permukaan = (2 * hasil_alas) + (keliling_alas * tinggi)
console.log(`alas : ${alas}cm
    tinggi : ${tinggi}cm
    luas permukaan : ${luas_permukaan}cm2`)