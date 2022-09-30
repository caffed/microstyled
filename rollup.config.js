import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');
const isProd = process.env.NODE_ENV === 'production' ? true : false;

export default [
  {
    input: './src/index.ts',
    external: id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProd,
        name: packageJson.name,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProd,
      }
    ],
    plugins: [
      autoExternal({
        builtins: false,
        dependencies: true,
        peerDependencies: true,
      }),
      external(),
      resolve(),
      commonjs({
        ignoreGlobal: true,
      }),
      typescript({
        outputToFilesystem: true,
        exclude: /node_modules/,
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: {
      file: packageJson.types,
      format: 'es',
    },
  },
]
