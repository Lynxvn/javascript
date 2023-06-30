// tao mot const có các thành phố của Australia
//in ra index ":" "tên thành phố " sử dụng for loop 
// var australia=["Sydney"," Melbourne","Brisbane","Perth","Adelaide"]
// for (let i=0;i<australia.length;i++)
// {
//     console.log(i+":"+australia[i])
// }
//tìm data type  của các biến
// var number1 = 20
// var number2 = "40"
// var yes = true
// var no = "type"
// console.log(typeof number1);
// console.log(typeof number2);
// console.log(typeof yes);
// console.log(typeof no);

// --------------PUSH - POP- UNSHIFT - SHIFT - CONCAT- --------------

var cities=["Sydney"," Melbourne","Brisbane","Perth","Adelaide"]

// push: add thêm element/phần tử
citiesasutr = cities.push("ho chi minh")
console.log("push:",citiesasutr);


// pop: remove last element ( giá trị cuối) in the array/mảng:
cities.pop();
console.log("pop:",cities);

//shift: remove phần tử đầu tiên 
cities.shift()
console.log("shift:",cities)


// unshift add phần tử vào array at beginning 
cities.unshift("Victoria")
console.log("unshift:",cities)

const vietnam=["Danang","SG","DL","Hue"]
// vietnam.push("Melbourne")
// console.log(vietnam); //=>[ 'Danang', 'SG', 'DL', 'Hue', 'Melbourne' ]
// vietnam.shift()
// console.log(vietnam);//=>[ 'SG', 'DL', 'Hue', 'Melbourne' ]
// vietnam.pop()
// console.log(vietnam);//=>[ 'SG', 'DL', 'Hue' ]



//const fruits = ["Banana", "Orange", "Apple"]; //remove last item 
//fruits.pop()
//console.log(fruits);
// fruits.shift()
// console.log(fruits);

// mảng 1. concat(mảng 2)kết hơp 2 mảng thành một mảng mới : merge 2 array 
const food = ["pho","com tam"]
const drink = ["tra sua", "ca phe"]
//const meals = food + drink => goi la A => output = pho,com tamtra sua,ca phe
const meals = food.concat(drink)//=> goi la B // concatenate => output = [ 'pho', 'com tam', 'tra sua', 'ca phe' ]
// A khac B 
//console.log(meals);



// tạo 2 mảng subject , career ket hop lại 
const subject=["math","english","art"]
                // 0     1         2 
const career=["teacher","police","waiter"]
const a=subject.concat(career);
console.log(a);


// in gia tri đầu tiên của array subject
console.log(subject[0]);

// --------------PUSH - POP- UNSHIFT - SHIFT - CONCAT- --------------





