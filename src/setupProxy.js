const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/user', { target : 'https://spotify-music-analytics-server.herokuapp.com' }));
    app.use(createProxyMiddleware('/auth/redirect-spotify', { target : 'https://spotify-music-analytics-server.herokuapp.com' }));
    app.use(createProxyMiddleware('/songs/recent', { target : 'https://spotify-music-analytics-server.herokuapp.com' }));
    app.use(createProxyMiddleware('/songs/top', { target : 'https://spotify-music-analytics-server.herokuapp.com' }));
}