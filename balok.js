const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitungan balok");
console.log("==================");
let panjang = Number(prompt("Masukkan panjang : "))
let lebar = Number(prompt("Masukkan lebar : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
let volume = panjang * lebar * tinggi
let hasil = (`luas : ${luas} cm2
    volume : ${volume}cm3`)
    console.log(hasil)
    consoole.log('==================')
    console.log("====jangan")