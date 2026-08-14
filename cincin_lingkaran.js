const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitungan cincin lingkaran");
console.log("==================");
let phi = 3.14
console.log("RUMUS phi*(jari-jari lingkaran luar * jari-jari lingkaran luar - jari-jari lingkaran dalam * jari-jari lingkaran dalam)")

let jari_jari_lingkaran_luar = Number(prompt("Masukkan jari-jari lingkaran luar : "))
let jari_jari_lingkaran_dalam = Number(prompt("Masukkan jari-jari lingkaran dalam : "))
let luas = phi * (jari_jari_lingkaran_luar * jari_jari_lingkaran_luar - jari_jari_lingkaran_dalam * jari_jari_lingkaran_dalam)
let keliling_total_batas = 2 * phi * (jari_jari_lingkaran_luar + jari_jari_lingkaran_dalam)

console.log(`luas : ${luas} cm2
    keliling total batas : ${keliling_total_batas}cm`)