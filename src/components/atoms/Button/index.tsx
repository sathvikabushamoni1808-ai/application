import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function CustomButton({ text, onClick }: ButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;