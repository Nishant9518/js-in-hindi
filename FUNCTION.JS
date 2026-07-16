// What is function and what is the use of function in JavaScript?
// A function is a block of code designed to perform a particular task. In JavaScript, functions are used to encapsulate code for reuse, improve readability, and manage complexity. They can take inputs (parameters), perform operations, and return outputs (values). Functions help in organizing code into manageable sections, making it easier to maintain and debug.
// agar hum code ko repeat na karna chahte to hum function ka use karte hai. Function ke andar hum code ko define karte hai aur jab bhi hume us code ki zarurat hoti hai to hum function ko call karte hai. Isse humara code modular aur reusable ban jata hai.
let nishant = function(){
    console.log("hi lakshita ")
}
nishant()
// fat arrow function - arrow function function ka short form hai. Isme hum function keyword ka use nahi karte hai. Arrow function me hum function ke parameters ko parentheses me likhte hai aur function ke body ko curly braces me likhte hai. Agar function ke body me sirf ek hi statement hai to hum curly braces ko hata sakte hai aur us statement ko directly return kar sakte hai.
let fnc = () => {
    console.log("hi nishant")
}
fnc()