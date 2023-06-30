// tao một mảng tên là profession  = [student, doctor, dentist, professor]

// in ra index va value 
// add them ngành realtor
// remove giá trị cuối 
// bao nhieu elements
// kiểm tra một phần tử trong array : xem có phần từ dentist ko 
var profession = ["student", "doctor", "dentist", "professor"]
// for (i = 0; i < profession.length; i++){
//  console.log("Thứ tự index=",i,"Giá trị index=",profession[i])
// }
// profession.push("realtor")
// console.log(profession)

// profession.pop()
// console.log(profession)

// console.log(profession.length)
// console.log(profession.includes("dentist")) // => output true or false

//sort : sắp xếp thứ tự tăng dần hoạc giảm dần trong array

var numbers = [0, 8, 6, 8, 4, 50, 6]

//tăng dần
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers)

//giảm dần 
numbers.sort(function(a, b) {
    return b - a; 
});
console.log(numbers)

// a-b > 0 : tăng dần  
//a-b  = 0 : 2 giá trị bang nha
//     < 0 giam dần 


