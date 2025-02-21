import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import { fetchCrimes } from "../../database_functions";

function Crimes() {
  const [crimes, setCrimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCrimes(setCrimes, setLoading, setError);
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <CircularProgress />
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error">{`Error: ${error}`}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 4 }}>
        Crime Data
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Crime Code</strong>
            </TableCell>
            <TableCell>
              <strong>Classification</strong>
            </TableCell>
            <TableCell>
              <strong>Crime Description</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crimes.map((crime, index) => (
            <TableRow key={index}>
              <TableCell>{crime.crime_code}</TableCell>
              <TableCell>{crime.classification}</TableCell>
              <TableCell>{crime.crime_description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Crimes;
