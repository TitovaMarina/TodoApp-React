import React from 'react';
import { Header } from '../components/Header/Header';
import { TodoPanel } from '../components/Todos/TodoPanel';
import { StyledWrapper } from '../components/Wrapper/StyledWrapper';
import { Wrapper } from '../components/Wrapper/Wrapper';

const HEADER_TEXT = `New todo task`;

export const NewTodo: React.FC = () => {
  return (
    <Wrapper direction="column">
      <Header headerText={HEADER_TEXT} />
      <StyledWrapper color="#7affe0" direction="row">
        <TodoPanel mode="add" todoTitle="" />
      </StyledWrapper>
    </Wrapper>
  );
};
