import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        backgroundColor: theme.palette.primary.background,
    },
    inputBar: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: '2%',
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: '8px 10px',
      },
      searchIcon: {
        color: theme.palette.primary.main
      }
  }));

export default function SearchBar() {
 
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
    <Container maxWidth="sm" className={classes.inputBar}>
    <FormControl variant="outlined" fullWidth>
    <InputLabel >Enter track/artist</InputLabel>
    <OutlinedInput
      
      type='text'
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="search tracks/artists"
            edge="end"
          >
          <SearchIcon className={classes.searchIcon}/>
          </IconButton>
        </InputAdornment>
      }
      labelWidth={125}
    />
  </FormControl>
    </Container>
  </div>
  );
};
