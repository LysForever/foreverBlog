"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontExtension = fontExtension;
var global_js_1 = require("#js/components/global.js");
var context_js_1 = require("#js/util/context.js");
function fontExtension(id, name, pkg) {
    var _a, _b;
    var _c, _d;
    if (pkg === void 0) { pkg = "@mathjax/".concat(name); }
    if (MathJax.loader) {
        var FONTPATH = context_js_1.hasWindow ? "https://cdn.jsdelivr.net/npm/".concat(pkg) : pkg;
        var path = name.replace(/-font-extension$/, '-extension');
        var jax = (((_d = (_c = MathJax.config) === null || _c === void 0 ? void 0 : _c.startup) === null || _d === void 0 ? void 0 : _d.output) || 'chtml');
        (0, global_js_1.combineDefaults)(MathJax.config.loader, 'paths', (_a = {}, _a[path] = FONTPATH, _a));
        (0, global_js_1.combineDefaults)(MathJax.config.loader, 'dependencies', (_b = {}, _b["[".concat(path, "]/").concat(jax)] = ["output/".concat(jax)], _b));
        MathJax.loader.addPackageData(id, {
            extraLoads: ["[".concat(path, "]/").concat(jax)],
            rendererExtensions: [path]
        });
    }
}
