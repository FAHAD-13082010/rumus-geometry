const prompt = require('prompt-sync')({ sigint: true });
console.log("~~~~~~~hitung hitungan kerucut~~~~~~~");
let jari = Number(prompt("Masukkan jari-jari : "))
let tinggi = Number(prompt("Masukkan tinggi : "))
let volume = (1/3) * 3.14 * jari * jari * tinggi
let phi = 3.14
let luas_selimut = phi * jari * Math.sqrt((jari * jari) + (tinggi * tinggi))
let luas_alas = phi * jari * jari
let luas_permukaan = luas_selimut + luas_alas
let hasil = (`luas permukaan : ${luas_permukaan} cm2
    volume : ${volume}cm3`)
    console.log(hasil)
    console.log("~~~~~~~bener terus juragan nyonteh yahhhh~~~~~~~")