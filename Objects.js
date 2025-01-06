const mySymb=Symbol("Key1")



const user={
    name:"Ashivani",
    age:18,
    [mySymb]:"Key1",
    location:"Hathras",
    email:"panditashuabvp@gmail.com",
    isLogged:false,
    lastLogged:["Monday","Saturday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user[mySymb]);

user.email="Ashvani.sharma@gmail.com";

