import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'default' },
    { file: pkg.module, format: 'esm' },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    'react/jsx-runtime',
  ],
  plugins: [
    svgr({ babel: false, expandProps: false }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.svg'],
    }),
  ],
};
