import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  filteredTodos: Todo[];
  todoIdForEdit: number | null;
  filter: string | '';
  addTodo: (title: string) => void;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  editTodo: (title: string) => void;
  addTag: (todoId: number, tagTitle: string) => void;
  deleteTag: (todoId: number, tagdeletedTagTitleId: string) => void;
  filterByTag: (tagName: string) => void;
  clearFilterResults: () => void;
  defineFilter: (filter: string) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  filteredTodos: [],
  todoIdForEdit: null,
  filter: '',
  addTodo: () => {},
  checkTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  selectTodoIdForEdit: () => {},
  addTag: () => {},
  deleteTag: () => {},
  filterByTag: () => {},
  clearFilterResults: () => {},
  defineFilter: () => {},
});
