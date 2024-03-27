import { useState } from "react";
import { JsxElement } from "typescript";

type GreetingProps = {
    name: string,
    age: number;
}

const Greeting = (props: GreetingProps): JSX.Element => {

    const [age, setAge] = useState<number>(props.age);
    //works with lifecycle of DOM

   
    const handleClick = (): void => {
            console.log("button clicked");
            setAge(age + 1);
            console.log(age);
    };

    const buttonStyle = {color: "red", fontWeight: "bold"};

    const increaseAge = (addition: number): void => {
        //setAge(age + addition);
        setAge( age => age + addition); //preferred syntax
    }
    return (<>
    <p> Hello, {props.name} and you're {age}</p>
    <button id='bb' onClick={handleClick}>Happy Birthday</button>
    <button id='bb' onClick={() => increaseAge(3)}>Happy 3rd Birthday</button>
    </>);
};

export default Greeting;