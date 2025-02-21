import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [officerId, setOfficerId] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !password || !officerId) {
      setAlertMessage("Please fill in all the fields.");
      return;
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ boxShadow: 3, borderRadius: 2, width: 400, padding: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="purple" sx={{ py: 2 }} gutterBottom>
            Officer Register
          </Typography>

          <form onSubmit={(e) => e.preventDefault()}>
            <Grid container spacing={2} direction="column">
              {/* Username */}
              <Grid item>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>

              {/* Password */}
              <Grid item>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>

              {/* Officer ID */}
              <Grid item>
                <TextField
                  fullWidth
                  label="Officer ID"
                  variant="outlined"
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  required
                />
              </Grid>

              {/* Register Button */}
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "purple",
                  }}
                  onClick={handleRegister}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <CircularProgress size={24} color="secondary" /> // Show loading spinner
                  ) : (
                    "Register"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Display Alert Message Below the Form */}
          {alertMessage && (
            <Typography
              sx={{
                mt: 2,
                color: "red",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {alertMessage}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterPage;
