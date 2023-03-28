import { babel } from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs' },
    { file: 'lib/index.esm.js', format: 'esm' },
  ],
  external: [
    'react',
    'react/jsx-runtime',
    'react-document-portal',
    'react-dom',
    'react-use-keypress',
  ],
  plugins: [
    svgr({ babel: false, expandProps: false }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.svg'],
    }),
  ],
};
