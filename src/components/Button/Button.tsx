import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon: ReactNode;
}

export const MuiButton: React.FC<ButtonProps> = (props) => {
  const { startIcon, color, children, onClick } = props;

  return (
    <Button
      sx={{
        ml: '5px',
        height: 'fit-content',
        minWidth: 'fit-content',
      }}
      variant="contained"
      color={color}
      startIcon={startIcon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
