import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'white', 
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Lado izquierdo: Logo y Nombre */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <PetsIcon color="primary" />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ fontWeight: 'bold', letterSpacing: 1 }}
          >
            CATPHOTOAPP
          </Typography>
        </Stack>

        {/* Lado derecho: Links de navegación */}
        <Stack direction="row" spacing={2}>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Galería</Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Contacto</Button>
          <Button 
            variant="contained" 
            disableElevation 
            sx={{ borderRadius: 5, textTransform: 'none' }}
          >
            Unirse
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}