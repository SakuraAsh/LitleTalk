const path = require('path');

const appPath = (...names) => path.join(process.cwd(), ...names);

//This will be merged with the config from the flavor
module.exports = {
  entry: {
    main: [appPath('src', 'index.tsx'), appPath('src', 'css', 'styles.scss')]
  },
  devServer: {
    port: 9000
  },
  output: {
    filename: 'bundle.[hash].js',
    path: appPath('build'),
    publicPath: '/'
  }
};
