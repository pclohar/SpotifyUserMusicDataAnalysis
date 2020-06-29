import React from 'react';
import {  Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card : {
        height: theme.spacing(25), 
        width : theme.spacing(25)
     },
     font : {
       color: theme.palette.primary.main,
      
     }
    }));

const SongCard = ({ data }) => {
  const classes = useStyles();

  return (
    <div style={{paddingRight:'20px', paddingTop:'15px'}}>
    <Card color= "primary" className={classes.card}>
    <CardActionArea>
    <CardMedia
      component="img"
      alt={data.name}
      image={data.album.images[0].url}
      />
    </CardActionArea>
    </Card>
    <div style={{marginTop: '1.5%'}}>
    <Typography variant="body2" style={{fontWeight: 'bold'}}>{data.name}</Typography>
    <Typography variant="body2" className={classes.font}>{data.album.artists[0].name}</Typography>
    </div>
    </div>
  );
};

export default (SongCard);
