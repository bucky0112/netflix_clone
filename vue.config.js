module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args;
      obj.title = 'Netflix';
      obj.meta = {
        keywords: '',
        description: '',
      };
      return args;
    });
  },
};
