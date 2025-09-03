import React, { useState } from "react";
import Theme from "./Theme";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();

  const addExpense = () => {
    if (!amount || !description) return;
    setExpenses([...expenses, { amount, description, id: Date.now() }]);
    setAmount("");
    setDescription("");
  };
  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  return (
    <div className="min-h-screen p-6 bg-bg text-text transition-colors">
      <h1 className="text-3xl font-bold text-center">Expense Tracker</h1>
      <Theme />
      <div className="card mx-auto mt-6 max-w-md">
        <h2 className="text-xl font-semibold mb-3">Add Expense</h2>
        <input
          type="number"
          placeholder="Amount"
          className="px-3 py-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          className="px-3 py-2 border rounded ml-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button className="btn w-[140px] ml-[150px]" onClick={addExpense}>
          Add
        </button>
      </div>
      <div className="card mx-auto mt-4 max-w-md ">
        <h2 className="text-xl font-semibold mb-2">Expenses</h2>
        <ul>
          {expenses.map((e) => (
            <li className="flex justify-between border py-2 px-1 last:border-none">
              <span> {e.description} </span>
              <span className="font-semibold text-red-700"> ${e.amount} </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-bold text-lg">Total: ${total}</div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
