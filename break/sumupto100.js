/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let i = 1;
while (i < 100){
    i++;
    console.log(i);
    if (i === 100){
        break;
    }
}