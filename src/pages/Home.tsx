import React from 'react';
import { Header } from '../components/Header/Header';
import { TodoList } from '../components/Todos/TodoList';
import { StyledWrapper } from '../components/Wrapper/StyledWrapper';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useTodo } from '../hooks/useTodo';

const HEADER_TEXT = `ToDo tasks list`;

export const Home: React.FC = () => {
  const { todos } = useTodo();

  return (
    <Wrapper direction="column">
      <Header headerText={HEADER_TEXT} />

      {todos.length !== 0 ? (
        <TodoList />
      ) : (
        <StyledWrapper color="#fff690" direction="column">
          You have no tasks.
        </StyledWrapper>
      )}
    </Wrapper>
  );
};
