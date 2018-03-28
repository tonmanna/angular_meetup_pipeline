// These are important and needed before anything else
require('zone.js/dist/zone-node');
require('reflect-metadata');

const { renderModuleFactory } = require('@angular/platform-server');
const { enableProdMode } = require('@angular/core');

const { join } = require('path');
const { readFileSync } = require('fs');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Our index.html we'll use as our template
const template = readFileSync(join('../dist/browser', 'index.html'))
    .toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

module.exports = (options,callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
            // Our index.html
            document: template,
            url: options.req.url,
            // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
            extraProviders: [
                provideModuleMap(LAZY_MODULE_MAP)
            ]
        })
        .then(html => {
            callback(null, html);
        });
}
