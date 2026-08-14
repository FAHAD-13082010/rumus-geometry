const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("penghitungan kubus")
console.log("==================");
let sisi = Number(prompt("masukkan sisi : "))
let luas = 6 * (sisi * sisi)
let volume = sisi *sisi * sisi
let luasPermukaan = 6 * (sisi * sisi)
let kelilingKubus = 12 * sisi
console.log(`
   sisi : ${sisi} cm
   luas : ${luas} cm2
   volume : ${volume} cm3
   luas permukaan : ${luasPermukaan} cm2
   keliling kubus : ${kelilingKubus} cm`)
console.log("=====nyontek temen gak?=====")