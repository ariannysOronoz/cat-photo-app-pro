import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

export default function CatCard({ url, title, description }) {
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
    </Card>
  );
}