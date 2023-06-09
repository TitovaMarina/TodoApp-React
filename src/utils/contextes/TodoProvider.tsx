import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { TodoContext } from './TodoContext';
import { generateNextId } from '../helpers';

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('dataLocalStorage');
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);

  const updateTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

  const selectTodoIdForEdit = (id: number) => setTodoIdForEdit(id);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const editTodo = (title: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, title };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  const addTodo = (title: string) => {
    if (!title) {
      alert('Please enter Todo task name first');
      return;
    }
    const id = generateNextId(todos);

    setTodos([...todos, { id, title, checked: false, tags: [] }]);
    alert('New Todo task was successfully added.');
  };

  const value = React.useMemo(
    () => ({
      todos,
      todoIdForEdit,
      updateTodos,
      selectTodoIdForEdit,
      deleteTodo,
      checkTodo,
      editTodo,
      addTodo,
    }),
    [todos, todoIdForEdit]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
