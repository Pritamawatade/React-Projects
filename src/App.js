import "./App.css";

import Expenses from "./components/Expenses";
function App() {
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
      <h2>Let's get started</h2>
      <Expenses item={expenses} />
    </div>
    // video stop at 3 hr 49min
  );
}

export default App;

//props  = way of passing the value in the react

// todays react learining compiles is that
// when importing the js file the .js extension is an optional
// The component name is must start with capital letter
// this is how the flow goes
// first index.js we import the react component which is essentialy a js file which return the jsx code  file then that file is get render in the index.js file with the help of render function.
// We create saparated file for each of the componet and css file for that component.
//We a create a parent folder to store the all component file.
//
