module.exports = {
	mode: 'development',
	paths: {
		public: './public',
		assets: './public/assets',
		src: './src/',
	},
	index: './src/index.js',
	server: {
		port: 3007,
	},
	watch: true,
	watchOptions: {
		ignored: '/node_modules/',
	},
};
