import React, { useState } from "react";
import { ExpensesContainer, Table, Th, Td, ProgressBar, ExpButton } from "./Expenses.styles";
import ExpenseModal from "./ExpenseModal";

interface Expense {
  id: number;
  name: string;
  amount: number;
  progress: number;
  date: string;
  user: string;
}

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: "Marketing", amount: 25000, progress: 50, date: "22 Jan 2022", user: "guy-hawkins" },
    { id: 2, name: "Development", amount: 30000, progress: 60, date: "23 Jan 2022", user: "jenny-wilson" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addExpense = (newExpense: Expense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setIsModalOpen(false);
  };

  return (
    <ExpensesContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Expenses</h2>
        <ExpButton onClick={() => setIsModalOpen(true)}>Add Expense</ExpButton>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Expense</Th>
            <Th>Total Expenditure</Th>
            <Th>Price (PKR)</Th>
            <Th>Date</Th>
            <Th>User</Th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <Td>{expense.name}</Td>
              <Td>
                <ProgressBar width={expense.progress}>{expense.progress}%</ProgressBar>
              </Td>
              <Td>{expense.amount}</Td>
              <Td>{expense.date}</Td>
              <Td>{expense.user}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && <ExpenseModal onClose={() => setIsModalOpen(false)} onSave={addExpense} />}
    </ExpensesContainer>
  );
};

export default Expenses;
