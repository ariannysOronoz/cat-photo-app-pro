import { Box , Container, Grid} from '@mui/material';
import Hero from './components/Hero'; 
import Navbar from './components/Navbar';
import CatCard from './components/CatCard';
import { catsData } from './catsData';
function App() {
  return (
    <Box>
      <Navbar />
      <Hero />

      <Container maxWidth="lg" sx={{ mt: 8 }}>

      <Grid container spacing={4}>
          {catsData.map((cat) => (
            <Grid item key={cat.id} xs={12} sm={6} md={4}>
              <CatCard 
                url={cat.url} 
                title={cat.title} 
                description={cat.description} 
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default App;