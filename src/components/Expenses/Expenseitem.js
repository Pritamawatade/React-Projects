import "./Expenseitem.css";
import React, { useState } from "react";

import ExpenseDate from "./Expensedate.js";
import Card from "../UI/Card.js";

const Expenseitem = (props) => {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className=" expense-item__description">
        <h2>{props.title}</h2>
        <div className=" expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default Expenseitem;
