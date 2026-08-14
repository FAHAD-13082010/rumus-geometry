const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PERSEGI PANJANG");
console.log("==================");
let p = Number(prompt("panjang : "))
let l = Number(prompt("Lebar :"))
let luas = p * l
let keliling = 2 * (p + l)
console.log(`
    luas :${luas}cm2
    keliling :${keliling}cm`)
    console.log("=====selesai=====")
    console.log("======nyontek AI gakkkk?🤣=====")