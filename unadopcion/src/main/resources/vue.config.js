module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                ws:false,
                target: 'http://localhost:8080',
                pathRewrite:{'^/api': ''},
                changeOrigin: true,
                secure:false
            },
        }
    }
}