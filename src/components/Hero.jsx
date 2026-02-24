import { Box, Typography, Button, Container } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2043)`,
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Overlay para oscurecer un poco la imagen y que el texto resalte */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.4)',
        }}
      />
      
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Typography variant="h2" component="h1" fontWeight="800" gutterBottom>
          Descubre el Universo Felino
        </Typography>
        <Typography variant="h5">
          La comunidad número uno para amantes de los gatos. Comparte, explora y celebra la vida de tus amigos peludos.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          color="secondary" 
          startIcon={<ExploreIcon />}
          sx={{ mt: 2, borderRadius: 5, px: 4 }}
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          Explorar Galería
        </Button>
      </Container>
    </Box>
  );
}