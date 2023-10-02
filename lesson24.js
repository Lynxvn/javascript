const jsonString = {"name": "John", "age": 30, "city": "New York"};
// JSON : JavaScript Object Notation
// backend  = > JSON => front end read 





const person = { name: "Alice", age: 25, city: "London" };
//Array dùng dấu ngoặc [] 
//Oject dùng dấu ngoặc 
// {key:value,}
const hamJason = {"Nam":true, "Hao": false};
const hamJason_1 = {"Number":1, "Letter":"one"};


const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';

// Json to Object 
const ObjectString = JSON.parse(jsonString1)
console.log(ObjectString)
const khaibao = '{"Name":"Lynx", "Age":"26", "Job":"Student"}'
const doiKhaiBao = JSON.parse(khaibao)
console.log(doiKhaiBao)


// Object to JSON
const Objects = { Name: 'Lynx', Age: '26', Job: 'Student' }
const jsontext = JSON.stringify(Objects)
console.log(jsontext)



const people = [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 15},
    {"name": "Charlie", "age": 32},
    {"name": "David", "age": 17}
];

// filter adult > 18 
const adult = people.filter((person) => person.age > 18 )
console.log(adult)




////
const userProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 35,
    isActive: true,
};

// Convert the 'userProfile' object into a JSON string


const products = [
    {"id": 1, "name": "Product A", "price": 10.99},
    {"id": 2, "name": "Product B", "price": 19.99},
    {"id": 3, "name": "Product C", "price": 7.49}
];

// Add a new product with id: 4, name: "Product D", price: 14.99