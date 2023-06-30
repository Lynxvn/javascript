// //Ôn lại:
// var a="Hai con mèo"
// const b="Hai con thằng lằn"
// let c="Hai con mập"
 
// Data type:
// 1. String = "chữ"
// 2. number = 1,2,3
// 3.Boolean = True,Fail
// 4.  Object {key: value} // Doi tuong 
const person = {firstName: "Thu", lastName: "Huynh"}
// 5. Array ["Mỡ","Vớ", "Thư"]  // mảng 

// const meo = "Moo"
const meo = ["Mỡ","Vớ", "Thư"]
    // index  0     1       2

//For loop : vòng lặp 
for (let i = 0; i < meo.length; i++) //[i++] = tăng thêm 1 đơn vị
{
    console.log("i = ",i ,"giatri =",meo[i]); // in từng phần tử trong mảng meo
}
// i: là index thứ tự trong array : bắt đầu là 0 
// meo[i] là in ra giá trị trong mảng
// meo[i].length // chiều dài của mảng 
// toán tử ++ để tăng giá trị của i lên mỗi lần 


// console.log (a);

// //kiểm tra kiểu dữ liệu của một biến
// console.log(typeof a);

// let f=20.2
// var g=true
// var h = "true"
// var n = "123"
// console.log("g=true",typeof g);
// console.log("f=20.2",typeof f);
// console.log("h=true",typeof h);
// console.log("n=123", typeof n);


// --------------------------------//
// let x = 10; //number
// let y = 20; // number
// let z = x + y;

// console.log(z);


// let x = "10"; //string
// let y = "20"; //string
// let z = x + y;
// console.log(z); //=> Output = 1020 => Dấu [+] có chức năng ghép (kết hợp) ký tự

// const  x="45"; //string
// const  y=20;// Number
// const  z=x+y;
// console.log(z);// Output=4520 => [+] (bất kỳ giá trị nào) với (1 String) -> thì cho kq chức năng ghép (kết hợp) ký tự

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
//  console.log(result); //Output=3030 => Chương trình chạy từ trái sang phải.

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y * z;
// let h = y*z
// console.log(result); //Output=610 => 610=10(number)+20(number)*30(number) NOTE: Dấu[*] tự động đổi định dạng data thành number để thực hiện công thức.
// console.log(typeof h);
// --------------------------

var mang=[20,26,40]
for (let i=0; i < mang.length;i++)
{ // {} :Block : khối mã : hàm, các điều kiện, các vòng lặp, 
    console.log(i,mang[i]);
}



// --------------------------------------------------
//VD Block 
if (condition) {
    // Khối mã được thực thi nếu điều kiện là true
}else{

  }
  
  for (let i = 0; i < array.length; i++) {
    // Khối mã được thực thi mỗi lần lặp lại
  }

  function addNumbers(a, b) {
    // Khối mã bắt đầu
    let sum = a + b;
    
    // Khối mã kết thúc
  }

  console.log(sum);// báo lỗi vì nằm ngoài block