import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: number | null;
  updateTodos: (todos: Todo[]) => void;
  addTodo: (title: string) => void;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  editTodo: (title: string) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  updateTodos: () => {},
  addTodo: () => {},
  checkTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  selectTodoIdForEdit: () => {},
});
