import { Box , Container, Grid, Typography} from '@mui/material';
import Hero from './components/Hero'; 
import Navbar from './components/Navbar';
import CatCard from './components/CatCard';
import { catsData } from './catsData';
import CatForm from './components/CatForm';
import { useState } from 'react';

function App() {
  const [gatos, setGatos] = useState(catsData);
  const agregarGato = (nuevoGato) => {
    setGatos([nuevoGato, ...gatos]); 
  };

  return (
    <Box>
      <Navbar />
      <Hero />

      <Container maxWidth="lg" sx={{ mt: 8 }}>

        {/* La Galería */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
          Nuestra Galería
        </Typography>

      <Grid container spacing={4}>
          {gatos.map((cat) => (
            <Grid item key={cat.id} xs={12} sm={6} md={4}>
              <CatCard 
                url={cat.url} 
                title={cat.title} 
                description={cat.description} 
              />
            </Grid>
          ))}
        </Grid>

        {/* El Formulario */}
        <Box sx={{ mt: 10, maxWidth: 'md', mx: 'auto' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            ¡Sube a tu Michi!
          </Typography>
          <CatForm onAgregar={agregarGato}/> 
        </Box>

      </Container>
    </Box>
  );
}

export default App;