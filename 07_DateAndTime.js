let myDate= new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// const myTimes=Date.now();
// console.log(myTimes.getTime());

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());

myDate.toLocaleString("default",{
    weekday:"long",
    timeZone:""
});