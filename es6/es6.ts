console.log("this is from TS");

const matt = {
    name: "Matt",
    mattsDog: "Lacey",
    numDogs: 1
}

// i want 3 variables each with the value
// name, 
 // Object Destructuring
 //const {name, mattsDog, numDogs} = matt;

 // another way to destructure u can give ur own variables to map 
 const {name: mattsName, mattsDog, numDogs: mynumber} = matt;
 console.log(mattsName, mynumber);

 const newMatt = {...matt, pets: false}; //u can add extra key,value pairs
 console.log(newMatt);

 //array destructuring
 const arr = [1,2,3];
 const [num1, num2, num3] = arr

 console.log(num2);
console.log("Excellent");