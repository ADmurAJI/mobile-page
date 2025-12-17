import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          HelloWorld
        </Typography>
      </Box>
    </Container>
  );
}

export default App;