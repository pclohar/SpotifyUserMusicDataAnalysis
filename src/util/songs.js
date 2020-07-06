import axios from 'axios';

export function getTopSongs() {
  console.log('In promise')
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/top').then(
      res => resolve(res.data),
      err => reject(err)
    );
  });
}

export function getRecentSongs() {
  return new Promise((resolve, reject) => {
    axios.get('https://spotify-music-analytics-server.herokuapp.com/songs/recent').then(
      res => resolve(res.data),
      err => reject(err)
    );
  });
}