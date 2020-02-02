// Import rollup.js plugins.
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

export default {
	input: './src/scripts/app.js',
	output: {
		file: './dist/js/app.min.js',
		format: 'iife'
	},
	plugins: [
		copy({
			targets: [
				{ src: [ 'src/static/fonts/**' ], dest: 'dist/fonts' },
				{ src: 'src/static/image/**', dest: 'dist/image' }
			]
		}),
		postcss({}),
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
		process.env.NODE_ENV !== 'production' && serve('dist') && livereload(),
	]
};
