
const totalSpent = 0;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;

console.log(`Your discount is ${discount}`);
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;

} else if (totalSpent >= 5000) {
    discount = 0.1;
} else {
    console.log("You are not a partner");
}

console.log(`Your discount is ${discount * 100}%`);

console.log (`The sum of your order is ${payment - payment* discount}`)