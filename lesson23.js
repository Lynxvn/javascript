// const travelDestinations = [
//     { name: 'Paris', country: 'France', rating: 4.5 }, EU
//     { name: 'Tokyo', country: 'Japan', rating: 4.8 }, ASIA
//     { name: 'New York', country: 'USA', rating: 4.3 },N USA
//     { name: 'Rome', country: 'Italy', rating: 4.6 },EU
//     { name: 'Sydney', country: 'Australia', rating: 4.7 } ____
//   ];


// Sử dụng filter() để tạo một danh sách mới chỉ bao gồm các địa điểm có độ rating cao hơn 4.3.

// Sử dụng map() để biến đổi danh sách các địa điểm du lịch nếu rating > 4.6 : recommended = "please visit"


// return Continents : North America, Asia, Eroupe based on the country

// const destinations = travelDestinations.filter(destination => destination.rating > 4.3 )
// console.log (destinations)
// const destinations1s = travelDestinations.map((destination1) => {
//   const status= destination1.rating > 4.6? "please visit":"  "
//   return {
//     name:destination1.name,country:destination1.country,rating: destination1.rating,recommended: status
//   }
// } )
// console.log(destinations1s)

// return Continents : North America, Asia, Eroupe based on the country

travelDestinations = ["Paris", "Japan", "USA", "Italy", "Australia"]
function Change(x) {
    switch (x) {
        case "Paris":
            return ("EU");
            break;
        case "Japan":
            return ("ASIA");
            break;
        case "USA":
            return ("Nor America");
            break;
        case "Italy":
            return ("EU");
            break;
        default:
            return ("Úc");
    }
}
const destinations1 = travelDestinations.map((Continent) => Change(Continent))
console.log(destinations1)

