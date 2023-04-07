import React from 'react';
//import styles from './TodoList.module.css';
import { TodoItem } from './TodoItem'
import { TodoPanel } from './TodoPanel';
import { Wrapper } from '../Wrapper/Wrapper';

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  changeTodo: (title: string) => void;
  todoIdForEdit: number | null;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo, selectTodoIdForEdit, changeTodo, todoIdForEdit }) => {

  return (
    <Wrapper color='green' direction="column">
      {todos.map((todo) => 
        (todo.id === todoIdForEdit ? (
          <TodoPanel key={todo.id} mode="edit" onClick={changeTodo} todoTitle={todo.title} />
        ) : (
          <TodoItem 
            key={todo.id}
            todo={todo} 
            checkTodo={checkTodo} 
            deleteTodo={deleteTodo} 
            selectTodoIdForEdit={selectTodoIdForEdit}
            />
        ))
      )}
    </Wrapper>
  );
}
    