import styled from "styled-components";
export const   StyledSignpContainer=styled.div`

 gap: 120px;
    display: flex;
    margin-left: 50px;
    background-color: #ffffff;
    width: 1200px;
`;
export const SignupForm = styled.form`
  width: 450px;
  height: 450px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SignupImage = styled.img`
  width: 541.1px;
  height: 549px;
`;

export const Heading = styled.h1`
  font-size: 2.5em;
  line-height: 0.5em;
  font-family: Poppins, sans-serif;
`;
export const ResetButton = styled.button`
  width: 105%;
  margin-top:10px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #2563eb;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;
export const Paragraph=styled.p`

     text-align: center;

`;

