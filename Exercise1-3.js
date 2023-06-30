// // khai báo biến  a , b, c 
// // 1. in ra giá trị a ,b ,c 
// // 2. in ra data type của mổi biến 
// // 3. làm phép cộng cho 2 giá trị số bất kì 

// // var a="Mật";
// // let b=123;
// // const c="15"
// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);

// // var a=1/4;
// // let b=123;
// // console.log(a/b);
// // console.log(a+b);

// // số dư : remainder % 
// // x = 5 
// // y = 2
// // console.log(x%y); // output=1
// // x = 6
// // console.log(x)

// // function example() {
// //     var x = 10;
// //     let y = 20;
// //     const z = 6;
// //     if (true) {
// //       var x = 30; // Biến x ở đây là biến x trong phạm vi HÀM : more friendly
// //       let y = 40; // Biến y ở đây là biến y trong phạm vi KHỐI if : no friendly
// //       const z= 1 // ( nó tự một biến mới ) không lien quang dòng 28
// //       console.log(x); // Output: 30 
// //       console.log(y); // Output: 40
// //       console.log(z);
// //     }
// //     console.log(x); // Output: 30
// //     console.log(y); // Output: 20 (biến y trong phạm vi hàm)
// //     console.log(z);
// //   }

// //   example();


//   function cong(a,b)  // tên hàm : không được có space 
//   {
//     return a + b // return: kết quả của hàm
//   }


//   let sum = cong(2,5)
//   let sum2 = cong(5,10)
//   console.log(sum)
//   console.log(sum2)


// // viết một hàm phép lấy số dư khi chia cho 3 : %
// var a = 10;
// var b= 3;
// console.log(a%b);

// function layDu(a,b)
//   { 
//     return a%b
//   }
// var c= layDu(10,3);
// var d= layDu(12,2);
// console.log(c);
// console.log(d);

//salary : luong cơ bản + bonus + tiền thưởng tháng 
// nhân viên chính thức 
// nhân viên hop đồng 
// permanentEmployee
// 

// // tạo một hàm tính lương 
// // var t=permanentEmployee
// function salary(a,b,c,t){
//     var total = a + b +c 

//     // nếu nhân viên chính thức : sẽ cộng thêm 20
//     if (t){  // if permanentEmployee = true
//         total += 20
//     }
//     return total
// }
// // t = true;
// Totalsalary = salary(10,30,40,false)
// console.log(Totalsalary)



//salary : luong cơ bản + bonus + tiền thưởng tháng 
// nhân viên chính thức 
// nhân viên hop đồng 
// permanentEmployee
// 

// tạo một hàm tính lương 
// var t=permanentEmployee
function salary(a, b, c, f) {
    y = a + b + c

    if (f) {  
        y += 20
    }
    return y
}


var h = salary(1, 2, 3, 26)
console.log(h)




