import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Container, Button, CardActions } from '@mui/material';

export default function Home() {
    return (
        <Container sx={{ display: 'flex' }}>
        
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Common_green_forest_lizard_%28Calotes_calotes%29.jpg/800px-Common_green_forest_lizard_%28Calotes_calotes%29.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odio nostrum placeat dolore nobis, vitae quaerat nulla autem maxime doloribus cupiditate.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant='contained' color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Common_green_forest_lizard_%28Calotes_calotes%29.jpg/800px-Common_green_forest_lizard_%28Calotes_calotes%29.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h1" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odio nostrum placeat dolore nobis, vitae quaerat nulla autem maxime doloribus cupiditate.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant='contained' color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Common_green_forest_lizard_%28Calotes_calotes%29.jpg/800px-Common_green_forest_lizard_%28Calotes_calotes%29.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odio nostrum placeat dolore nobis, vitae quaerat nulla autem maxime doloribus cupiditate.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant='contained' color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Common_green_forest_lizard_%28Calotes_calotes%29.jpg/800px-Common_green_forest_lizard_%28Calotes_calotes%29.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odio nostrum placeat dolore nobis, vitae quaerat nulla autem maxime doloribus cupiditate.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant='contained' color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>


        </Container >

    );
}