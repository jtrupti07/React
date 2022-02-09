// import logo from './logo.svg';
// import './App.css';
//import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
//import { Suspense } from "react/cjs/react.production.min";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const Expenses =React.lazy(()=> import('./components/Expenses/Expenses'));
// const NewExpense = React.lazy(()=> import('./components/NewExpense/NewExpense'));
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 90,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 5000,
    date: new Date(2021, 7, 18),
  },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 3000,
    date: new Date(2021, 1, 22),
  },
  {
    id: "e4",
    title: "Desk",
    amount: 100,
    date: new Date(2011, 4, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started"),
  //   React.createElement(Expenses,{items: expenses})
  // );

  return (
   
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
   
  );
};

export default App;
