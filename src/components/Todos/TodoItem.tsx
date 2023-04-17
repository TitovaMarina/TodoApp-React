import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Wrapper } from '../Wrapper/Wrapper';
import { MuiButton } from '../Button/Button';

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => {
  const checkboxClick = () => {
    checkTodo(todo.id);
  };

  return (
    <Wrapper direction="row">
      <FormControlLabel
        control={<Checkbox onChange={checkboxClick} checked={todo.checked} />}
        label={todo.title}
        sx={{
          border: '1px solid #afafafa1',
          backgroundColor: 'white',
          m: 0.5,
          borderRadius: '5px',
          width: '-webkit-fill-available',
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? 'line-through' : 'none',
        }}
      />

      <MuiButton
        onClick={() => selectTodoIdForEdit(todo.id)}
        startIcon={<EditIcon />}
        color="success"
      >
        Edit
      </MuiButton>

      <MuiButton
        onClick={() => deleteTodo(todo.id)}
        startIcon={<DeleteIcon />}
        color="error"
      >
        Delete
      </MuiButton>
    </Wrapper>
  );
};
