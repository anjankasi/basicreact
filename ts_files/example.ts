let myName: string | number = "Tam";
console.log(myName);

myName = 3;

const haveBirthday = (age: number): number => {
    return(age+1);
}

const printAge = (age: number): void => {
    console.log(age);
}

console.log(haveBirthday(10));
console.log(printAge(10));

const greeting = (age: number, name: string): string => {
    return `Hi, ${name}, great to see you turned ${age}`;
}
console.log(greeting(27,'Anjan'));

let daveAge: number | null = null
daveAge = 2; //cant have null
//but if u say let daveAge: number | null

// has daveAge been defined yes - pass it, otherwise make the value as 25 and use it
// nullish coalescing operator
haveBirthday(daveAge ?? 25);
let totalAmount: number = 0;
type Transaction = {
    date: Date;
    amount: number;
    totalAmount: number;
    description: string;
    
}

let totalAmountBalance: number = 0;

const transaction1 : Transaction = {
    date: new Date(),
    amount: 0,
    
    description: ""
    // u cannot define TRansaction leaving any property. All props have to be there
    // to make it optional, u need to put ?
    //description?: "Deposit"

}

const process = () : Transaction => {
    const a = document.getElementById("amtText") as HTMLInputElement;
    console.log(a.value);
    totalAmountBalance = totalAmountBalance + Number(a.value);
    console.log(totalAmountBalance);
    transaction1.amount = Number(a.value);
    const desc =  document.getElementById("amtDesc") as HTMLInputElement;
    transaction1.description =  desc.value;
    transaction1.totalAmount = totalAmount;
    //const amount = document.getElementById("amtText")?.innerText;
    //console.log(document.getElementById("amtText"));
    const data1 = document.getElementById("calculatedData") as HTMLSpanElement;
   data1.innerText = transaction1.description + " Amount is " + transaction1.totalAmount;
    return transaction1;

}

//console.log(transaction1.description?.length);//protects u from nullpointer


