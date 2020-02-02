const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [ './dist/**/*.html' ],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('postcss-preset-env')({
			browsers: 'last 2 versions'
		}),
		require('autoprefixer'),
		...(process.env.NODE_ENV === 'production' ? [ purgecss ] : []),
		require('cssnano')
	]
};
