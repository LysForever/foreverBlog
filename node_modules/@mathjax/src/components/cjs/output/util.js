"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputUtil = exports.FONTPATH = void 0;
var global_js_1 = require("#js/components/global.js");
var package_js_1 = require("#js/components/package.js");
var context_js_1 = require("#js/util/context.js");
exports.FONTPATH = context_js_1.hasWindow ?
    'https://cdn.jsdelivr.net/npm/@mathjax/%%FONT%%-font' :
    '@mathjax/%%FONT%%-font';
exports.OutputUtil = {
    config: function (jax, jaxClass, defaultFont, fontClass) {
        var _a, _b, _c, _d, _e;
        var _f;
        if (MathJax.loader) {
            (0, global_js_1.combineDefaults)(MathJax.config, jax, MathJax.config.output || {});
            var config = MathJax.config[jax];
            var font = config.font || config.fontData || defaultFont;
            if (typeof (font) !== 'string') {
                config.fontData = font;
                config.font = font = font.NAME;
            }
            if (font.charAt(0) !== '[') {
                var path = (config.fontPath || exports.FONTPATH);
                var name_1 = (font.match(/^[a-z]+:/) ? (font.match(/[^/:\\]*$/) || [jax])[0] : font);
                (0, global_js_1.combineDefaults)(MathJax.config.loader, 'paths', (_a = {},
                    _a[name_1] = (name_1 === font ? path.replace(/%%FONT%%/g, font) : font),
                    _a));
                font = "[".concat(name_1, "]");
            }
            var name_2 = font.substring(1, font.length - 1);
            if (name_2 !== defaultFont || !fontClass) {
                MathJax.loader.addPackageData("output/".concat(jax), { extraLoads: ["".concat(font, "/").concat(jax)] });
            }
            else {
                var extraLoads = (_f = MathJax.config.loader["".concat(font, "/").concat(jax)]) === null || _f === void 0 ? void 0 : _f.extraLoads;
                if (extraLoads) {
                    MathJax.loader.addPackageData("output/".concat(jax), { extraLoads: extraLoads });
                }
                (0, global_js_1.combineWithMathJax)({ _: {
                        output: {
                            fonts: (_b = {},
                                _b[name_2] = (_c = {},
                                    _c[jax + '_ts'] = (_d = {},
                                        _d[fontClass.NAME + 'Font'] = fontClass,
                                        _d),
                                    _c),
                                _b)
                        }
                    } });
                (0, global_js_1.combineDefaults)(MathJax, 'config', (_e = {
                        output: {
                            font: font,
                        }
                    },
                    _e[jax] = {
                        fontData: fontClass,
                        dynamicPrefix: "".concat(font, "/").concat(jax, "/dynamic")
                    },
                    _e));
                if (jax === 'chtml') {
                    (0, global_js_1.combineDefaults)(MathJax.config, jax, {
                        fontURL: package_js_1.Package.resolvePath("".concat(font, "/").concat(jax, "/woff2"), false),
                    });
                }
            }
        }
        if (MathJax.startup) {
            MathJax.startup.registerConstructor(jax, jaxClass);
            MathJax.startup.useOutput(jax);
        }
    },
    loadFont: function (startup, jax, font, preloaded) {
        if (!MathJax.loader) {
            return startup;
        }
        if (preloaded) {
            MathJax.loader.preLoaded("[".concat(font, "]/").concat(jax));
        }
        return package_js_1.Package.loadPromise("output/".concat(jax)).then(startup);
    }
};
