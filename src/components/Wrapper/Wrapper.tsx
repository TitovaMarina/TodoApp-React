import React, { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface WrapperProps {
  children: ReactNode | ReactElement;

  direction: 'column' | 'row';
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, direction } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        flexDirection: direction,
        width: 1,
        alignContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
