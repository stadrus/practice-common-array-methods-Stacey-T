let customOrders = [
    ["Milk", "Tea", "Water"],
    ["Croissant", "Muffin", "Bagle"],
];
console.log(customOrders);
console.log(customOrders[0].length);
console.log(customOrders[1].length);

let drinks = [customOrders[0][0],customOrders[0][1],customOrders[0][2]];
let pastry = [customOrders[1][0], customOrders[1][1],customOrders[1][2]];

console.log(`Order one\nDrink order: ${drinks[0]}\nPastry: ${pastry[2]}`);

console.log(`Order Two\nDrink order: ${drinks[2]}\nPastry: ${pastry[1]}`);

console.log(`Order Three\nDrink order: ${drinks[1]}\nPastry: ${pastry[0]}`);

for (let i = 0; i < drinks.length; i++) {
    for (let j = 0; j < drinks[i].length; j++) {
    console.log(drinks[i][j]);
     }
    }
customOrders[0].push("“flat white");
console.log(customOrders);

console.log(customOrders[0].length);