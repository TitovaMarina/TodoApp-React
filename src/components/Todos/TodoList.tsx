import React from 'react';

import { TodoItem } from './TodoItem';
import { TodoPanel } from './TodoPanel';
import { StyledWrapper } from '../Wrapper/StyledWrapper';
import { useTodo } from '../../hooks/useTodo';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const { todoIdForEdit, editTodo } = useTodo();
  return (
    <StyledWrapper color="#fff690" direction="column">
      {todos.map((todo) =>
        todo.id === todoIdForEdit ? (
          <TodoPanel
            key={todo.id}
            mode="edit"
            onClick={editTodo}
            todoTitle={todo.title}
          />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </StyledWrapper>
  );
};
