const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LAYANG-LAYANG");
console.log("==================");
let diagonal1 = Number(prompt("Masukkan diagonal 1 : "))
let diagonal2 = Number(prompt("Masukkan diagonal 2 : "))
let luas = (diagonal1 * diagonal2) / 2
console.log("diagonal 1 : " + diagonal1 + " cm" + " diagonal 2 : " + diagonal2 + " cm" + " luas : " + luas + " cm2")
console.log("=====selesai=====")