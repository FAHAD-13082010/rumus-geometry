const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LINGKARAN");
console.log("==================");
let r = Number(prompt("Masukkan jari-jari : "))
let phi = 3.14
let luas = phi * r * r
let keliling = 2 * phi * r
console.log("luas : " + luas + " cm2")
console.log("keliling : " + keliling + " cm")
console.log("=====selesai=====")
console.log("======tumben pinter=====")
