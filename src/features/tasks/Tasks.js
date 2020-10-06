import React from "react";
import Form from "./Form";
import TaskList from "./TaskList/index.js";
import Buttons from "./Buttons";
import Group from "../../common/Group/index";
import Header from "../../common/Header/index";
import Wrapper from "../../common/Wrapper/index";

function Tasks() {
  return (
    <Wrapper>
      <Header>Lista zadań</Header>
      <Group title="Dodaj nowe zadanie">
        <Form />
      </Group>
      <Group title="Lista zadań" additionalElements={<Buttons />}>
        <TaskList />
      </Group>
    </Wrapper>
  );
}

export default Tasks;
