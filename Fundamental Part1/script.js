// let js='amazing';
// console.log(40+8+23-10);
// console.log('Jonas');
// console.log(23);
// let fName='Jonas';
// console.log(fName);





                    //Data Types In JavaScript
// // Boolean
// console.log(true);
// let java=false;
// console.log(java);


                    // //Type of Function
// console.log(typeof(java));
// console.log(typeof(5));


                    // //String
// st="Hello this is String data type";
// console.log(st);
// console.log(typeof(st));
// st="Changed value";
// console.log(st)


                    // //Undefined
// let un=undefined;
// console.log(un);
// console.log(typeof(un));
// un=991;
// console.log(un);
// console.log(typeof(un));
// console.log(typeof(null));





                    // // Let, Var, Const

// //let-can changed later
// let age=30;
// console.log(age);
// age=35;
// console.log(age);

                    // //Const-cannot be changed later;
// const year=1990;
// console.log(year);
// //year=1992;              //Through an error
// console.log(year);

                    // //Var-Old way to define variable
// var s="Old Way";
// console.log(s);



                    // //Basic Operators
// const age=34-5;
// console.log(age);
// console.log(3*5);
// console.log(20+343);
// console.log(50/2);
// console.log(50/17);
// console.log(5%2);
// console.log(2**3);
// s="hello";
// t="world";
// console.log(s+t);


                    // //Assignment Operator
// let x=10+5;
// console.log(x);
// x+=10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);


                    // //Comparison Operator
// console.log(5==5);
// console.log(5===5);
// x=5.0;
// console.log(x==5);



                    // //Operators Precedence;
// console.log(25-10-5);
// let x,y;
// x=y=25-10-5;
// console.log(x);
// console.log(y);


                    //Coding Challenge #1
/*
    Make BMI Calculator
    BMI=Mass/height**2* or BMI=Mass/(height*height)
    mass in kg
    height in cm
    */

// let mass=70;
// let height=1.69;
// bmi=mass/(height**2);
// console.log(bmi);


                    // //String in JavaScript
// const fname='Jonas';
// const job="Teacher";
// const birth="1991";
// const jonas="I am "+fname+" a "+job+" born in "+birth;
// console.log(jonas);
// const jonsas2=`i am ${fname} a ${job} born in ${birth}`;
// console.log(jonsas2);
// console.log(`Just a regular String`);
// console.log(`String with
//             stotre the set of
//             characters`);

                    // // If-Else Decision 
// const age=19;
// const isValid=age>=18;
// console.log(isValid);
// if(age>=18){
//     console.log(`Eligible for Voting😊`);
// }
// else{
//     console.log(`Not Eligible for voting😢`)
// }

// const birthYear=1991;
// let century;
// if(birthYear<=2000){
//     century=20;
// }
// else{
//     century=21;
// }
// console.log(century)



                    // //Coding Challenge #2
        /*
            Calculate BMI of two person and print name of heighest BMI
            person name.
         */
// const aHeight=1.69;
// const aWeight=55;
// const bHeight=1.81;
// const bWeight=43;
// const aBMI=aWeight/(aHeight**2);
// const bBMI=bWeight/(bHeight*bHeight)
// if(aBMI>bBMI){
//     console.log(`a has more BMI than b`);
// }
// else{
//     console.log(`b has more BMI than a`);
// }



                    // //Type Conversion
// let year='1991';
// console.log(Number(year));
// year=Number(year);
// console.log(year+18);



                    // //Truthy and Falsy
/*
    5 falsy value=0,'',undefined, null, Nan;
    Everything except is true;
 */
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean({}));

// const money=10;
// if(!money){
//     console.log("Value is Falsy");
// }
// else{
//     console.log("True values")
// }

// let height;
// if(height){
//     console.log("Height is defined")
// }
// else{
//     console.log("Height is not defined")
// }



                    //  //Equality Operator ==vs===
// const age=18;
// if(age===18) console.log("YOu just become an adult")
// if(age=="18") console.log("Worked")
// const favourite=prompt("What is your favourite number");
// console.log(favourite);
// console.log(typeof(favourite));/


                    // //Boolean Logic and Logical Operator
/*
    AND,OR,NOT
 */

    // const license=true;
    // const vision=true;
    // console.log(license && vision);
    // console.log(license || vision);
    // console.log(!license);

    // const drive=license&&vision;
    // if(drive){
    //     console.log(`Can Drive`)
    // }
    // else{
    //     console.log("Not drive")
    // }

                    // //Coding Challenge #3
/*
    Calculate avg score, compare avg score and print using if else;
 */
// const teamA=(96+108+89)/3;
// const teamB=(88+91+110)/3;
// console.log(teamA, teamB);
// if(teamA>teamB){
//     console.log("TeamA Win")
// }
// else if(teamA<teamB){
//     console.log("TeamB Win")
// }
// else if(teamA===teamB){
//     console.log("Both are winner")
// }


                    // //Switch Statement
// const day=5;
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;    
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log(`Choose only from 0 to 6`);
//}

                    // //Ternay Operator
// const age=33;
// age>=18? console.log("Age is greater than 18"): console.log(`age is ${age}`)


                    // //Coding Challenge #4
/*
    calculate tip and print the bill, tip and final bill;
 */
// const bill=275;
// let tip=bill>=50&&bill<=300? bill*0.15:bill*0.2;
// console.log(bill, tip, bill+tip);