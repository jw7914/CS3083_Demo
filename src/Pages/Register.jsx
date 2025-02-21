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
import { registerUser } from "../../database_functions";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [badgeNumber, setBadgeNumber] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password || !badgeNumber) {
      setAlertMessage("Please fill in all the fields.");
      return;
    }

    setAlertMessage("");

    const userData = {
      username: username,
      password: password,
      badge_number: badgeNumber,
    };

    setLoading(true);

    const success = await registerUser(userData, setLoading, setAlertMessage);

    setLoading(false);

    if (success) {
      setAlertMessage("Registration successful!");
    }
    setUsername("");
    setPassword("");
    setBadgeNumber("");
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

          <form onSubmit={handleRegister}>
            <Grid container spacing={2} direction="column">
              {/* Username */}
              <Grid item>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                />
              </Grid>

              {/* Officer ID */}
              <Grid item>
                <TextField
                  fullWidth
                  label="Officer ID"
                  variant="outlined"
                  value={badgeNumber}
                  onChange={(e) => setBadgeNumber(e.target.value)}
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
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={30} color="secondary" />
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
                color: alertMessage.includes("successful") ? "green" : "red",
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
