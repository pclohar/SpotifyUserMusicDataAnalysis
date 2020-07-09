import axios from 'axios';

export function getTopSongs(access_token) {
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/top', {  params: {access_token: access_token} }).then(
      res => resolve(res.data),
      err => reject(err)
    ).catch(
      error => {if(error.response){
      console.log(error.response.data)}
    });
  });
}

export function getRecentSongs(access_token) {
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/recent', {  params: {access_token: access_token} }).then(
      res => resolve(res.data),
      err => reject(err)
    ).catch(
      error => {if(error.response){
      console.log(error.response.data)
    }
  });
  });
}