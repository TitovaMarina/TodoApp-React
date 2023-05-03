import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { MuiButton } from '../Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';
import { useTodo } from '../../hooks/useTodo';

interface TodoPanelProps {
  mode: 'add' | 'edit';
  todoTitle: string;
}

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEditMode = props.mode === 'edit';
  const { editTodo, addTodo } = useTodo();

  const [todo, setTodo] = React.useState(isEditMode ? props.todoTitle : '');

  const onAddClick = () => {
    //this is needed to clear the Input field after adding the Todo task to the list
    setTodo('');
    return addTodo(todo);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <Wrapper direction="row">
      <TextField
        variant="outlined"
        fullWidth
        value={todo}
        onChange={onChange}
        placeholder="Enter todo task here..."
        size="small"
        sx={{ backgroundColor: 'white' }}
      />

      {isEditMode ? (
        <MuiButton
          onClick={() => editTodo(todo)}
          startIcon={<SaveIcon />}
          color="success"
        >
          Save
        </MuiButton>
      ) : (
        <MuiButton onClick={onAddClick} startIcon={<AddIcon />} color="primary">
          Add
        </MuiButton>
      )}
    </Wrapper>
  );
};
