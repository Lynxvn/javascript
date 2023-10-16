// Tính toán giá sản phẩm: Viết một hàm JavaScript nhận vào tên sản phẩm và sử dụng câu lệnh 
// switch để tính toán và trả về giá sản phẩm dựa vào tên sản phẩm.
// Bạn có thể dùng một số ví dụ sản phẩm như "áo", "giày", "balo", và thiết lập giá cho mỗi sản phẩm.
// price: 1000 => áo 
// 2000 => giày 
// 3900: balo 
// 2332: high Heel
// 4324: nón 
// 3214: vớ


// product = { "áo": 1000, "balo": 3900, "high heel": 2332, "nón": 4324, "vớ": 3214 }

// function price(x) {
//     switch (x) {
//      case "áo":
//             return 1000; 

//      case "balo":
//             return 3900; 

//      case "high heel":
//             return 2332; 

//      case "nón":
//             return 4324; 

//      case "vớ":
//             return 3214;

// }
// }
// const a = price ("áo")
// console.log(a)


// Xếp hạng sao cho điểm số: Viết một hàm JavaScript nhận một số nguyên (từ 1 đến 5) 
// đại diện cho số sao xếp hạng và 
// in ra số lượng sao dưới dạng dấu sao (*).

// const stars = {1:"*" , 2: "* *", 3: "* * *", 4: "* * * *", 5: "* * * * *"}
// function giveStart (x) {
//     switch (x) {
//         case 1 : 
//         return "*" ;
//         case 2 : 
//         return "* *" ;
//         case 3 : 
//         return "* * *" ;        
//         case 4 : 
//         return "* * * *" ;
//         case 5 : 
//         return "* * * * *" ;
//     }
// }
// const b = giveStart(1)
// console.log(b)

const prompt = require("prompt-sync")({ sigint: true })
function giveStart() {
    a = parseInt(prompt("Chấm điểm: "));
    switch (a) {
        case 1:
            return "*";
        case 2:
            return "* *";
        case 3:
            return "* * *";
        case 4:
            return "* * * *";
        case 5:
            return "* * * * *";
        default:
            return "éo cóa cửa ạ"
    }
}

c = giveStart(1)
console.log(c)
