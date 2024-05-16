// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let item of restaurants) {
  newRestaurants.push((item = `Restaurant Name: ${item}`));
}

console.log(newRestaurants);
