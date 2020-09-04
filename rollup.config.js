import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs', exports: 'default' },
    { file: 'lib/index.esm.js', format: 'esm' },
  ],
  external: ['react', 'react-document-portal', 'react-use-keypress'],
  plugins: [
    svgr({ babel: false, expandProps: false }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.svg'],
    }),
  ],
};
