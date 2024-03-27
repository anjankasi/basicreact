var myName = "Tam";
console.log(myName);
myName = 3;
var haveBirthday = function (age) {
    return (age + 1);
};
var printAge = function (age) {
    console.log(age);
};
console.log(haveBirthday(10));
console.log(printAge(10));
var greeting = function (age, name) {
    return "Hi, ".concat(name, ", great to see you turned ").concat(age);
};
console.log(greeting(27, 'Anjan'));
var daveAge = null;
daveAge = 2; //cant have null
//but if u say let daveAge: number | null
// has daveAge been defined yes - pass it, otherwise make the value as 25 and use it
// nullish coalescing operator
haveBirthday(daveAge !== null && daveAge !== void 0 ? daveAge : 25);
var totalAmount = 0;
var totalAmountBalance = 0;
var transaction1 = {
    date: new Date(),
    amount: 0,
    description: ""
    // u cannot define TRansaction leaving any property. All props have to be there
    // to make it optional, u need to put ?
    //description?: "Deposit"
};
var process = function () {
    var a = document.getElementById("amtText");
    console.log(a.value);
    totalAmountBalance = totalAmountBalance + Number(a.value);
    console.log(totalAmountBalance);
    transaction1.amount = Number(a.value);
    var desc = document.getElementById("amtDesc");
    transaction1.description = desc.value;
    transaction1.totalAmount = totalAmount;
    //const amount = document.getElementById("amtText")?.innerText;
    //console.log(document.getElementById("amtText"));
    var data1 = document.getElementById("calculatedData");
    data1.innerText = transaction1.description + " Amount is " + transaction1.totalAmount;
    return transaction1;
};
//console.log(transaction1.description?.length);//protects u from nullpointer
