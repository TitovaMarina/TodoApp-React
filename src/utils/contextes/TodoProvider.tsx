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
  const [filteredTodos, setFilteredTodos] = React.useState(todos);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    filter ? filterByTag(filter) : setFilteredTodos(todos);
    console.log('useEffect');
  }, [todos]);

  const selectTodoIdForEdit = (id: number) => setTodoIdForEdit(id);

  const defineFilter = (filter: string) => setFilter(filter);

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

  const addTag = (todoId: number, tagTitle: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          const newTags = [...todo.tags, tagTitle];
          return { ...todo, tags: newTags };
        }
        return todo;
      })
    );
  };

  const deleteTag = (todoId: number, deletedTagTitle: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          const newTags = todo.tags.filter((tag) => tag !== deletedTagTitle);
          return { ...todo, tags: newTags };
        }
        return todo;
      })
    );
  };

  const filterByTag = (tagName: string) => {
    if (!tagName) {
      setFilteredTodos(todos);
      return;
    }

    setFilteredTodos(todos.filter((todo) => todo.tags.includes(tagName)));
  };

  const clearFilterResults = () => {
    setFilteredTodos(todos);
  };

  const value = React.useMemo(
    () => ({
      todos,
      filter,
      filteredTodos,
      todoIdForEdit,
      selectTodoIdForEdit,
      deleteTodo,
      checkTodo,
      editTodo,
      addTodo,
      addTag,
      deleteTag,
      filterByTag,
      clearFilterResults,
      defineFilter,
    }),
    [todos, filter, todoIdForEdit, filteredTodos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
