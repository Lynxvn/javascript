// Bài tập 1: Tính bình phương của các phần tử trong một mảng

// const number=[2,3,4,5]
// const binhPhuong=number.map(number => Math.pow(number,2))
// console.log(binhPhuong)

// const number=[2,3,4,5]
// const binhPhuong=number.map(number => number*number)
// console.log(binhPhuong)

// const numbers=[2,3,4,5]
// function binhPhuong(a){
//     return a*a
// }
// const ketQua=numbers.map(binhPhuong)
// console.log(ketQua)

const numbers=[2,3,4,5]
const binhPhuong = (a) => {
        return a*a
    }
    const ketQua= numbers.map(binhPhuong)
    console.log(ketQua)
// Yêu cầu: Viết một hàm sử dụng Map để tính bình phương của từng phần tử trong một mảng và trả về mảng mới chứa kết quả.