const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("perhitungan luas segi enam beraturan");
console.log('==================')
console.log("rumus luas segi enam beraturan L = (3√3 / 2) * s²")
let sisi = Number(prompt("Masukkan panjang sisi : "))
let luas = (3 * Math.sqrt(3) / 2) * sisi * sisi
let hasil = (`luas : ${luas} cm2`)
console.log(hasil)
