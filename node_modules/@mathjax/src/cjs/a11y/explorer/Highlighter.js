"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHighlighter = getHighlighter;
var namedColors = {
    red: { red: 255, green: 0, blue: 0 },
    green: { red: 0, green: 255, blue: 0 },
    blue: { red: 0, green: 0, blue: 255 },
    yellow: { red: 255, green: 255, blue: 0 },
    cyan: { red: 0, green: 255, blue: 255 },
    magenta: { red: 255, green: 0, blue: 255 },
    white: { red: 255, green: 255, blue: 255 },
    black: { red: 0, green: 0, blue: 0 },
};
function getColorString(color, deflt) {
    var _a;
    var channel = namedColors[color.color] || namedColors[deflt.color];
    channel.alpha = (_a = color.alpha) !== null && _a !== void 0 ? _a : deflt.alpha;
    return rgba(channel);
}
function rgba(color) {
    var _a;
    return "rgba(".concat(color.red, ",").concat(color.green, ",").concat(color.blue, ",").concat((_a = color.alpha) !== null && _a !== void 0 ? _a : 1, ")");
}
var DEFAULT_BACKGROUND = { color: 'blue', alpha: 1 };
var DEFAULT_FOREGROUND = { color: 'black', alpha: 1 };
var counter = 0;
var AbstractHighlighter = (function () {
    function AbstractHighlighter() {
        this.counter = counter++;
        this.ATTR = 'sre-highlight-' + this.counter.toString();
        this.mactionName = '';
        this.currentHighlights = [];
    }
    AbstractHighlighter.prototype.highlight = function (nodes) {
        var _this = this;
        this.currentHighlights.push(nodes.map(function (node) {
            var info = _this.highlightNode(node);
            _this.setHighlighted(node);
            return info;
        }));
    };
    AbstractHighlighter.prototype.highlightAll = function (node) {
        var mactions = this.getMactionNodes(node);
        for (var i = 0, maction = void 0; (maction = mactions[i]); i++) {
            this.highlight([maction]);
        }
    };
    AbstractHighlighter.prototype.unhighlight = function () {
        var _this = this;
        var nodes = this.currentHighlights.pop();
        if (!nodes) {
            return;
        }
        nodes.forEach(function (highlight) {
            if (_this.isHighlighted(highlight.node)) {
                _this.unhighlightNode(highlight);
                _this.unsetHighlighted(highlight.node);
            }
        });
    };
    AbstractHighlighter.prototype.unhighlightAll = function () {
        while (this.currentHighlights.length > 0) {
            this.unhighlight();
        }
    };
    AbstractHighlighter.prototype.setColor = function (background, foreground) {
        this._foreground = getColorString(foreground, DEFAULT_FOREGROUND);
        this._background = getColorString(background, DEFAULT_BACKGROUND);
    };
    Object.defineProperty(AbstractHighlighter.prototype, "foreground", {
        get: function () {
            return this._foreground;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractHighlighter.prototype, "background", {
        get: function () {
            return this._background;
        },
        enumerable: false,
        configurable: true
    });
    AbstractHighlighter.prototype.getMactionNodes = function (node) {
        return Array.from(node.getElementsByClassName(this.mactionName));
    };
    AbstractHighlighter.prototype.isMactionNode = function (node) {
        var className = node.className || node.getAttribute('class');
        return className ? !!className.match(new RegExp(this.mactionName)) : false;
    };
    AbstractHighlighter.prototype.isHighlighted = function (node) {
        return node.hasAttribute(this.ATTR);
    };
    AbstractHighlighter.prototype.setHighlighted = function (node) {
        node.setAttribute(this.ATTR, 'true');
    };
    AbstractHighlighter.prototype.unsetHighlighted = function (node) {
        node.removeAttribute(this.ATTR);
    };
    return AbstractHighlighter;
}());
var SvgHighlighter = (function (_super) {
    __extends(SvgHighlighter, _super);
    function SvgHighlighter() {
        var _this = _super.call(this) || this;
        _this.mactionName = 'maction';
        return _this;
    }
    SvgHighlighter.prototype.highlightNode = function (node) {
        var info;
        if (this.isHighlighted(node)) {
            info = {
                node: node,
                background: this.background,
                foreground: this.foreground,
            };
            return info;
        }
        if (node.tagName === 'svg' || node.tagName === 'MJX-CONTAINER') {
            info = {
                node: node,
                background: node.style.backgroundColor,
                foreground: node.style.color,
            };
            node.style.backgroundColor = this.background;
            node.style.color = this.foreground;
            return info;
        }
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('sre-highlighter-added', 'true');
        var padding = 40;
        var bbox = node.getBBox();
        rect.setAttribute('x', (bbox.x - padding).toString());
        rect.setAttribute('y', (bbox.y - padding).toString());
        rect.setAttribute('width', (bbox.width + 2 * padding).toString());
        rect.setAttribute('height', (bbox.height + 2 * padding).toString());
        var transform = node.getAttribute('transform');
        if (transform) {
            rect.setAttribute('transform', transform);
        }
        rect.setAttribute('fill', this.background);
        node.setAttribute(this.ATTR, 'true');
        node.parentNode.insertBefore(rect, node);
        info = { node: node, foreground: node.getAttribute('fill') };
        if (node.nodeName !== 'rect') {
            node.setAttribute('fill', this.foreground);
        }
        return info;
    };
    SvgHighlighter.prototype.setHighlighted = function (node) {
        if (node.tagName === 'svg') {
            _super.prototype.setHighlighted.call(this, node);
        }
    };
    SvgHighlighter.prototype.unhighlightNode = function (info) {
        var previous = info.node.previousSibling;
        if (previous && previous.hasAttribute('sre-highlighter-added')) {
            info.foreground
                ? info.node.setAttribute('fill', info.foreground)
                : info.node.removeAttribute('fill');
            info.node.parentNode.removeChild(previous);
            return;
        }
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    };
    SvgHighlighter.prototype.isMactionNode = function (node) {
        return node.getAttribute('data-mml-node') === this.mactionName;
    };
    SvgHighlighter.prototype.getMactionNodes = function (node) {
        return Array.from(node.querySelectorAll("[data-mml-node=\"".concat(this.mactionName, "\"]")));
    };
    return SvgHighlighter;
}(AbstractHighlighter));
var ChtmlHighlighter = (function (_super) {
    __extends(ChtmlHighlighter, _super);
    function ChtmlHighlighter() {
        var _this = _super.call(this) || this;
        _this.mactionName = 'mjx-maction';
        return _this;
    }
    ChtmlHighlighter.prototype.highlightNode = function (node) {
        var info = {
            node: node,
            background: node.style.backgroundColor,
            foreground: node.style.color,
        };
        if (!this.isHighlighted(node)) {
            node.style.backgroundColor = this.background;
            node.style.color = this.foreground;
        }
        return info;
    };
    ChtmlHighlighter.prototype.unhighlightNode = function (info) {
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    };
    ChtmlHighlighter.prototype.isMactionNode = function (node) {
        var _a;
        return ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.mactionName.toUpperCase();
    };
    ChtmlHighlighter.prototype.getMactionNodes = function (node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
    };
    return ChtmlHighlighter;
}(AbstractHighlighter));
function getHighlighter(back, fore, renderer) {
    var highlighter = new highlighterMapping[renderer]();
    highlighter.setColor(back, fore);
    return highlighter;
}
var highlighterMapping = {
    SVG: SvgHighlighter,
    CHTML: ChtmlHighlighter,
    generic: ChtmlHighlighter,
};
//# sourceMappingURL=Highlighter.js.map