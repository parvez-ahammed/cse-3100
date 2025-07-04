import { TextField, MenuItem } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export default function StatusFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('status', e.target.value);
    newParams.delete('page'); // Reset to page 1 on filter change
    setSearchParams(newParams);
  };

  return (
    <TextField
      select
      label="Status"
      variant="outlined"
      size="small"
      value={searchParams.get('status') || ''}
      onChange={handleChange}
      sx={{ 
        minWidth: 120,
        '& .MuiInputBase-root': {
          height: 40 // Match other input heights
        }
      }}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="alive">Alive</MenuItem>
      <MenuItem value="dead">Dead</MenuItem>
      <MenuItem value="unknown">Unknown</MenuItem>
    </TextField>
  );
}