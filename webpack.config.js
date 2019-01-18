var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('web/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')
    .copyFiles({
        from: './assets/images/static',
        to: 'images/static/[path][name].[ext]'
    })

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('layout',   './assets/js/layout.js')
    .addEntry('homepage', './assets/js/homepage.js')
    .addEntry('product',  './assets/js/product.js')
    .addEntry('media',    './assets/js/media.js')
    .addEntry('album',    './assets/js/album.js')
    .addEntry('book',     './assets/js/book.js')
    .addEntry('contact',  './assets/js/contact.js')

    .enableBuildNotifications()
;

module.exports = Encore.getWebpackConfig();
