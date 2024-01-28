import React from 'react';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Fab from '@mui/material/Fab';

import { styled } from '@mui/material/styles';

const CenteredFab = styled(Fab)({
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
});

function CenterFab({ onClick }) {
  return (
    <div style={{ position: 'relative', width: '100%' , marginBottom: '52px'}}>
      {/* Contenedor para posicionar el FAB */}
      <CenteredFab color="secondary" aria-label="add" onClick={onClick}>
        <AddAlertIcon />
      </CenteredFab>
    </div>
  );
}

export default CenterFab;
