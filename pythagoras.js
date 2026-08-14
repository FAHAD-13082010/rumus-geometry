const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("perhitunngan pythagoras");
console.log('==================')
let sisi_a = Number(prompt("Masukkan sisi a : "))
let sisi_b = Number(prompt("Masukkan sisi b : "))
let sisi_c = Math.sqrt(sisi_a * sisi_a + sisi_b * sisi_b)
let hasil = (`sisi c : ${sisi_c}`)
console.log(hasil)