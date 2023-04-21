/// <reference types="react-scripts" />

type Todo = {
  id: number;
  title: string;
  checked: boolean;
  tags: Tag[];
};

type Tag = {
  id: number;
  title: string;
};
