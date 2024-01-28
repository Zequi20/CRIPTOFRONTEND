import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard() {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [verClave, setVerClave] = useState(false);

  const toggleClave = () => {
    if(verClave){
      setVerClave(false);
    }else{
      setVerClave(true);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      setUserName(userData.nombre);
      if(verClave){
        setUserPass(userData.clave);
      }else{
        setUserPass(userData.clave.replace(/./g, '*'));
      }
    }
  }, [verClave]);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            Nombre
          </Typography>
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            Clave
          </Typography>
          <Typography variant="body1">
            {userPass}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={toggleClave} size="small">Ver/Ocultar Clave</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
