import React from 'react';
import TextField from '@mui/material/TextField';
import { MuiButton } from '../Button/Button';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

interface FilterProps {
  filterText: string | '';
  setFilter: (filter: string) => void;
  filterFunc: (filter: string) => void;
  clearFunc: () => void;
}

export const Filter: React.FC<FilterProps> = ({
  filterText,
  setFilter,
  filterFunc,
  clearFunc,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const onClick = () => {
    filterFunc(filterText);
  };

  const clearSearch = () => {
    setFilter('');
    clearFunc();
  };

  return (
    <StyledWrapper direction="row" color="#9affbc">
      <TextField
        variant="outlined"
        fullWidth
        value={filterText}
        onChange={onChange}
        label="Filter by tag"
        sx={{ backgroundColor: 'white' }}
      />

      <MuiButton startIcon="" color="primary" onClick={onClick}>
        Filter
      </MuiButton>
      <MuiButton startIcon="" color="warning" onClick={clearSearch}>
        Clear
      </MuiButton>
    </StyledWrapper>
  );
};
