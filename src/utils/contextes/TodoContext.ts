import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: number | null;
  addTodo: (title: string) => void;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  editTodo: (title: string) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  addTodo: () => {},
  checkTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  selectTodoIdForEdit: () => {},
});
