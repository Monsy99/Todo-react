import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 20px;
  height: auto;
  font-size: 25px;
  border: 1px solid #ccc;
  border-radius: none;
  @media (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  letter-spacing: 0.6px;
  padding: 15px 25px;
  font-size: 22px;
  border: none;
  background-color: teal;
  color: white;
  transition: background-color 0.3s ease-in;
  &:hover {
    cursor: pointer;
    background-color: rgb(11, 155, 155);
  }
`;

export { StyledForm, StyledInput, Button };
