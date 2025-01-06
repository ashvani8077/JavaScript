const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Ashvani Sharma";
tinderUser.isLogged=true;

const regularUser={
    email:'some@gmail.com',
    fullname:{
        fname:"Hitesh",
        lname:"Chaurdhary"
    }
}
console.log(regularUser.fullname['fname']);


const obj1={1:"A",2:"B"};
const obj2={3:"C",4:"D"};
const obj=Object.assign({},obj1,obj2);
console.log(obj);

const objmain={...obj,...obj2};

const user=[
    {
        id:1,
        name:"A"
    },
    {
        id:2,
        name:"B"
    },
    {
        id:3,
        name:"C"
    },
    {
        id:4,
        name:"D"
    },
]

console.log(user[1].id);

console.log(Object.keys(tinderUser));