var Loader = require("./lib/loader");
var Loaders = require("./lib/loaders");
var Plugin = require("./lib/plugin");
var Plugins = require("./lib/plugins");
var Utilities = require("./lib/utilities");
var Helpers = require("./lib/helpers");

exports.loader = Loader;
exports.loaders = Loaders;
exports.plugin = Plugin;
exports.plugins = Plugins;
exports.merge = Utilities.merge;
exports.resolveAll = Utilities.resolveAll;
exports.helpers = Helpers;

module.exports = module.exports.default = {
    loader: Loader,
    loaders: Loaders,
    plugin: Plugin,
    plugins: Plugins,
    merge: Utilities.merge,
    resolveAll: Utilities.resolveAll,
    helpers: Helpers
};
