//Create 
// Hãy tạo một đối tượng đại diện cho một sản phẩm trong cửa hàng với các thuộc tính như 
// tên, giá, mã sản phẩm và : name , price , productCode, discount 
// một phương thức để giảm giá sản phẩm theo một tỷ lệ cho trước.

// var market = {
//     name: "Hú tiếu",
//     price: 100,
//     productcode: 192483,
//     price_after_discount: function(a) {
//         // return this.price-this.price * a/100
//         this.price = this.price-this.price * a/100
//     }
// }
// market.price_adiscountfter_discount(3)
// console.log(market.price)
// -------------------------------------------------------------------------

//Bài 2: Hãy tạo một đối tượng đại diện cho hình chữ nhật với các thuộc tính là chiều dài và chiều rộng.
// Thêm một phương thức (function) vào đối tượng để tính diện tích của hình chữ nhật đó.
// Bài 1:
// var chuNhat = {
//     dai: 2,
//     rong: 3,
//     dienTich:function() {
//         return this.dai*this.rong
//     }
// }
// console.log(chuNhat.dienTich())
//=> Note: nhớ dấu "," và các ngoặc "()"

// Bài 1: Hãy tạo một đối tượng đại diện cho một đơn hàng với các thuộc tính như 
// mã đơn hàng, sản phẩm, số lượng và phương thức để tính tổng tiền của đơn hàng đó.
// -----------------------------------------------------------------------------

//Bài 1:订单 Dìngdān
// var 订单={
//     code:191997,
//     type:"pants",
//     quantity: 2,
//     total: function(price){
//         return this.quantity*price //sai khi dùng "this.quantity*this.price"
//     }
//     }
// console.log(订单.total(2))
//=> chú ý trong return ko dùng this cho ẩn số



// Bài 2 tao vòng lập in ra số chẳn <=20
// -------------------------------------------------------//
//cách 1

// for(i=0;i<21;i+=2){
//     console.log(i)
// }
//cách 2
// var số=[]
// for (i=0;i<=18;i){    
//     số.push(i+=2)
// }
// console.log(số)



// ----------------------------------
// Bài 3: Mot array có các món ăn gà, cá , bò, cá hồi , 
// - thêm phần tử (element) thịt heo 
// - bỏ element cuối 
// - in ra cặp index và value 
// - cho thêm một array về trái cây có 3 phần từ  . Add array này vào array trên 

var dishes = ["gà", "cá", "bò", "cá hồi"]
// dishes1 = dishes.push("thịt heo")
// console.log(dishes1);

// dishes.pop()
// console.log(dishes);

// for(let i=0;i < dishes.length; i++){
//     console.log (i,dishes[i])
// }

var fruit = ["xoài", "ổi", "mận"]

const meal = fruit.concat(dishes)
console.log(meal)