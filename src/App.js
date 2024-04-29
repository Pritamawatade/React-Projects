import "./App.css";
import React from 'react';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  // let expenseDate = new Date(2024, 4, 27);
  // let ExpenseTitle = "School fee";
  // let ExpenseAmount = 300;

  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 250,
      date: new Date(2024,4,27)
    },
    {
      id: 'e2',
      title: 'Travel',
      amount: 3000,
      date: new Date(2024,5,27)
    },
    {
      id: 'e3',
      title: 'Books',
      amount: 1500,
      date: new Date(2024,9,27)
    },
    {
      id: 'e4',
      title: 'Business',
      amount: 2000,
      date: new Date(2024,12,27)
    },
  ]


  return (
    <div>
      <NewExpense />
     <Expenses item={expenses} />

    </div>
    // video stop at 3 hr 49min
  );
}

export default App;

