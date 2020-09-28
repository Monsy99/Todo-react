import styled, { css } from "styled-components";

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 40px;
  list-style-type: none;
`;
const Task = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const DoneButton = styled.button`
  font-size: 18px;
  padding: 15px;
  border: none;
  color: green;
  background-color: green;
  text-decoration: none;
  transition: all 0.3s ease-in;

  ${({ done }) =>
    done &&
    css`
      color: white;
    `}

  &:hover {
    color: rgb(19, 161, 19);
    background-color: rgb(19, 161, 19);
    cursor: pointer;
  }
`;

const TaskContent = styled.p`
  font-size: 18px;
  margin: 0 20px;
  flex-grow: 1;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const DeleteButton = styled.button`
  font-size: 18px;
  padding: 15px;
  border: none;
  color: white;
  background-color: crimson;
  text-decoration: none;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(148, 17, 43);
  }
`;

export { TaskList, Task, DoneButton, TaskContent, DeleteButton };
