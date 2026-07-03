import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationBar() {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: 'flex-end', p: 2 }}
    >
      <Pagination
        count={10}
        color="primary"
      />
    </Stack>
  );
}

export default PaginationBar;