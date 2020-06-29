import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Divider } from '@material-ui/core';
import StickyHeadTable from './StickyHeadTable';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.primary.background
    },
    imageContainer:{
        display: 'flex', 
        flexDirection: 'row', 
        overflow: 'scroll',
      },
      paper : {
          height: '450px',
          opacity: '0.3'
      }
}));




export default function SimpleTable({recent_songs}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" >
            <Typography variant="body1" style={{fontWeight:'bold', marginBottom:'1%', marginTop: '4%'}}>Recent Songs</Typography>
            <Divider />
            <StickyHeadTable recent_songs = {recent_songs} />
        </Container>
    </div>
  );
}