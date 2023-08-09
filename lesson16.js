// // Nếu nhân viên làm việc quá 40 giờ trong một tuần, các giờ làm việc vượt quá 40 giờ sẽ được tính làm giờ làm thêm (overtime) với mức lương là 1.5 lần mức lương giờ.
const prompt = require ("prompt-sync")({sigint: true})
a = parseInt(prompt("giờ làm tuần 1:"))
 if (a <40) {
  console.log("Luongtuan1=",a*18)
 }else{
  console.log("Luongtuan1=",((a-40)*18*1.5)+(40*18))
 }
// b = parseInt(prompt("giờ làm tuần 2:"))
//  Luongtuan2= b*18
// c = parseInt(prompt("giờ làm tuần 3:"))
//  Luongtuan3= c*18
// d = parseInt(prompt("giờ làm tuần 4:"))
//  Luongtuan4= d*18
