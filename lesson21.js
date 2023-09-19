working_hours = [5, 40, 6, 20, 16]

// calculate salary for this working hour with hour rate = 15
// const salary = working_hours.map(working_hour => working_hour*15)
// console.log(salary)

// filter salary with  hours greater than or equal 16 

// const salary = working_hours.filter(working_hour => working_hour >=16)
// console.log(salary)

// const salary = working_hours.map(working_hour => working_hour >=16)
// console.log(salary)



//Hàm Filter tạo nên 1 mãng mới vs value dựa trên điều kiện đưa ra và 
//Hàm Map trả về true/false dựa trên điều kiện đưa ra.


// const employees = [
//     { name: 'Alice', hourlyRate: 15, hoursWorked: 40 },
//     { name: 'Bob', hourlyRate: 20, hoursWorked: 35 },
//     { name: 'Charlie', hourlyRate: 18, hoursWorked: 42 },
//   ];

// //   sử dụng hàm map để tính salary return name , salary 

// const salary = employees.map( employee => employee.hoursWorked*employee.hourlyRate)
// console.log(salary)

// const employees = [
//     { name: 'Alice', hourlyRate: 15, hoursWorked: 40 },
//     { name: 'Bob', hourlyRate: 20, hoursWorked: 35 },
//     { name: 'Charlie', hourlyRate: 18, hoursWorked: 42 },
//   ];

// //   sử dụng hàm map để tính salary return name , salary 

// const salary = employees.map( employee => 
//     console.log(employee.hoursWorked)
// )

// console.log(element)

const employees = [
    { name: 'Alice', hourlyRate: 15, hoursWorked: 40 },
    { name: 'Bob', hourlyRate: 20, hoursWorked: 35 },
    { name: 'Charlie', hourlyRate: 18, hoursWorked: 42 },
];

//   sử dụng hàm map để tính salary return {name:  , salary:  }

// const salary = employees.map(function (employee) {
//     return { name: employee.name, salary: employee.hoursWorked * employee.hourlyRate }
// })
// console.log(salary)

const salary = employees.map(employee => (
    {name:  employee.name , salary: employee.hoursWorked * employee.hourlyRate })
) 

// ES6
// const newArray = array.map(item => transformedItem);
// const squaredNumbers = numbers.map(function (number) {
//     return number * number;
//   });

console.log(salary)