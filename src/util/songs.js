import axios from 'axios';

export function getTopSongs() {
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/top').then(
      res => resolve(res.data),
      err => reject(err)
    ).catch(
      error => {if(error.response){
      console.log(error.response.data)}
    });
  });
}

export function getRecentSongs() {
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/recent').then(
      res => resolve(res.data),
      err => reject(err)
    ).catch(
      error => {if(error.response){
      console.log(error.response.data)
    }
  });
  });
}