var webpack = require('webpack');
module.exports={
	entry:{
		index:'./src/app/index',
		about:'./src/app/about'
	},
	output:{
		publicPath: '../dist/',
		path:'./dist/',
		filename:'main.js'
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:'babel?presets[]=es2015'
		},{
			test:/\.css$/,
			loaders:['style','css','autoprefixer']
		},{
			test:/\.less$/,
			loaders:['style','css','autoprefixer','less']
		},{
			test:/\.(eot|woff|svg|ttf|wodd2|gif)(\?|$)/,
			loader:'file-loader?name=[hash].[ext]'
		},{
			test:/\.(png|jpg)/,
			loader:'url?limit=12000&name=[hash].[ext]'
		}]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('common.js')
	]
}
