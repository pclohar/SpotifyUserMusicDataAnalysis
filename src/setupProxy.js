const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/user', { target : 'http://localhost:5000' }));
    app.use(createProxyMiddleware('/auth/redirect-spotify', { target : 'http://localhost:5000' }));
    app.use(createProxyMiddleware('/songs/recent', { target : 'http://localhost:5000' }));
    app.use(createProxyMiddleware('/songs/top', { target : 'http://localhost:5000' }));
}