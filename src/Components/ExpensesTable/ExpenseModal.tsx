import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;

interface ExpenseModalProps {
  onClose: () => void;
  onSave: (expense: { name: string; amount: number; progress: number; date: string; user: string }) => void;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [progress, setProgress] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");

  const handleSave = () => {
    if (!name || !amount || !progress || !date || !user) return alert("Please fill in all fields!");
    
    onSave({
      name,
      amount: Number(amount),
      progress: Number(progress),
      date,
      user,
    });

    onClose();
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <h2>Add Expense</h2>
        <Input type="text" placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Input type="number" placeholder="Progress (%)" value={progress} onChange={(e) => setProgress(e.target.value)} />
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input type="text" placeholder="User" value={user} onChange={(e) => setUser(e.target.value)} />
        <Button onClick={handleSave}>Add Expense</Button>
        <Button onClick={onClose} style={{ backgroundColor: "gray" }}>Cancel</Button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ExpenseModal;
