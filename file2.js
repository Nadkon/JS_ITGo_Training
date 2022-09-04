
const maxNum = 5;
const minNum = 0;
let sum = 0;

for (i = minNum; i<=maxNum; i += 1) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
    
// }
// console.log("Total: ", sum);


// Version 2

if (i % 2 !==0){
    continue;
}
console.log(i);
sum +=i;
}
console.log("Total 2: ", sum);