// //  tạo hàm Hàm kiểm tra số chẵn lẻ
// // const number = (a) => {
// //     if (a % 2 == 0) {
// //         return "số chẳn"
// //     } else {
// //         return "số lẻ"
// //     }
// // }
// // var c = number(12)
// // console.log(c)

// // const number = (a) => {
// //     var c=(a%2==0) ?"số chẳn":"số lẻ"
// //     return c
// // }
// // var d = number(12)
// // console.log(d)

// // 

// // Nếu score lớn hơn hoặc bằng 8.0 và finance lớn hơn hoặc bằng 100000, hàm sẽ in ra "Bạn đủ điều kiện du học".
// // Nếu score lớn hơn hoặc bằng 8.0 nhưng finance nhỏ hơn 100000, hàm sẽ in ra "Bạn không đủ tài chính để du học".
// // Nếu score nhỏ hơn 8.0 nhưng finance lớn hơn hoặc bằng 100000, hàm sẽ in ra "Bạn không đủ điểm số để du học".
// // Trong trường hợp còn lại, tức là score nhỏ hơn 8.0 và finance nhỏ hơn 100000, hàm sẽ in ra "Bạn không đủ điểm số và tài chính để du học".

// // const condition=(score,finance)=>{
// //     if (score >= 8 && finance >= 100000) {
// //         return "Đủ điều kiện du học"
// //     } else if (score >= 8 && finance < 100000) {
// //         return "Bạn không đủ tài chính để du học"
// //     } else if (score < 8 && finance >= 100000) {
// //         return "Bạn không đủ điểm để du học"
// //     } else {
// //         return "Bạn không đủ điểm số và tài chính để du học"
// //     }
// // }
// // var f = condition(7.5,80000)
// // console.log(f)

// // 7.5, 150000

// // test cases 
// // 7.5 80000

// //  1 23 % A 
// // // ko có pass word 

// // // thieu dấu 

// // // 

// // test = [1, 3 ,4 ,5 ,6 , "test"]

// //in ra cái phần tử element và index 
// // const test=[1, 3 ,4 ,5 ,6 , "test"]
// // for (let i=0;i<test.length;i++){
// // console.log("i=",i,"Gia tri=",test[i]);
// // }

// //reverse engineer 


// // cho mot mảng array in ra cac so chia het cho 3 
// const array = [3, 4, 5, 6, 7, 9, 27]
// function a(test) {
//     result = []
//     for (let i = 0; i < test.length; i++){
//         if (test[i] % 3 == 0) {
//             result.push(test[i])
//         }
//     }
//     return result
// }
// var g = a(array)
// console.log(g)

// // return tra ve 1 gia tri , 
// Set()

// Hôm nay làm bài được 8 điểm 