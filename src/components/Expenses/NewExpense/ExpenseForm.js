import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    
        const [enteredTitle, setEnteredTitle] = useState(' ');
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
    
        
        const titleChangeHandler = (event) =>{
            setEnteredTitle(event.target.value);
        }
        const amountChangeHandler = (event) =>{
            setEnteredAmount(event.target.value);
        }
        const dateChangeHandler = (event) =>{
            setEnteredDate(event.target.value);
        }

        const SubmitHandler = (event) =>{
          event.preventDefault();

          const expenseData =  {
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
          }
            props.onSaveExpenseDataHandler(expenseData);
          setEnteredTitle('');
          setEnteredAmount('');
          setEnteredDate('');
          console.log(expenseData);
        }
  return (

    <form onSubmit={ SubmitHandler } >
      <div className="new-expense__controls">
        <div className="new-expense-control">
          <lablel>Title</lablel>
          <input type="text"  value={enteredTitle} onChange={ titleChangeHandler  }/>
        </div>
        <div className="new-expense-control">
          <lablel>Amount</lablel>
          <input type="number" min="1"   value={enteredAmount} onChange={ amountChangeHandler} />
        </div>
        <div className="new-expense-control">
          <lablel>Date</lablel>
          <input type="date"   value={enteredDate} onChange={ dateChangeHandler} />
        </div>
      </div>
        <div className="new-expense__aciton">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
  );
};




export default ExpenseForm;

