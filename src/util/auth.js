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
      .get('http://localhost:5000/auth/redirect-spotify')
      .then(res => resolve(res.data), err => reject(err));
  });
}

export function registerSpotify(code) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:5000/auth/user', { code: removeHashParams(code) }, config)
      .then(
        res => resolve(res.data),
        err => reject(err)
      );
  });
}

export function getSpotifyUser() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:5000/auth/user')
      .then(
        res => resolve(res.data),
        err => reject(err)
      );
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:5000/auth/logout')
      .then(
        res => resolve(res),
        err => reject(err)
      );
  });
}