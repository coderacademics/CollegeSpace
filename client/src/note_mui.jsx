import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 300, maxHeight: 400, height: 300, marginLeft: 5, marginTop: 8 }} >
            <CardActionArea>
                <CardContent>
                    <div className="author" style={{ display: "flex" }}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {props.initial}
                        </Avatar>
                        <Typography gutterBottom variant="h5" component="div" style={{ paddingLeft: "0.8em", fontSize: "1em", display: "flex", alignItems: "center" }}>
                            {props.name}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    {props.note}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}