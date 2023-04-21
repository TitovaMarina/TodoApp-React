import React from 'react';
import { Header } from '../components/Header/Header';
import { TodoPanel } from '../components/Todos/TodoPanel';
import { StyledWrapper } from '../components/Wrapper/StyledWrapper';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useTodo } from '../hooks/useTodo';

const HEADER_TEXT = `New todo task`;

export const NewTodo: React.FC = () => {
  const { addTodo } = useTodo();

  return (
    <Wrapper direction="column">
      <Header headerText={HEADER_TEXT} />
      <StyledWrapper color="#7affe0" direction="row">
        <TodoPanel mode="add" onClick={addTodo} todoTitle="" />
      </StyledWrapper>
    </Wrapper>
  );
};
