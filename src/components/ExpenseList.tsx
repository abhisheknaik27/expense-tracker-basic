interface Expense {
  id: number;
  item: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length == 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <th>Item</th>
        <th>Amount</th>
        <th>Category</th>
        <th></th>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.item}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <th>Total</th>
        <th>
          {expenses
            .reduce((curr, expense) => curr + expense.amount, 0)
            .toFixed(2)}
        </th>
        <th></th>
        <th></th>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
