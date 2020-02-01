// Import rollup.js plugins.
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload'

// PostCSS plugins.
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import postcssPresetEnv  from 'postcss-preset-env';
import cssnano from "cssnano";

export default {
	input: './src/scripts/main.js',
	output: {
		file: './build/js/main.min.js',
		format: 'iife',
		name: 'bundle'
	},
	plugins: [
		postcss({
			extensions: [ '.css' ],
			plugins: [
				simplevars,
				nested,
				postcssPresetEnv,
				cssnano
			]
		}),
		resolve({
			browser: true
		}),
		commonjs(),
		eslint({
			exclude: [ 'src/styles/**' ]
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		process.env.NODE_ENV === 'production' && uglify(),
		livereload()
	]
};
