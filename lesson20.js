// tao user object có tên , họ,  tuổi , nghề nghiệp, country 
var personalinformation = {
    Name: "Lynx",
    Lastname: "Huynh",
    Age: "26",
    Job: "Student",
    Country: "Australia",
    fulloption : function() {
        return "My name is " + this.Name + ",I am a " + this.Job + ",from " + this.Country
    }

}
console.log (personalinformation.fulloption())
// console.log , My name is ... , I am a ... , from ..., 

// Bài tập: Làm tròn số trong mảng sử dụng map
// Bạn có một mảng chứa các số thực như sau:
// const numbers = [1.25, 2.5, 3.75, 4.1, 5.9];
// tips : search cách làm làm tròn
// search : cái cần tìm + ngôn ngữ 