const arr=[1,3,5,7,"Ashvani Sharma", true, null, undefined];
console.log(arr);
const arr2=new Array(2,3,45,6,7,8,9);
console.log(arr2);


arr.push(456);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(5);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.length);

const ar=[1,2,3,4];
const ar2=[5,6,7,8];
const ans=[...ar,...ar2];
console.log(ans);