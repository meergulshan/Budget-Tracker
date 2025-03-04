import styled from "styled-components";

export const ExpensesContainer = styled.div`
  margin-left: 270px; /* Adjust for sidebar */
  padding: 20px;
  width: calc(100% - 270px);
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background: #3498db;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ProgressBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  background: #8e44ad;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
`;
export const ExpButton = styled.button`
margin: 30px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  height: 40px;
  background-color: #2563eb;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151; /* Dark mode background */
    color: #ffffff; /* Dark mode text */
  }
`;