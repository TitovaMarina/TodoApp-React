import React, { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface WrapperProps {
  children: ReactNode | ReactElement;
  color: string;
  direction: 'column' | 'row';
}

export const StyledWrapper: React.FC<WrapperProps> = (props) => {
  const { children, direction, color } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        flexDirection: direction,

        width: '70%',
        alignContent: 'center',
        p: '20px',
        m: '10px',
        border: '1px solid',
        borderRadius: '5px',
        backgroundColor: color,
      }}
    >
      {children}
    </Box>
  );
};
