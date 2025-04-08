import React from 'react';
import CatImageList from './components/CatImageList';
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return(
    <Container>
      <Typography>
        GALERIA DE GATOS
      </Typography>
      <CatImageList />
    </Container>

  );

};
export default App;