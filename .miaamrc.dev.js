module.exports = {
	mode: 'development',
	paths: {
		public: './public',
		assets: './public/asset',
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
