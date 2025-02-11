/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let i = 1;
let x = 5

while (i <= 10) {
    console.log(`${x} x ${i} = ${x * i}`);
    i++;

}

const myObject = {
    a: 1,
    b: 2,
    c: 3
   };
   
   for (let prop in myObject) {
    console.log(myObject[prop]);
   }