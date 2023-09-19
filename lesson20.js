// // tao user object có tên , họ,  tuổi , nghề nghiệp, country 
// var personalinformation = {
//     Name: "Lynx",
//     Lastname: "Huynh",
//     Age: "26",
//     Job: "Student",
//     Country: "Australia",
//     fulloption : function() {
//         return "My name is " + this.Name + ",I am a " + this.Job + ",from " + this.Country
//     }

// }
// console.log (personalinformation.fulloption())
// console.log , My name is ... , I am a ... , from ..., 

// Bài tập: Làm tròn số trong mảng sử dụng map
// Bạn có một mảng chứa các số thực như sau:
// const numbers = [1.25, 2.5, 3.75, 4.1, 5.9];
// tips : search cách làm làm tròn
// search : cái cần tìm + ngôn ngữ 
// const numbers = [1.25, 2.5, 3.75, 4.1, 5.9]
// const lamtron = numbers.map(number => number.toFixed(0))
// console.log(lamtron)


// const jobList = [
//     { id: 1, title: 'Làm bài tập lập trình', completed: false },
//     { id: 2, title: 'Đọc sách', completed: true },
//     { id: 3, title: 'Viết email', completed: false },
//     { id: 4, title: 'Học guitar', completed: true },
//   ];

//   Sử dụng hàm map, hãy biến đổi mảng jobList thành một mảng mới có cấu trúc như sau: 

//   [
//     { id: 1, title: 'Làm bài tập lập trình', id: 1, title: 'Làm bài tập lập trình', status: job1.completed' },
//     { id: 2, title: 'Đọc sách', status: 'Hoàn thành' },
//     { id: 3, title: 'Viết email', status: 'Chưa hoàn thành' },
//     { id: 4, title: 'Học guitar', status: 'Hoàn thành' },
//   ]

const jobList = [
  { id: 1, title: 'Làm bài tập lập trình', completed: false },
  { id: 2, title: 'Đọc sách', completed: true },
  { id: 3, title: 'Viết email', completed: false },
  { id: 4, title: 'Học guitar', completed: true },
]
const job1 = { id: 1, title: 'Làm bài tập lập trình', completed: false }
const job2 = { id: 2, title: 'Đọc sách', completed: true }
const job3 = { id: 3, title: 'Viết email', completed: false }
const job4 = { id: 4, title: 'Học guitar', completed: true }

const newjob1 = { id: 1, title: 'Làm bài tập lập trình', status: job1.completed }
const newjob2 = { id: 2, title: 'Đọc sách', status: job2.completed }
const newjob3 = { id: 3, title: 'Viết email', status: job3.completed }
const newjob4 = { id: 4, title: 'Học guitar', status: job4.completed }

Sài map

const jobList2 = [newjob1, newjob2, newjob3, newjob4]

//const jobList2 = [newjob1, newjob2, newjob3, newjob4]