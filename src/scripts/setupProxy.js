const {createProxyMiddleware} = require ('http-proxy-middleware');

module.exports = function (app) {
  app.use (
    '/smartlinx',
    createProxyMiddleware ({
      target: 'https://api.smartlinx.it',
      changeOrigin: true,
      secure: false,
    })
  );
};
