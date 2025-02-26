import styled from "styled-components";
export const StyledButton=styled.button`

  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  width: 105%;
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