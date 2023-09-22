const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Eve", age: 22 }
  ];

// Sử dụng filter() để lọc người dùng có tuổi dưới 30
// ---------------------------------------
//Sử dụng map()
//Với điều kiện nếu người dùng có tuổi dưới 30 thì status là "Active", ngược lại là "Inactive".

// const under30 = users.filter(underbamuoi => underbamuoi.age < 30 )
// console.log(under30)

// const under30 = users.map(underbamuoi1 =>{
    
// return {
//     id: underbamuoi1.id,
//     name: underbamuoi1.name,
//     age: underbamuoi1.age,
//     status: underbamuoi1.age < 30
// }
// }
//     )
// const under = under30.map(underbamuoi => 
//    {  importStatus = underbamuoi.status ? "Active":"Inactive"
//     return {
//       id: underbamuoi.id,
//       name: underbamuoi.name,
//       age: underbamuoi.age,
//       status: importStatus, 
//     }
//    }
//     )
// console.log(under)

const under30 = users.map(underbamuoi1 => {

    return {
      id: underbamuoi1.id,
      name: underbamuoi1.name,
      age: underbamuoi1.age,
      status: underbamuoi1.age < 30 ? "Active" : "Inactive"
    }
  }
  )
  console.log(under30)