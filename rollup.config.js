import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default' },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
    svgr({ babel: false, expandProps: false }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.svg'],
    }),
  ],
};
