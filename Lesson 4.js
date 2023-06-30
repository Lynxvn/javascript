// // // // tạo một function / hàm  để xác định tham số num là là số dương / âm / 0 

// // // // If x > 0 : in (duong)
// // // // x < 0 : in (am )
// // // // x = 0 : in ( so ko )

// // // // if (condition1) {
// // // //     // Thực hiện các hành động nếu điều kiện 1 đúng
// // // //   } else if (condition2) {
// // // //     // Thực hiện các hành động nếu điều kiện 2 đúng
// // // //   } else {
// // // //     // Thực hiện các hành động nếu cả hai điều kiện trên đều sai
// // // //   }

// // // function amduong(a) {
// // //     if (a > 0) {
// // //         return "a la dương"
// // //     }
// // //     else if (a < 0) {
// // //         return "a la am"
// // //     }
// // //     else {
// // //         return "a=0"
// // //     }
// // // }
// // // var c = amduong(-2)
// // // console.log(c)

// // // IF else thời tiết nhiệc độ  quyết định việc bạn đi hoc 
// // // nếu trời mưa -> mang ô đi hoc 
// // // ko mưa      - nhiet độ < 10 -> ở nhà ko hoc 
// // //             -  > 10 do -> đi hoc 

// // // tham số  a : nhiet do  : số 
// // // b : troi mưa  : bool 


// // function thoitiet(a, troimua) {
// //     // nếu troi mưa 
// //     if (troimua) {
// //         return "đi ngủ"
// //     } else {
// //         if (a < 10) {
// //             return "ở nhà nghỉ phẻ"
// //         }
// //         else if (a > 10) {
// //             return "đi học"
// //         }
// //         else { return "đội quần đi học" }
// //     }

// // }
// // var h = thoitiet(2, false)
// // console.log(h)

// // // a. có mưa 
// // //     return "đi ngủ"
// // // b. ko mưa 
// // //     return "ở nhà nghỉ phẻ"
// // //     return "đi học"

// // khai báo mot hàm : lấy số dư 
// // function laydu(a,b){
// //     return a%b
// // }
// //     var c=laydu(7,3)
// //     console.log(c)

// /// IF else tối giản : chỉ được trong 2 điều kiện 
// //condition ? expression1 : expression2

// var age = 15; 
// var output = (age >= 18) ? "trên 18 " : "dưới 18 "
// console.log(output)


// // // số chẵn lẽ 
// // // var number= 3
// // // var c=(number%2==0)? "chẳn": "lẻ"
// // // console.log(c)


// // // cách viết khác của Function 
// // // hello = function() {
// // //     return "Hello World!";
// // // }


// // // Arrow function 
// // const hello = () => {
// //     return "Hello World!";
// // }

// // hello()

// // Arrow => function với tham số tính phép a * b 
// const nhân = (a, b) => {
//     return a * b
// }
// c = nhân(2, 3)
// console.log(c)


// // bài tap if else / function if hungry => print out ("đi ăn tối ") else: ở nhà netflix chill 

// function goto(hungry){
//     if (hungry){
//         return "Đi ăn tối"
//     }else {
//         return "ở nhà netflix chill "
//     }
// }

// hungry = true
// c=goto(!hungry)
// console.log(c)


// // xài arrow function chuyễn độ F thành độ C  
// // công thức : độ c = (5/9) * (độ F -32)
// // biến :F
// // trả về giá trị :c

// const DoC=(f)=>{
//     return (5/9) * (f -32);
// }
// d=DoC(2)
// console.log(d)

// // // viết function nếu trên 18 tuoi thì dc bầu cữ  dưới 18 tuổi thì ko dc 
// // var x=20
// // var Vote=(x>18)?"dc bầu cữ":" ko dc "
// // console.log(Vote)

// function Vote(x){
//     if (x>18){
//         return "dc bầu"
//     }else{
//         return "ko bầu"
//     }
// } d=Vote(15)
// console.log(d)

// điểu số trong lớp sếp hạng , A,B,C,D 
// nếu diem >= 90 : A 
// điểm >= 80 : B 
// >= 70 : C 
// còn lại D 

// function Xếphạng(x){
//     if(x>=90){
//         return"A"
//     }else if (80<=x<90){
//         return "B"
//     }else if (70<=x<80) {
//         return "C"
//     }else {
//         return "D"
//     }
// }
// a=Xếphạng(85)
// console.log(a)
