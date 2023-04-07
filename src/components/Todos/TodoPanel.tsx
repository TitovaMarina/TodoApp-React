import React from 'react';
//import styles from './TodoPanel.module.css';
import { Button } from '../Button/Button';
import commonStyles from '../../styles/commonStyles.module.css'


interface TodoPanelProps {
  mode: 'add' | 'edit';
  todoTitle: string | '';
  onClick: (title: string) => void;
}


export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEditMode = props.mode === 'edit';

  //const [editMode, setEditMode] = React.useState(props.mode === 'edit');
  const [todo, setTodo] = React.useState(isEditMode ? props.todoTitle : '');
  
  const onClick = () => {
    if(!isEditMode){  
      setTodo('');
    }    
    return props.onClick(todo);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }

  return (
    <div className={commonStyles.todoItemContainer}>
      <input className={commonStyles.todoTaskContainer} value={todo} onChange={onChange} placeholder='Enter todo task here...'></input>
      { isEditMode 
          ? <Button onClick={onClick} color="green">Save</Button> 
          : <Button onClick={onClick} color="blue">Add</Button>          
      }
    </div>
  );
}
    