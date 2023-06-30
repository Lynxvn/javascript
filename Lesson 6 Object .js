// Đối tượng trong JavaScript OBJECT : information
// sử dụng nhiều trong quản lí nhân viên 

var information = {
    // key : value 
    firstName: "Thu",
    lastName: "Huynh" ,
    salary: 1000,
    school: "ABC", // print => cách 1: console.log(information.school), cách 2: console.log(information["school"])
    fullName  : function() {
        return this.firstName + " " + this.lastName
    },
    hobby : {
        activity: 'painting' ,
        when:  '6pm'    , 
        where: "123 cdf street"
    }
}
// console.log(information.hobby.where)
console.log(information.hobby["where"])

// var address = {
//     street: "Phan Văn Trị",
//     city: "Hồ Chí Minh",
//     ward: "Phường 2",
//     district: "Quận 5",
//     diachi: function () {
//         return this.city +" "+ this.district
//     }
// }

// sử dụng formular cho Object 
// var bonus = information.salary * 0.1
// console.log("Bonus : " + bonus)

// thêm cặp key, value mới : // key : age , value : 20 
// information.age = 20;
// console.log(information)


// thêm occupation : cho information
// information.occupation= "Student"

// thêm key joined : 2014
// information.joined= 2014

// tính year of service from date joined 
// var bonus=2023-information.joined
// console.log("year of service :" + bonus)

// console.log("marriagestatus" in information)  // output = "False" tai ko xuất hiện trong info

// xuất hết Key của in for
// cách 1:
// for (var key in information){
//  console.log(key)
// }
// cách 2:
// var b = Object.keys(information)
// console.log(b)

// cách viết 2 để xuất value của school
// console.log(information["school"])

// console.log(address.diachi()) // output : 
// console.log(information.fullName()) 
