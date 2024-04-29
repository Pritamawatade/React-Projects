import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    
        const [enteredTitle, setEnteredTitle] = useState(' ');
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
    
        
        const titleChangeHandler = (event) =>{
            setEnteredTitle(event.target.value);
            console.log(event.target.value);
        }
        const amountChangeHandler = (event) =>{
            setEnteredAmount(event.target.value);
        }
        const dateChangeHandler = (event) =>{
            setEnteredDate(event.target.value);
        }
  return (

    <form>
      <div className="new-expense__controls">
        <div className="new-expense-control">
          <lablel>Title</lablel>
          <input type="text"  onChange={ titleChangeHandler  }/>
        </div>
        <div className="new-expense-control">
          <lablel>Amount</lablel>
          <input type="number" min="1" onChange={ amountChangeHandler} />
        </div>
        <div className="new-expense-control">
          <lablel>Date</lablel>
          <input type="date" onChange={ dateChangeHandler} />
        </div>
      </div>
        <div className="new-expense__aciton">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};




export default ExpenseForm;

