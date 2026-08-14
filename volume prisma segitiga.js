const prompt = require('prompt-sync')({ sigint: true });
console.log('==================================')
console.log("perhitungan volume prisma segitiga");
console.log('==================================');

console.log("rumus volume prisma segitiga V = (1/2 * alas * tinggi alas) * tinggi prisma")
let alas = Number(prompt("Masukkan alas : "))
let tinggi_alas = Number(prompt("Masukkan tinggi alas : "))
let tinggi_prisma = Number(prompt("Masukkan tinggi prisma : "))
let volume = (1 / 2 * alas * tinggi_alas) * tinggi_prisma
console.log(`alas : ${alas}cm
    tinggi alas : ${tinggi_alas}cm
    tinggi prisma : ${tinggi_prisma}cm
    volume : ${volume}cm3`)