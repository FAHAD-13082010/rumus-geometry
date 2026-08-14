const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitungan limas");
console.log("==================");
let panjang = Number(prompt("Masukkan panjang : "))
let lebar = Number(prompt("Masukkan lebar : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let luas = panjang * lebar + 2 * (panjang * tinggi / 2) + 2 * (lebar * tinggi / 2)
let volume = (panjang * lebar * tinggi) / 3
let hasil = (`luas : ${luas} cm2
    volume : ${volume}cm3`)
    console.log(hasil)
    console.log("======ini nyontek ga kamu?======")