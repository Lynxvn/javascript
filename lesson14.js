const prompt = require ("prompt-sync")({sigint: true})


a = parseInt(prompt("Nhập vào số thứ 1:")) //=> mac định là string 
b = parseInt(prompt("Nhập vào số thứ 2:"))


tong = a +b 
console.log(tong)

