module.exports={
  publicPath: process.env.NODE_ENV === 'production'
    ? '/supermall/'
    : '/',
  configureWebpack:{
    resolve:{
      alias:{
        // '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
//设置路径名
