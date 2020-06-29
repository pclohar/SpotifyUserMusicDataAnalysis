import axios from 'axios';

export function getTopSongs() {
  return new Promise((resolve, reject) => {
    axios.get('/songs/top').then(
      res => resolve(res.data),
      err => reject(err)
    );
  });
}

export function getRecentSongs() {
  return new Promise((resolve, reject) => {
    axios.get('/songs/recent').then(
      res => resolve(res.data),
      err => reject(err)
    );
  });
}