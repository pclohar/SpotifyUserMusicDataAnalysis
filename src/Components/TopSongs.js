import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.primary.background
    },
    imageContainer:{
        display: 'flex', 
        flexDirection: 'row', 
        overflow: 'scroll',
        marginTop: '0.5%'
      }

  }));

export default function TopSongs({top_songs}) {
 
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" >

            <Typography variant="body1" style={{fontWeight:'bold', marginBottom:'1%', marginTop: '4%'}}>Top Songs</Typography>
            <Divider />
            <div className= {classes.imageContainer} >
            {top_songs}
            </div>
        </Container>
    </div>
  );
};
