import "./Expenses.css";
import React from 'react';

import Expenseitem from "./Expenseitem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <Expenseitem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount} />
  
      <Expenseitem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount} />
  
      <Expenseitem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount} />
   
      <Expenseitem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount} />
  
    </Card>
  );
}

export default Expenses;





