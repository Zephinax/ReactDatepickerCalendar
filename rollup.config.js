import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'bundled',
    }),
    commonjs(),
    postcss({
      inject: true,
      minimize: true,
      sourceMap: false,
    }),
    terser(),
  ],
};

export default config;
