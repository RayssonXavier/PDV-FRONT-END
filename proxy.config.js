const proxy = [
    {
      context: '/api',
      target: 'https://pdvnetwebapi.azurewebsites.net',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;