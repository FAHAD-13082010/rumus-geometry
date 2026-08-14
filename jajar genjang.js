const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("KALKULATOR JAJAR GENJANG");
console.log("==================");
let alas = Number(prompt("Masukkan alas : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let luas = alas * tinggi
let keliling = 2 * (alas + tinggi)
console.log("alas : " + alas + " cm" + " tinggi : " + tinggi + " cm" + " luas : " + luas + " cm2")
console.log("keliling : " + keliling + " cm")
console.log("=====selesai=====")    