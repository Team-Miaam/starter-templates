module.exports = {
	mode: 'development',
	paths: {
		assets: './assets',
		src: './src',
	},
	index: './src/index.js',
	server: {
		port: 3007,
	},
	watchOptions: {
		ignored: '/node_modules/',
	},
};
