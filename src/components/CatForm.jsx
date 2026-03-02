import { Box, TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function CatForm() {
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        Detalles del Felino
      </Typography>
      
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Sección de Radio Buttons */}
        <FormControl component="fieldset" sx={{ mb: 3, mt: 2, display: 'block' }}>
          <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>¿Tu gato es de interior o exterior?</FormLabel>
          <RadioGroup row name="indoor-outdoor" defaultValue="indoor">
            <FormControlLabel value="indoor" control={<Radio />} label="Interior" />
            <FormControlLabel value="outdoor" control={<Radio />} label="Exterior" />
          </RadioGroup>
        </FormControl>

        {/* Sección de Checkboxes */}
        <FormControl component="fieldset" sx={{ mb: 4, display: 'block' }}>
          <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Personalidad</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Cariñoso" />
            <FormControlLabel control={<Checkbox />} label="Perezoso" />
            <FormControlLabel control={<Checkbox />} label="Energético" />
          </FormGroup>
        </FormControl>

        {/* Campo de texto y Botón */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField 
            fullWidth 
            label="URL de la foto de tu gato" 
            variant="outlined" 
            placeholder="https://ejemplo.com/foto.jpg" 
            required 
          />
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<SendIcon />} 
            size="large"
            type="submit"
            sx={{ px: 4, borderRadius: 2 }}
          >
            Subir
          </Button>
        </Box>
      </form>
    </Paper>
  );
}