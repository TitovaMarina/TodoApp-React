import React from 'react';
import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
import commonStyles from '../../styles/commonStyles.module.css'

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, checkTodo, deleteTodo, selectTodoIdForEdit }) => {

  return (
    <div className={commonStyles.todoItemContainer}>
        <label className={commonStyles.todoTaskContainer}>
          <input className={styles.todoCheckBox} type="checkbox" onClick={()=> checkTodo(todo.id)}></input>
          <span aria-hidden style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none',
          }}>{todo.title}</span>

        </label>

        <Button onClick={()=> selectTodoIdForEdit(todo.id)} color="green">Edit</Button>
        <Button onClick={()=> deleteTodo(todo.id)} color="red">Delete</Button>

    </div>


  );
}
