import { useState } from 'react';
import { Stack, TextField, Button, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export interface FullWidthSearchPropsI {
  label?: string;
  disabled?: boolean;
  onSearch: (searchString: string) => void;
}

export const FullWidthSearch = ({
  label,
  disabled,
  onSearch,
}: FullWidthSearchPropsI) => {
  const [searchString, setSearchString] = useState('');

  const updateSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <Stack direction={'row'} sx={{ width: '100%' }} spacing={1} my={2}>
      <TextField
        fullWidth
        disabled={!!disabled}
        label={label}
        onChange={updateSearchString}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        disabled={!!disabled}
        onClick={() => onSearch(searchString)}
      >
        {!!disabled ? <CircularProgress /> : 'Search'}
      </Button>
    </Stack>
  );
};
