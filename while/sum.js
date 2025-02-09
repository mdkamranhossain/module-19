/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */


// Subtask-1:

let total = 0;
let odds = 81;
while (odds <= 131) {
    total += odds;
    odds += 2;
    
}
console.log(total);

// Subtask-2:

let sum = 0;
let i = 206;
while (i < 311) {
    sum += i;
    i += 2;
}
console.log(sum);

