const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TABUNG");
console.log("==================");
let r = Number(prompt("Masukkan jari-jari : "))
let t = Number(prompt("Masukkan tinggi : "))
let phi = 3.14
let luas = 2 * phi * r * (r + t)
let volume = phi * r * r * t
console.log(`
    luas :${luas}cm2
    volume :${volume}cm3`)
console.log("=====selesai=====")