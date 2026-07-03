import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#101828",
        padding: "10px 20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            MassMutual
          </Typography>

          <Typography variant="caption">
            India
          </Typography>
        </Box>

        {/* Center Section */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 500 }}
        >
          On Call Allowance Application
        </Typography>

        {/* Right Section */}
        <Box sx={{ textAlign: 'right' }}>
          <Typography>
            Welcome User (Agent)
          </Typography>

          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;