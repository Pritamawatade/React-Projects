import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
    const saveExpenseDataHandler= (enteredexpensedata) => {
            console.log(enteredexpensedata);
    }
    return (
        <div className="new-expense">

        <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
        </div>
    );
}


export default NewExpense;




