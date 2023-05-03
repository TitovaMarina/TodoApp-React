import React from 'react';
import { Header } from '../components/Header/Header';
import { TodoList } from '../components/Todos/TodoList';
import { StyledWrapper } from '../components/Wrapper/StyledWrapper';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Filter } from '../components/Filter/Filter';
import { useTodo } from '../hooks/useTodo';
import { useTag } from '../hooks/useTag';

const HEADER_TEXT = `ToDo tasks list`;

export const Home: React.FC = () => {
  const { todos } = useTodo();
  const {
    filter,
    defineFilter,
    filteredTodos,
    filterByTag,
    clearFilterResults,
  } = useTag();

  return (
    <Wrapper direction="column">
      <Header headerText={HEADER_TEXT} />

      <Filter
        filterText={filter}
        setFilter={defineFilter}
        filterFunc={filterByTag}
        clearFunc={clearFilterResults}
      />

      {filteredTodos.length !== 0 ? (
        <TodoList todos={filteredTodos} />
      ) : todos.length === 0 ? (
        <StyledWrapper color="#fff690" direction="column">
          You have no tasks.
        </StyledWrapper>
      ) : (
        <StyledWrapper color="#fff690" direction="column">
          You have no tasks with such tag.
        </StyledWrapper>
      )}
    </Wrapper>
  );
};
