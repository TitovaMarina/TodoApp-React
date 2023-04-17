import React from 'react';

import { TodoItem } from './TodoItem';
import { TodoPanel } from './TodoPanel';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  changeTodo: (title: string) => void;
  todoIdForEdit: number | null;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
  changeTodo,
  todoIdForEdit,
}) => {
  return (
    <StyledWrapper color="#fff690" direction="column">
      {todos.map((todo) =>
        todo.id === todoIdForEdit ? (
          <TodoPanel
            key={todo.id}
            mode="edit"
            onClick={changeTodo}
            todoTitle={todo.title}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        )
      )}
    </StyledWrapper>
  );
};
