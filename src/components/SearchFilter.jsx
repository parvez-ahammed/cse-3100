// idk what this is I just asked Deepseek to convert my code into a workable component
import { TextField, MenuItem, Box, InputAdornment } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNameChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("name", e.target.value);
    newParams.delete("page");
    setSearchParams(newParams);
  };

  const handleStatusChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("status", e.target.value);
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 4,
        alignItems: "center",
      }}
    >
      {/* Compact Search Field */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchParams.get("name") || ""}
        onChange={handleNameChange}
        sx={{
          width: 200, // Fixed width
          "& .MuiInputBase-root": {
            height: 40, // Compact height
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      {/* Status Filter Dropdown */}
      <TextField
        select
        label="Status"
        variant="outlined"
        size="small"
        value={searchParams.get("status") || ""}
        onChange={handleStatusChange}
        sx={{
          minWidth: 120,
          "& .MuiInputBase-root": {
            height: 40, // Match search field height
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </TextField>
    </Box>
  );
}
