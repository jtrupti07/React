import './ExpenseItem.css';
import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
/*
  in reguler js we use parameters for passing data into the functions and quite similler for react.
  react will insure that we get  one parameter in every component that we use as a component.
  props: This is the object which holds all the values we get as atribute as custom element.
  props is one of the key concept react has.
  it allows to make your components reusable and allows you to pass data from one component to another component.

*/
const ExpenseItem =(props) =>{
    
    // const [title,setTitle]= useState(props.title);
    // console.log("Expense item value evaluated");


    // const ClickHandler =() =>{
    //     setTitle('Updated!');
    //     console.log(title);
    // };
    

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description" >
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            {/* <button onClick={ClickHandler}>Change Title</button>  */}
        </Card>
        </li>
    );
}

export default ExpenseItem;