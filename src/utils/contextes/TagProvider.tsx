import React from 'react';
import { TagContext } from './TagContext';
import { useTodo } from '../../hooks/useTodo';

interface TagProviderProps {
  children: React.ReactNode;
}

export const TagProvider: React.FC<TagProviderProps> = ({ children }) => {
  const { todos, updateTodos } = useTodo();
  const [filteredTodos, setFilteredTodos] = React.useState(todos);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    filter ? filterByTag(filter) : setFilteredTodos(todos);
  }, [todos]);

  const defineFilter = (filter: string) => setFilter(filter);

  const addTag = (todoId: number, tagTitle: string) => {
    updateTodos(
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
    updateTodos(
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
      filter,
      filteredTodos,
      addTag,
      deleteTag,
      filterByTag,
      clearFilterResults,
      defineFilter,
    }),
    [filter, filteredTodos]
  );

  return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
};
