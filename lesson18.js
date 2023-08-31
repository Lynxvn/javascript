
// .map

// const array = [];
// const newArray = array.map((currentValue, index) => {
// });


// cities = ["HCM", "MEl", "DN"]
// const vncity = 'HCM'
// console.log(vncity.toLowerCase())



// const lowerCity = cities.map(city => city.toLowerCase())

// const lowerCityName = cities.map(city => {
//   return city.toLowerCase()
// })
// console.log(lowerCityName)

// console.log(lowerCity)
// console.log(cities.toLowerCase())

const cuisines = ["vietnamese cuisine", "japanese cuisine", "melbuon cuisine"]
// const Uppercase = cuisines.map(cuisine => cuisine.toUpperCase())
// console.log(Uppercase)


// const manipulatedCuisines = cuisines.map((cuisine, index) => {
//     const modifiedCuisine = cuisine.toUpperCase() + ` ${index + 1}`;
//     return modifiedCuisine;
//   });
//   console.log(manipulatedCuisines)



  // const withArray = cuisines.map((cuisine, index, array) => {
  //   const modifiedCuisine = `${cuisine} (${index + 1}/${array.length})`;
  //   return modifiedCuisine;
  // });

// console.log(withArray)

const dishes = ["Pho", "Sushi", "Taco", "Curry", "Pad Thai"];
const uppercases = dishes.map((dish, index, array) => {
  const modifieddishes =`${dish.toUpperCase()} ${index+1}/${array.length}\n`;
  return modifieddishes;
})
console.log(uppercases.join(""));





// Current value and index tuong tu 
// for city in cities:

// for i in range(len(cities)):


// console.log(city)
// imposter syndrome
// Data manipulation 

// information = {
//   surName: "Huynh",
//   midleName: "Anh",
//   firstName: "Thư"
// }

// console.log(information.surName)