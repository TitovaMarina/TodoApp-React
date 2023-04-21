import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: number | null;
  addTodo: (title: string) => void;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  editTodo: (title: string) => void;
  addTag: (todoId: number, tagTitle: string) => void;
  deleteTag: (todoId: number, tagId: number) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  addTodo: () => {},
  checkTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  selectTodoIdForEdit: () => {},
  addTag: () => {},
  deleteTag: () => {},
});
