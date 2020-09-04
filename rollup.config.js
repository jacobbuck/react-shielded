import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs', exports: 'default' },
    { file: 'lib/index.esm.js', format: 'esm' },
  ],
  external: [
    /@babel\/runtime/,
    'react',
    'react-document-portal',
    'react-dom',
    'react-use-keypress',
  ],
  plugins: [
    svgr({ babel: false }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.svg'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
