const namedColors = {
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
    const channel = namedColors[color.color] || namedColors[deflt.color];
    channel.alpha = (_a = color.alpha) !== null && _a !== void 0 ? _a : deflt.alpha;
    return rgba(channel);
}
function rgba(color) {
    var _a;
    return `rgba(${color.red},${color.green},${color.blue},${(_a = color.alpha) !== null && _a !== void 0 ? _a : 1})`;
}
const DEFAULT_BACKGROUND = { color: 'blue', alpha: 1 };
const DEFAULT_FOREGROUND = { color: 'black', alpha: 1 };
let counter = 0;
class AbstractHighlighter {
    constructor() {
        this.counter = counter++;
        this.ATTR = 'sre-highlight-' + this.counter.toString();
        this.mactionName = '';
        this.currentHighlights = [];
    }
    highlight(nodes) {
        this.currentHighlights.push(nodes.map((node) => {
            const info = this.highlightNode(node);
            this.setHighlighted(node);
            return info;
        }));
    }
    highlightAll(node) {
        const mactions = this.getMactionNodes(node);
        for (let i = 0, maction; (maction = mactions[i]); i++) {
            this.highlight([maction]);
        }
    }
    unhighlight() {
        const nodes = this.currentHighlights.pop();
        if (!nodes) {
            return;
        }
        nodes.forEach((highlight) => {
            if (this.isHighlighted(highlight.node)) {
                this.unhighlightNode(highlight);
                this.unsetHighlighted(highlight.node);
            }
        });
    }
    unhighlightAll() {
        while (this.currentHighlights.length > 0) {
            this.unhighlight();
        }
    }
    setColor(background, foreground) {
        this._foreground = getColorString(foreground, DEFAULT_FOREGROUND);
        this._background = getColorString(background, DEFAULT_BACKGROUND);
    }
    get foreground() {
        return this._foreground;
    }
    get background() {
        return this._background;
    }
    getMactionNodes(node) {
        return Array.from(node.getElementsByClassName(this.mactionName));
    }
    isMactionNode(node) {
        const className = node.className || node.getAttribute('class');
        return className ? !!className.match(new RegExp(this.mactionName)) : false;
    }
    isHighlighted(node) {
        return node.hasAttribute(this.ATTR);
    }
    setHighlighted(node) {
        node.setAttribute(this.ATTR, 'true');
    }
    unsetHighlighted(node) {
        node.removeAttribute(this.ATTR);
    }
}
class SvgHighlighter extends AbstractHighlighter {
    constructor() {
        super();
        this.mactionName = 'maction';
    }
    highlightNode(node) {
        let info;
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
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('sre-highlighter-added', 'true');
        const padding = 40;
        const bbox = node.getBBox();
        rect.setAttribute('x', (bbox.x - padding).toString());
        rect.setAttribute('y', (bbox.y - padding).toString());
        rect.setAttribute('width', (bbox.width + 2 * padding).toString());
        rect.setAttribute('height', (bbox.height + 2 * padding).toString());
        const transform = node.getAttribute('transform');
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
    }
    setHighlighted(node) {
        if (node.tagName === 'svg') {
            super.setHighlighted(node);
        }
    }
    unhighlightNode(info) {
        const previous = info.node.previousSibling;
        if (previous && previous.hasAttribute('sre-highlighter-added')) {
            info.foreground
                ? info.node.setAttribute('fill', info.foreground)
                : info.node.removeAttribute('fill');
            info.node.parentNode.removeChild(previous);
            return;
        }
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    }
    isMactionNode(node) {
        return node.getAttribute('data-mml-node') === this.mactionName;
    }
    getMactionNodes(node) {
        return Array.from(node.querySelectorAll(`[data-mml-node="${this.mactionName}"]`));
    }
}
class ChtmlHighlighter extends AbstractHighlighter {
    constructor() {
        super();
        this.mactionName = 'mjx-maction';
    }
    highlightNode(node) {
        const info = {
            node: node,
            background: node.style.backgroundColor,
            foreground: node.style.color,
        };
        if (!this.isHighlighted(node)) {
            node.style.backgroundColor = this.background;
            node.style.color = this.foreground;
        }
        return info;
    }
    unhighlightNode(info) {
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    }
    isMactionNode(node) {
        var _a;
        return ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.mactionName.toUpperCase();
    }
    getMactionNodes(node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
    }
}
export function getHighlighter(back, fore, renderer) {
    const highlighter = new highlighterMapping[renderer]();
    highlighter.setColor(back, fore);
    return highlighter;
}
const highlighterMapping = {
    SVG: SvgHighlighter,
    CHTML: ChtmlHighlighter,
    generic: ChtmlHighlighter,
};
//# sourceMappingURL=Highlighter.js.map