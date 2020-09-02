import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs' },
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
    postcss({
      extensions: ['.css'],
      modules: true,
      plugins: [autoprefixer(), cssnano()],
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.svg'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
