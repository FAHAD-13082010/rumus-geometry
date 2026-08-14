const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitungan bola");
console.log("==================");
let jari_jari= Number(prompt("Masukkan jari-jari : "))
let luas_permukaan = 4 * 3.14 * jari_jari * jari_jari
let volume = (4/3) * 3.14 * jari_jari * jari_jari * jari_jari
let hasil = (`luas permukaan : ${luas_permukaan} cm2
    volume : ${volume}cm3`)
    console.log(hasil)

    console.log("~~~~~~~aduhh bener lagi kok bisa?~~~~~~~")