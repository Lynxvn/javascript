// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
var day = new Date()
var hours = day.getHours()
const a = (b) => {
    if (b < 18) {
        return "Good day"
    } else {
        return "Good evening"
    }
}

var c = a(hours)
console.log(c)
console.log(hours)

