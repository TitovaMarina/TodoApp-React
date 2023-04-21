import * as React from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MuiButton } from '../Button/Button';
import { useTodo } from '../../hooks/useTodo';

interface DialogWindowProps {
  dialogOpenButtonTitle: string;
  todoId: number;
}

export const DialogWindow: React.FC<DialogWindowProps> = ({
  dialogOpenButtonTitle,
  todoId,
}) => {
  const [open, setOpen] = React.useState(false);
  const [inputError, setInputError] = React.useState('');
  const [tag, setTag] = React.useState('');
  const { addTag } = useTodo();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
    if (tag) {
      setInputError('');
    }
  };

  const addTodoTag = () => {
    if (!tag) {
      setInputError('Invalid value');
    } else {
      addTag(todoId, tag);
      setTag('');
      handleClose();
    }
  };

  return (
    <>
      <MuiButton
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        color="secondary"
      >
        {dialogOpenButtonTitle}
      </MuiButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add tag for the choosen Todo task.
          </DialogContentText>

          <TextField
            variant="outlined"
            fullWidth
            label="Tag name"
            value={tag}
            onChange={onChange}
            size="small"
            error={inputError ? true : false}
            helperText={inputError}
            sx={{ backgroundColor: 'white', mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTodoTag}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
