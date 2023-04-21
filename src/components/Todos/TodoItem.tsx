import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import { Wrapper } from '../Wrapper/Wrapper';
import { MuiButton } from '../Button/Button';
import { useTodo } from '../../hooks/useTodo';

import { DialogWindow } from '../DialogWindow/DialogWindow';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { checkTodo, deleteTodo, selectTodoIdForEdit, deleteTag } = useTodo();

  const checkboxClick = () => {
    checkTodo(todo.id);
  };

  const handleDeleteTag = (tag: string) => () => {
    deleteTag(todo.id, tag);
  };

  return (
    <Wrapper direction="row">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',

          width: '-webkit-fill-available',
          alignContent: 'center',
          pl: '5px',
          m: '5px',
          border: '1px solid',
          borderRadius: '5px',
          backgroundColor: 'white',
        }}
      >
        <FormControlLabel
          control={<Checkbox onChange={checkboxClick} checked={todo.checked} />}
          label={todo.title}
          sx={{
            p: 0.5,
            mr: 0.5,
            width: '50%',
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none',
          }}
        />
        <div style={{ width: '50%' }}>
          {todo.tags
            ? todo.tags.map((tag) => (
                <Chip
                  key={`${todo.id}_${tag}`}
                  label={tag}
                  color="secondary"
                  variant="outlined"
                  onDelete={handleDeleteTag(tag)}
                  sx={{ m: 0.5 }}
                ></Chip>
              ))
            : null}
        </div>
      </Box>

      <DialogWindow dialogOpenButtonTitle="Tag" todoId={todo.id} />

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
