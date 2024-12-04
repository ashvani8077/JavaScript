//Primitive 7 types

//string, number, boolean, null, undefined, symbol, bigint

const score=100;
const scoreValue=299.3;
const isLogged=true;
const temp=null;
let email=undefined;
let symbol=Symbol(123);
const anotherId=Symbol(123);
console.log(symbol===anotherId)




//Non primitive
//arrays, objects, functions


const heros=["Shaktiman","Nagraj","doga"];
let myObj={
    name:"Hitesh",
    age:22
}

const myFunction=function(){
    console.log("Hello world");
    console.log(typeof(NaN))
}
console.log(myFunction)