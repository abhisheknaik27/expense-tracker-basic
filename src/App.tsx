import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Movie Ticket", amount: 500, category: "Entertainment" },
    { id: 2, item: "Kirana", amount: 10000, category: "Groceries" },
    { id: 3, item: "Dress", amount: 900, category: "Clothing" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(newExpense) =>
          setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
        }
      ></ExpenseForm>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
