const minSalary = 500;
const maxSalary = 5000;
const employees = 10;
let totalSalary = 0;

for (let i = 1; i <= employees; i+=1) {
    const salary = Math.round (
        Math.random() * (maxSalary - minSalary) +minSalary
    );
    console.log(`Salary on this employee is ${salary}`);
    totalSalary += salary
}
console.log(`Total salary is ${totalSalary}`);
