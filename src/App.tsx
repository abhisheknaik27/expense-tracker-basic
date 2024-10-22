import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "ball", amount: 10, category: "xyz" },
    { id: 2, item: "ball", amount: 10, category: "xyz" },
    { id: 3, item: "ball", amount: 10, category: "xyz" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
