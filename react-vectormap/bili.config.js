import pkg from './package.json';

/** @type {import('bili').Config} */
module.exports = {
  output: {
    moduleName: pkg.name,
    format: ['cjs', 'esm', 'umd', 'umd-min'],
  },
  externals: ['jvectormap-next', 'jquery', 'react'],
};
