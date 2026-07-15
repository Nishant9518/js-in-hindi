/*let n = 6 ;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += (i+1) ;
}
console.log("the sum of natural number is" + sum); */
/*let obj = {
    harry:90,
    nishant:80,
    laksita:70,
    anshul:60,
}
for(let a of obj){
    console.log(  b);
} */
/*
let a = 5
let i = 0;
while (i < a) {
    console.log("*");
    i++;
} 
let val = prompt("enter the value");
for (let i = 0; i < val; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
} 
for(let i = 1; i<=101; i++) {
    if(i%7==0) {
        break;
    }   
    console.log(i);
}
for(let i = 1; i<=101; i++) {
    if(i%3==0) {
        continue;
    }   
    console.log(i);
} */
let count = 0;
for(let i = 1; i<=100; i++) {
    if(i%2===1) {
        count++;
        console.log(i);
    }
    if(count===5) {
        break;
    }
}