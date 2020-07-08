import axios from 'axios';
import { removeHashParams } from './url';

const config = { 
  headers: {  
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export function getLoginRedirect() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://spotify-music-analytics-server.herokuapp.com/auth/redirect-spotify')
      .then(res => resolve(res.data), err => reject(err));
  });
}

export function registerSpotify(code) {
  return new Promise((resolve, reject) => {
    axios
      .post('https://spotify-music-analytics-server.herokuapp.com/auth/user', { code: removeHashParams(code) }, config)
      .then(
        res => resolve(res.data),
        err => reject(err)
      );
  });
}

export function getSpotifyUser() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://spotify-music-analytics-server.herokuapp.com/auth/user')
      .then(
        res => resolve(res.data),
        err => reject(err)
      );
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://spotify-music-analytics-server.herokuapp.com/auth/logout')
      .then(
        res => resolve(res),
        err => reject(err)
      );
  });
}