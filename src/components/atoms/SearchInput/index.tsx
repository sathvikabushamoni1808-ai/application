import TextField from "@mui/material/TextField";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  InputProps?: object;
}

function SearchInput({
  value,
  onChange,
  InputProps,
}: SearchInputProps) {
  return (
    <TextField
      size="small"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={InputProps}
      sx={{
        width: 300,
      }}
    />
  );
}

export default SearchInput;