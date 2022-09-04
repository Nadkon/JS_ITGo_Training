
let balance = 10000;
const payment = 2000;

console.log(`Обащая сумма заказа ${payment}. We are going to check the rest of money on account.`);

if (payment <= balance){

    balance -= payment;
    console.log('Everything is ok. You have enough money on your account.')
console.log(`There are ${balance} on your account.`)

}else {

    console.log("You do not have enough money on your acccount.")

}
console.log("The transaction has been completed.");
