                    // //Strict Mode
// 'use strict';
// let license=false;
// let test=true;
// if(test){
//     license=true;
// }
// if(license){
//     console.log("I can drive")
// }


                    // //Function
// function logger(){
//     console.log("Jonas");
// }
// logger();
// function fruit(apples, oranges){
//     console.log(apples, oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// let ans=fruit(5,0);
// console.log(ans);



                    // //Function Declaration VS Expressions
                    // //Declaration
// function Age(birth){
//     return 2024-birth;
// }
// console.log(Age(2002));

                    // //Expression
// const Age2=function(birth){
//     return 2024-birth;
// }
// console.log(Age2(2000));



                    // //Arrow Function
// const Age3=birth=>2037-birth;
// const ans=Age3(2000);
// console.log(ans);

// const retirement=birthY=>{
//     const age=2024-birthY;
//     const retire=65-age;
//     return retire;
// }
// const result=retirement(2000);
// console.log(result);
// console.log(retirement(1995))


                    // //Functions calling other function

// function cutFruit(fruit){
//     return fruit*4;
// }

// function fruit(apples, oranges){
//     const applePiecs=cutFruit(apples);
//     const orangePiecs=cutFruit(oranges);
//     console.log(applePiecs, orangePiecs);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruit(4,5));


                    // //Coding Challenge #1
/*
    Calculate average of both team using a function and make another function to print highest average;
 */

// const a=(10,43,53,23)/4;
// const b=(31,12,43,21)/4;
// const winner=function(a,b){
//     if(a>b){
//         return "Team A";
//     }
//     return "Team B";
// }
// console.log(winner(a,b));



                    // //Arrays
// const f1="Michael";
// const f2="Steven";
// const f3="Peter";

// const friends=["Michael","Steven","Peter"];
// console.log(friends[0]);
// console.log(friends);

// const years=new Array(2021,2022,2023,2024);
// console.log(years[3]);
// console.log(friends.length);
// console.log(friends.indexOf("Steven"))



                    // //Basic Array Operation
// const friends=["Michael","Steven","Peter"];
// friends.push('jay');
// console.log(friends);
// friends.unshift("John");
// console.lof(friends);


// //removing

// friends.pop();
// console.lof(friends);
// friends.shift();
// console.lof(friends);


                    // //Coding Challenge #2
// const bill=23;

// function calculateTip(bill){
//     if(bill>=50&&bill<=300){
//         return bill*0.15;
//     }
//     return bill*0.2;
// }

// const tip=calculateTip(bill);
// console.log(bill,tip,bill+tip);


                    // //Object
// const obj={
//     age:98,
//     fname:"Ashvani",
//     lname:"Sharma",
//     email:"panditashuabvp@gmail.com",
//     address:{
//         city:"Hathras",
//         pincode:204101,
//         state:"UttarPrades"
//     },
//     mobileNumber:8077719863,
//     friends:["Sudhanshu","Puneet","Naman","Aryan","chirag"]
// }
// console.log(obj)
// console.log(obj.friends[2]);
// console.log(obj.address.city);
// console.log(obj.fname);
// console.log(obj['lname']);
// const inter=prompt("What you want to know fname or lname");
// console.log(inter);
// if(obj[inter]){
//     console.log(obj[inter]);
// }
// else{
//     console.log("It is not exist")
// }

// obj.location="India";
// obj['cpi']=7.4;
// console.log(obj);


                    // //Object Method
// const jonas={
//     fname:"Jonas",
//     lname:"Sharma",
//     job:"Teacher",
//     friends:['Michael',"Peter","Steven"],
//     driving:true,
//     birthYear:1991,
//     // calcAge:function(birthYear){
//     //     return 2024-birthYear;
//     // }

//     calcAge:function(){
//         return 2024-this.birthYear;
//     }
// };

// const calcAge=function(birthYear){
//     return 2024-birthYear;
// }

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));


                    // //Iteration
// console.log("Lifting weight repetition 1😎")
// for(let rep=1;rep<=10;rep++){
//     console.log(`Lift no is ${rep}`)
// }



                    // //Looping Arrays, Breaking and Continue
// const john=['John','Sharma',2037-1991,'Teacher',['Michael','Peter','Steven']];
// const types=[];
// for(let i=0;i<john.length;i++){
//     console.log(john[i], typeof john[i]);
//     types[i]=typeof john[i];
// }
// for(let i=0;i<types.length;i++){
//     console.log(types[i]);
// }

                    // //While Loop
// let rep=1;
// while(rep<=10){
//     console.log(rep+" Hello");
//     rep++;
// }

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);