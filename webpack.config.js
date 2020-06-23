var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .copyFiles({
        from: './assets/images/static',
        to: 'images/static/[path][name].[hash:8].[ext]'
    })
    .addEntry('layout',   './assets/js/layout.js')
    .addEntry('homepage', './assets/js/homepage.js')
    .addEntry('product',  './assets/js/product.js')
    .addEntry('media',    './assets/js/media.js')
    .addEntry('album',    './assets/js/album.js')
    .addEntry('book',     './assets/js/book.js')
    .addEntry('about',    './assets/js/about.js')
    .addEntry('contact',  './assets/js/contact.js')
    .enableSingleRuntimeChunk()

    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
;

module.exports = Encore.getWebpackConfig();
