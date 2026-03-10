import { Box , Container, Grid, Typography} from '@mui/material';
import Hero from './components/Hero'; 
import Navbar from './components/Navbar';
import CatCard from './components/CatCard';
import { catsData } from './catsData';
import CatForm from './components/CatForm';
import { useState } from 'react';


// TODO: TAREA PARA MAÑANA - GUARDAR FOTOS AL RECARGAR
  // 1. Importar 'useEffect' arriba.
  // 2. Cambiar 'useState' para que lea de localStorage primero.
  // 3. Usar 'useEffect' para guardar la lista en localStorage cada vez que cambie.

function App() {
  const [gatos, setGatos] = useState(catsData);
  const agregarGato = (nuevoGato) => {
    setGatos([nuevoGato, ...gatos]); 
  };
   // Esta función agarra la lista de gatos y filtra (quita) al que tenga el ID que le pasemos
  const eliminarGato = (idParaBorrar) => {
    const nuevaLista = gatos.filter((gato) => gato.id !== idParaBorrar);
    setGatos(nuevaLista);
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
                id={cat.id}
                url={cat.url} 
                title={cat.title} 
                description={cat.description}
                onDelete={eliminarGato} 
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