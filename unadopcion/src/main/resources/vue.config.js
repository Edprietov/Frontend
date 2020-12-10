module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                ws:false,
                target: 'http://localhost:8080',
                //target: 'http://34.123.151.81:8080',
                pathRewrite:{'^/api': ''},
                changeOrigin: true,
                secure:false
            },
        }
    }
}