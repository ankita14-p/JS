// Problem 1
let teaflavours=["green tea","black tea","oolong tea"]
let firsttea=teaflavours[0]
console.log(teaflavours);
console.log(firsttea);

// Problem 2
let cities=["London","Tokyo","Paris","New York"]
let favouritecity=cities[2]
console.log(favouritecity);

//Problem 3
teaflavours[1]="jasmine tea"
console.log(teaflavours);

// Problem 4
cities.push("Berlin")
console.log(cities);

// Problem 5
let lastOrder=teaflavours.pop()
console.log(lastOrder);
teaflavours.push("masala tea")
console.log(teaflavours);

// Problem 6
let softcopyteas=teaflavours
teaflavours[0]="elaichi tea"
console.log(teaflavours);
console.log(softcopyteas); //Changes made in main array is reflected

// Problem 7
// let hardcopycities=[...cities]
let hardcopycities=cities.slice()
cities[0]="Greece"
console.log(cities);
console.log(hardcopycities); //Changes made in main array is not reflected






