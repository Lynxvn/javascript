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
];
const job1 = {id: 1, title: 'Làm bài tập lập trình', completed: false}
const job2 = { id: 2, title: 'Đọc sách', completed: true }
const job3 = { id: 3, title: 'Viết email', completed: false }
const job4 ={ id: 4, title: 'Học guitar', completed: true }
//Sài map
const job1a =
  { id: 1, title: 'Làm bài tập lập trình', status: job1.completed }
  const a = (b) => {
    if (b==true){
      return {id: 1, title: 'Làm bài tập lập trình', status:"Xong òi ạ"}
    }else{ return {id: 1, title: 'Làm bài tập lập trình', status:"chưa má ơi"}} }
  const job1b=a(job1.completed)
  //console.log (job1b)



  const job2a = { id: 2, title: 'Đọc sách', status: job2.completed }
  const d = (e) => {
    if (e==true){
      return {id: 2, title: 'Đọc sách', status:"Xong òi ạ"}
    }else{ return {id: 2, title: 'Đọc sách', status:"chưa má ơi"}} }
  const job2b=d(job2.completed)
  //console.log (job2b)



  const job3a = { id: 3, title: 'Viết email', status: job3.completed }
  const f = (h) => {
    if (h==true){
      return { id: 3, title: 'Viết email', status:"Xong òi ạ"}
    }else{ return { id: 3, title: 'Viết email', status:"chưa má ơi"}} }
  const job3b=f(job3.completed)
  //console.log (job3b)




  const job4a = { id: 4, title: 'Học guitar', status: job4.completed }
const e = (g) => {
    if (g==true){
      return { id: 4, title: 'Học guitar', status:"Xong òi ạ"}
    }else{ return { id: 4, title: 'Học guitar', status: "chưa má ơi"}} }
  const job4b=e(job4.completed)
  //console.log (job4b)

  jobList2 = [job1b,job2b,job3b,job4b]
const change = jobList2.map(key => ({ id: key.id , title: key.title, status: key.status}))
console.log(change)