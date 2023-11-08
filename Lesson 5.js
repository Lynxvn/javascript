// // switch : câu lện điều kiện để kiểm tra biến với giá trị khác nhau 

// let fruit = "apple";
// switch (fruit) {
//     case "banana":
//         console.log("Banana is good for digestion.");
//         break;
//     case "apple":
//         console.log("Apple is rich in antioxidants.");
//         break;
//     case "mango":
//         console.log("Mango is high in vitamin C.");
//         break;
//     default:
//         console.log("I don't have information about that fruit.");
// }

// // thứ ngày trong tuần 
// // 1 ---- 8
// // t2---  cn 
// // sử dụng switch case để in ra cách ngày trong tuần dựa vào số 
// let thutrongtuan = 6;
// switch (thutrongtuan) {
//     case 1:
//         console.log("Thứ 2");
//         break
//     case 2:
//         console.log("Thứ 3");
//         break
//     case 3:
//         console.log("Thứ 4");
//         break
//     case 4:
//         console.log("Thứ 5");
//         break
//     case 5:
//         console.log("Thứ 6");
//         break
//     case 6:
//         console.log("Thứ 7");
//         break
//     default :
//         console.log("Thứ cn");
// } 

function Thứmấy(x){
    switch (x) {
        case 1:
            return"Thứ 2";
        case 2:
            return"Thứ 3";
        case 3:
            return"Thứ 4";
        case 4:
            return"Thứ 5";
        case 5:
            return"Thứ 6";
        case 6:
            return"Thứ 7";
        default :
            return"CN";
    } 
    
}
c=Thứmấy()
console.log(c)

