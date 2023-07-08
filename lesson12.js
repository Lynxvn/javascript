// Git hub command 
// viết chương trình, calculates the part-time income for a student:
// hourly rate 
// hours work per week 
// if holiday  then hour rate * 1.5 (multiply)
// Calculate part-time income per week , per month 
var hourlyrate = 17
var holiday = hourlyrate * 1.5
const salaryinweekdays = (hours) => {
    return hours * hourlyrate;
}
const salaryinweekends = (hours1) => {
    return hours1 * holiday;
}
const salaryperweek = (hours, hours1) => {
    return salaryinweekdays(hours) + salaryinweekends(hours1);
}
// var f= salaryperweek (20,8)
// console.log(f)
// var salaryperweek1 = salaryperweek(2,3)
// console.log(salaryperweek1)

const salarypermonth = (hours, hours1) => {
    return salaryperweek(hours, hours1) * 4;
}
// var c = salarypermonth(20, 8)
// console.log(c)

const roombill = (roombillperweek) => {
    return roombillperweek * 4;
}
// var d = roombill(250)
// console.log(d)

const money = (hours,hours1,roombillperweek)=>{
    return salarypermonth(hours,hours1)-roombill(roombillperweek);
}
var b=money(20,8,250)
console.log(b)