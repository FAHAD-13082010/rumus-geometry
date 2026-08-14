const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitungan keliling segi lima");
console.log('==================')
let sisi = Number(prompt("Masukkan panjang sisi : "))
let keliling = 5 * sisi
let hasil = (`keliling : ${keliling} cm`)
console.log(hasil)