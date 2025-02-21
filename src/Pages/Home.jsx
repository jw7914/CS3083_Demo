import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Link,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(e.target.value === ""); // Set error if username is empty
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Search Card */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography
                variant="h4"
                color="primary"
                align="center"
                gutterBottom
              >
                Search Bar
              </Typography>
              <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
                Query by Case, Name, or Alias!
              </Typography>

              <Box component="form" sx={{ "& .MuiTextField-root": { mb: 2 } }}>
                <TextField
                  fullWidth
                  label="Case Number"
                  placeholder="Enter case number"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      placeholder="First name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      placeholder="Last name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Alias"
                  placeholder="Enter alias"
                  variant="outlined"
                  sx={{ mt: 2 }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    bgcolor: "purple",
                    "&:hover": {
                      bgcolor: "darkPurple",
                    },
                  }}
                >
                  Search
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Login Card */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography
                variant="h4"
                color="primary"
                align="center"
                gutterBottom
              >
                Government Login
              </Typography>
              <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
                Enter your login credentials
              </Typography>

              <Box component="form" sx={{ "& .MuiTextField-root": { mb: 2 } }}>
                <TextField
                  fullWidth
                  label="Username"
                  placeholder="Enter your Username"
                  variant="outlined"
                  value={username}
                  onChange={handleUsernameChange}
                  error={usernameError}
                  helperText={
                    usernameError ? "Please fill out this field." : ""
                  }
                />

                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  placeholder="Enter your Password"
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    bgcolor: "purple",
                    "&:hover": {
                      bgcolor: "darkPurple",
                    },
                  }}
                >
                  Login
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Link href="#" color="primary" underline="hover">
                    Admin Login
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
