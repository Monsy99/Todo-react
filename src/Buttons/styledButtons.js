import styled from "styled-components";

const ButtonsContainer = styled.div`
  padding: 20px;
`;
const Button = styled.button`
  color: teal;
  background: none;
  border: none;
  font-size: 18px;
  transition: color 0.3s ease-in;

  &:hover {
    color: rgb(11, 155, 155);
    cursor: pointer;
  }
  &:disabled {
    color: #ccc;
  }
  @media (max-width: 700px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

export { ButtonsContainer, Button };
