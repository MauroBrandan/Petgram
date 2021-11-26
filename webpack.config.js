const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
	output: {
		filename: 'app.bundle.js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new WebpackPwaManifestPlugin({
			name: 'Petgram - Tu app de fotos de mascotas',
			short_name: 'Petgram 🐶',
			description: 'Con Petgram puedes encontrar las mejores fotos de mascotas',
			background_color: '#ffffff',
			theme_color: '#b1a',
			crossorigin: 'use-credentials',
			icons: [
				{
					src: path.resolve('src/assets/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512],
				},
				{
					src: path.resolve('src/assets/icon.png'),
					size: '1024x1024',
					purpose: 'maskable',
				},
			],
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			maximumFileSizeToCacheInBytes: 5000000,
			runtimeCaching: [
				{
					urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
					handler: 'CacheFirst',
					options: {
						cacheName: 'images',
					},
				},
				{
					urlPattern: new RegExp('https://petgram-api-mb.vercel.app'),
					handler: 'NetworkFirst',
					options: {
						cacheName: 'api',
					},
				},
			],
		}),
	],
	devServer: {
		historyApiFallback: {
			disableDotRule: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
}
