import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import CustomButton from "../../atoms/Button";

interface HeaderActionsProps {
  onAdd?: () => void;
}

function HeaderActions({ onAdd }: HeaderActionsProps) {
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
      >
        Filter
      </Button>

      <CustomButton
        text="Add Customer"
        onClick={onAdd}
      />
    </Box>
  );
}

export default HeaderActions;