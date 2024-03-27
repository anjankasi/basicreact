var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("this is from TS");
var matt = {
    name: "Matt",
    mattsDog: "Lacey",
    numDogs: 1
};
// i want 3 variables each with the value
// name, 
// Object Destructuring
//const {name, mattsDog, numDogs} = matt;
// another way to destructure u can give ur own variables to map 
var mattsName = matt.name, mattsDog = matt.mattsDog, mynumber = matt.numDogs;
console.log(mattsName, mynumber);
var newMatt = __assign(__assign({}, matt), { pets: false }); //u can add extra key,value pairs
console.log(newMatt);
//array destructuring
var arr = [1, 2, 3];
var num1 = arr[0], num2 = arr[1], num3 = arr[2];
console.log(num2);
console.log("Excellent");
