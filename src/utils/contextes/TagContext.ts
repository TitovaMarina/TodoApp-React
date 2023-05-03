import React from 'react';

export interface TagContextProps {
  filter: string | '';
  filteredTodos: Todo[];
  addTag: (todoId: number, tagTitle: string) => void;
  deleteTag: (todoId: number, tagdeletedTagTitleId: string) => void;
  filterByTag: (tagName: string) => void;
  clearFilterResults: () => void;
  defineFilter: (filter: string) => void;
}

export const TagContext = React.createContext<TagContextProps>({
  filter: '',
  filteredTodos: [],
  addTag: () => {},
  deleteTag: () => {},
  filterByTag: () => {},
  clearFilterResults: () => {},
  defineFilter: () => {},
});
