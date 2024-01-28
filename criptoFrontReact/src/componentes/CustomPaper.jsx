import React from 'react';
import Paper from '@mui/material/Paper';

const CustomPaper = ({ children }) => {
  return (
    <Paper elevation={3} style={{ borderRadius: 12, padding: 16, margin: 8 }}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
