const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("MENGHITUNG TRAPESIUM");
console.log("==================");
let sisi1 = Number(prompt("Masukkan sisi 1 : "))
let sisi2 = Number(prompt("Masukkan sisi 2 : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let luas = ((sisi1 + sisi2) * tinggi) / 2
let keliling = sisi1 + sisi2 + (2 * tinggi)
console.log(`
luas : ${luas} cm2
keliling : ${keliling} cm`)
console.log("=====selesai=====")   