import { CardActions, Button, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CatCard({id,onDelete, url, title, description }) {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: 4,
      transition: 'transform 0.2s ' ,
      '&:hover': { transform: 'scale(1.03)' } // Efecto de zoom al pasar el mouse
    }}>
      
      <CardActionArea >
        <CardMedia
          component="img"
          height="220"
          image={url}
          alt={title}
          
        />
     
        <CardContent >
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

    <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <Button 
          size="small" 
          color="error" // "error" en Material UI lo pinta de rojo
          startIcon={<DeleteIcon />} 
          onClick={() => onDelete(id)} // Cuando hagan clic, ejecuta la función con el ID de este gato
        >
          Borrar
        </Button>
      </CardActions>

    </Card>
  );
}