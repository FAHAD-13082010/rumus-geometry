const prompt = require('prompt-sync')({ sigint: true });
console.log('==================')
console.log("KALKULATOR SEGITIGA");
let sisi1 = Number(prompt("Masukkan sisi 1 : "))
let sisi2 = Number(prompt("Masukkan sisi 2 : "))
let sisi3 = Number(prompt("Masukkan sisi 3 : "))
let luas = (sisi1 + sisi2 + sisi3) / 2
let keliling = sisi1 + sisi2 + sisi3
console.log(`
    luas :${luas}cm2
    keliling :${keliling}cm`)
console.log("=====selesai=====")
console.log("======nyontek AI gakkkk?🤣=====")
