module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                ws:false,
                target: 'https://unadopcion-296402.uc.r.appspot.com',
                pathRewrite:{'^/api': ''},
                changeOrigin: true,
                secure:false
            },
        }
    }
}