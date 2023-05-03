import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoPanel } from './TodoPanel';
import { StyledWrapper } from '../Wrapper/StyledWrapper';
import { useTodo } from '../../hooks/useTodo';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const { todoIdForEdit } = useTodo();
  return (
    <StyledWrapper color="#fff690" direction="column">
      {todos.map((todo) =>
        todo.id === todoIdForEdit ? (
          <TodoPanel key={`tp_${todo.id}`} mode="edit" todoTitle={todo.title} />
        ) : (
          <TodoItem key={`ti_${todo.id}`} todo={todo} />
        )
      )}
    </StyledWrapper>
  );
};
