const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("MENGHITUNG BELAH KETUPAT");
console.log("==================");

let diagonal1 = Number(prompt("Masukkan diagonal 1 : "))
let diagonal2 = Number(prompt("Masukkan diagonal 2 : "))
let sisi = Number(prompt("Masukkan sisi : "))
let luas = (diagonal1 * diagonal2) / 2
let keliling = 4 * sisi
let hasil = (`luas : ${luas} cm2
keliling : ${keliling} cm`)
console.log(hasil)
console.log("=====selesai=====")