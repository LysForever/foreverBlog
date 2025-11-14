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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechExplorer = void 0;
exports.isContainer = isContainer;
exports.hasModifiers = hasModifiers;
var MathItem_js_1 = require("../../core/MathItem.js");
var Explorer_js_1 = require("./Explorer.js");
var SpeechUtil_js_1 = require("../speech/SpeechUtil.js");
var context_js_1 = require("../../util/context.js");
var nav = '[data-speech-node]';
function isContainer(el) {
    return el.matches('mjx-container');
}
function hasModifiers(event, shift) {
    if (shift === void 0) { shift = true; }
    return ((event.shiftKey && shift) || event.metaKey || event.altKey || event.ctrlKey);
}
function helpMessage(title, select) {
    return "\n<H2>Exploring expressions ".concat(title, "</h2>\n\n<p>The mathematics on this page is being rendered by <a\nhref=\"https://www.mathjax.org/\" target=\"_blank\">MathJax</a>, which\ngenerates both the text spoken by screen readers, as well as the\nvisual layout for sighted users.</p>\n\n<p>Expressions typeset by MathJax can be explored interactively, and\nare focusable.  You can use the <kbd>Tab</kbd> key to move to a typeset\nexpression").concat(select, ".  Initially, the expression will be read in full,\nbut you can use the following keys to explore the expression\nfurther:<p>\n\n<ul>\n\n<li><kbd>Down Arrow</kbd> moves one level deeper into the expression to\nallow you to explore the current subexpression term by term.</li>\n\n<li><kbd>Up Arrow</kbd> moves back up a level within the expression.</li>\n\n<li><kbd>Right Arrow</kbd> moves to the next term in the current\nsubexpression.</li>\n\n<li><kbd>Left Arrow</kbd> moves to the next term in the current\nsubexpression.</li>\n\n<li><kbd>Shift</kbd>+<kbd>Arrow</kbd> moves to a neighboring cell within a table.\n\n<li><kbd>0-9</kbd>+<kbd>0-9</kbd> jumps to a cell by its index in the table, where 0 = 10.\n\n<li><kbd>Home</kbd> takes you to the top of the expression.</li>\n\n<li><kbd>Enter</kbd> or <kbd>Return</kbd> clicks a link or activates an active\nsubexpression.</li>\n\n<li><kbd>Space</kbd> opens the MathJax contextual menu where you can view\nor copy the source format of the expression, or modify MathJax's\nsettings.</li>\n\n<li><kbd>Escape</kbd> exits the expression explorer.</li>\n\n<li><kbd>x</kbd> gives a summary of the current subexpression.</li>\n\n<li><kbd>z</kbd> gives the full text of a collapsed expression.</li>\n\n<li><kbd>d</kbd> gives the current depth within the expression.</li>\n\n<li><kbd>s</kbd> starts or stops auto-voicing with synchronized highlighting.</li>\n\n<li><kbd>v</kbd> marks the current position in the expression.</li>\n\n<li><kbd>p</kbd> cycles through the marked positions in the expression.</li>\n\n<li><kbd>u</kbd> clears all marked positions and returns to the starting position.</li>\n\n<li><kbd>&gt;</kbd> cycles through the available speech rule sets\n(MathSpeak, ClearSpeak).</li>\n\n<li><kbd>&lt;</kbd> cycles through the verbosity levels for the current\nrule set.</li>\n\n<li><kbd>h</kbd> produces this help listing.</li>\n</ul>\n\n<p>The MathJax contextual menu allows you to enable or disable speech\nor Braille generation for mathematical expressions, the language to\nuse for the spoken mathematics, and other features of MathJax.  In\nparticular, the Explorer submenu allows you to specify how the\nmathematics should be identified in the page (e.g., by saying \"math\"\nwhen the expression is spoken), and whether or not to include a\nmessage about the letter \"h\" bringing up this dialog box.</p>\n\n<p>The contextual menu also provides options for viewing or copying a\nMathML version of the expression or its original source format,\ncreating an SVG version of the expression, and viewing various other\ninformation.</p>\n\n<p>For more help, see the <a\nhref=\"https://docs.mathjax.org/en/latest/basic/accessibility.html\"\ntarge=\"_blank\">MathJax accessibility documentation.</a></p>\n");
}
var helpData = new Map([
    [
        'MacOS',
        [
            'on MacOS and iOS using VoiceOver',
            ', or the VoiceOver arrow keys to select an expression',
        ],
    ],
    [
        'Windows',
        [
            'in Windows using NVDA or JAWS',
            ". The screen reader should enter focus or forms mode automatically\nwhen the expression gets the browser focus, but if not, you can toggle\nfocus mode using NVDA+space in NVDA; for JAWS, Enter should start\nforms mode while Numpad Plus leaves it.  Also note that you can use\nthe NVDA or JAWS key plus the arrow keys to explore the expression\neven in browse mode, and you can use NVDA+shift+arrow keys to\nnavigate out of an expression that has the focus in NVDA",
        ],
    ],
    [
        'Unix',
        [
            'in Unix using Orca',
            ", and Orca should enter focus mode automatically.  If not, use the\nOrca+a key to toggle focus mode on or off.  Also note that you can use\nOrca+arrow keys to explore expressions even in browse mode",
        ],
    ],
    ['unknown', ['with a Screen Reader.', '']],
]);
var SpeechExplorer = (function (_super) {
    __extends(SpeechExplorer, _super);
    function SpeechExplorer(document, pool, region, node, brailleRegion, magnifyRegion, _mml, item) {
        var _this = _super.call(this, document, pool, null, node) || this;
        _this.document = document;
        _this.pool = pool;
        _this.region = region;
        _this.node = node;
        _this.brailleRegion = brailleRegion;
        _this.magnifyRegion = magnifyRegion;
        _this.item = item;
        _this.sound = false;
        _this.current = null;
        _this.clicked = null;
        _this.refocus = null;
        _this.focusSpeech = false;
        _this.restarted = null;
        _this.speech = null;
        _this.speechType = '';
        _this.img = null;
        _this.attached = false;
        _this.eventsAttached = false;
        _this.marks = [];
        _this.currentMark = -1;
        _this.lastMark = null;
        _this.pendingIndex = [];
        _this.cellTypes = ['cell', 'line'];
        _this.events = _super.prototype.Events.call(_this).concat([
            ['focusin', _this.FocusIn.bind(_this)],
            ['focusout', _this.FocusOut.bind(_this)],
            ['keydown', _this.KeyDown.bind(_this)],
            ['mousedown', _this.MouseDown.bind(_this)],
            ['click', _this.Click.bind(_this)],
            ['dblclick', _this.DblClick.bind(_this)],
        ]);
        return _this;
    }
    Object.defineProperty(SpeechExplorer.prototype, "generators", {
        get: function () {
            var _a;
            return (_a = this.item) === null || _a === void 0 ? void 0 : _a.generatorPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpeechExplorer.prototype, "role", {
        get: function () {
            return this.item.ariaRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpeechExplorer.prototype, "description", {
        get: function () {
            return this.item.roleDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpeechExplorer.prototype, "none", {
        get: function () {
            return this.item.none;
        },
        enumerable: false,
        configurable: true
    });
    SpeechExplorer.prototype.FocusIn = function (_event) {
        if (this.item.outputData.nofocus) {
            this.item.outputData.nofocus = false;
            return;
        }
        if (!this.clicked) {
            this.Start();
        }
        this.clicked = null;
    };
    SpeechExplorer.prototype.FocusOut = function (_event) {
        if (this.current && !this.focusSpeech) {
            this.setCurrent(null);
            this.Stop();
            if (!document.hasFocus()) {
                this.focusTop();
            }
        }
    };
    SpeechExplorer.prototype.KeyDown = function (event) {
        this.pendingIndex.shift();
        this.region.cancelVoice();
        if (hasModifiers(event, false))
            return;
        var CLASS = this.constructor;
        var key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
        var _a = __read(CLASS.keyMap.get(key) || [], 2), action = _a[0], value = _a[1];
        var result = action
            ? value === undefined || this.active
                ? action(this, event)
                : value
            : this.undefinedKey(event);
        if (result)
            return;
        this.stopEvent(event);
        if (result === false && this.sound) {
            this.NoMove();
        }
    };
    SpeechExplorer.prototype.MouseDown = function (event) {
        var _a;
        this.pendingIndex = [];
        this.region.cancelVoice();
        if (hasModifiers(event) || event.buttons === 2) {
            this.item.outputData.nofocus = true;
            return;
        }
        var clicked = this.findClicked(event.target, event.x, event.y);
        if (clicked === this.document.infoIcon) {
            this.stopEvent(event);
            return;
        }
        (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
        if (event.target.getAttribute('sre-highlighter-added')) {
            this.refocus = clicked;
        }
        else {
            this.clicked = clicked;
        }
    };
    SpeechExplorer.prototype.Click = function (event) {
        if (hasModifiers(event) ||
            event.buttons === 2 ||
            document.getSelection().type === 'Range') {
            this.FocusOut(null);
            return;
        }
        var clicked = this.findClicked(event.target, event.x, event.y);
        if (clicked === this.document.infoIcon) {
            this.stopEvent(event);
            this.help();
            return;
        }
        if (!clicked || this.node.contains(clicked)) {
            this.stopEvent(event);
            this.refocus = clicked;
            if (!this.triggerLinkMouse()) {
                this.Start();
            }
        }
    };
    SpeechExplorer.prototype.DblClick = function (event) {
        var _a;
        var direction = (_a = document.getSelection().direction) !== null && _a !== void 0 ? _a : 'none';
        if (hasModifiers(event) || event.buttons === 2 || direction !== 'none') {
            this.FocusOut(null);
        }
        else {
            this.stopEvent(event);
            this.refocus = this.rootNode();
            this.Start();
        }
    };
    SpeechExplorer.prototype.spaceKey = function () {
        this.refocus = this.current;
        return true;
    };
    SpeechExplorer.prototype.hKey = function () {
        this.refocus = this.current;
        this.help();
    };
    SpeechExplorer.prototype.escapeKey = function () {
        this.Stop();
        this.focusTop();
        return true;
    };
    SpeechExplorer.prototype.enterKey = function (event) {
        if (this.active) {
            if (this.triggerLinkKeyboard(event)) {
                this.Stop();
            }
            else {
                var expandable = this.actionable(this.current);
                if (!expandable) {
                    return false;
                }
                this.refocus = expandable;
                expandable.dispatchEvent(new Event('click'));
            }
        }
        else {
            this.Start();
        }
    };
    SpeechExplorer.prototype.homeKey = function () {
        this.setCurrent(this.rootNode());
    };
    SpeechExplorer.prototype.moveDown = function (shift) {
        return shift
            ? this.moveToNeighborCell(1, 0)
            : this.moveTo(this.firstNode(this.current));
    };
    SpeechExplorer.prototype.moveUp = function (shift) {
        return shift
            ? this.moveToNeighborCell(-1, 0)
            : this.moveTo(this.getParent(this.current));
    };
    SpeechExplorer.prototype.moveRight = function (shift) {
        return shift
            ? this.moveToNeighborCell(0, 1)
            : this.moveTo(this.nextSibling(this.current));
    };
    SpeechExplorer.prototype.moveLeft = function (shift) {
        return shift
            ? this.moveToNeighborCell(0, -1)
            : this.moveTo(this.prevSibling(this.current));
    };
    SpeechExplorer.prototype.moveTo = function (node) {
        if (!node)
            return false;
        this.setCurrent(node);
    };
    SpeechExplorer.prototype.moveToNeighborCell = function (di, dj) {
        var cell = this.tableCell(this.current);
        if (!cell)
            return false;
        var _a = __read(this.cellPosition(cell), 2), i = _a[0], j = _a[1];
        if (i == null)
            return false;
        var move = this.cellAt(this.cellTable(cell), i + di, j + dj);
        if (!move)
            return false;
        this.setCurrent(move);
    };
    SpeechExplorer.prototype.undefinedKey = function (event) {
        return !this.active || hasModifiers(event);
    };
    SpeechExplorer.prototype.addMark = function () {
        if (this.current === this.marks[this.marks.length - 1]) {
            this.setCurrent(this.current);
        }
        else {
            this.currentMark = this.marks.length - 1;
            this.marks.push(this.current);
            this.speak('Position marked');
        }
    };
    SpeechExplorer.prototype.prevMark = function () {
        if (this.currentMark < 0) {
            if (this.marks.length === 0) {
                this.setCurrent(this.lastMark || this.rootNode());
                return;
            }
            this.currentMark = this.marks.length - 1;
        }
        var current = this.currentMark;
        this.setCurrent(this.marks[current]);
        this.currentMark = current - 1;
    };
    SpeechExplorer.prototype.clearMarks = function () {
        this.marks = [];
        this.currentMark = -1;
        this.prevMark();
    };
    SpeechExplorer.prototype.autoVoice = function () {
        var value = !this.document.options.a11y.voicing;
        if (this.document.menu) {
            this.document.menu.menu.pool.lookup('voicing').setValue(value);
        }
        else {
            this.document.options.a11y.voicing = value;
        }
        this.Update();
    };
    SpeechExplorer.prototype.numberKey = function (n) {
        var _this = this;
        if (!this.tableCell(this.current))
            return false;
        if (n === 0) {
            n = 10;
        }
        if (this.pendingIndex.length) {
            var table = this.cellTable(this.tableCell(this.current));
            var cell_1 = this.cellAt(table, this.pendingIndex[0] - 1, n - 1);
            this.pendingIndex = [];
            this.speak(String(n));
            if (!cell_1)
                return false;
            setTimeout(function () { return _this.setCurrent(cell_1); }, 500);
        }
        else {
            this.pendingIndex = [null, n];
            this.speak("Jump to row ".concat(n, " and column"));
        }
    };
    SpeechExplorer.prototype.depth = function () {
        var _a, _b, _c;
        if (this.speechType === 'd') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'd';
        var parts = [
            [
                (_a = this.node.getAttribute('data-semantic-level')) !== null && _a !== void 0 ? _a : 'Level',
                (_b = this.current.getAttribute('aria-level')) !== null && _b !== void 0 ? _b : '0',
            ]
                .join(' ')
                .trim(),
        ];
        var action = this.actionable(this.current);
        if (action) {
            parts.unshift((_c = this.node.getAttribute(action.getAttribute('toggle') === '1'
                ? 'data-semantic-expandable'
                : 'data-semantic-collapsible')) !== null && _c !== void 0 ? _c : '');
        }
        this.speak(parts.join(' '), this.current.getAttribute(SpeechUtil_js_1.SemAttr.BRAILLE));
    };
    SpeechExplorer.prototype.summary = function () {
        if (this.speechType === 'x') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'x';
        var summary = this.current.getAttribute(SpeechUtil_js_1.SemAttr.SUMMARY);
        this.speak(summary, this.current.getAttribute(SpeechUtil_js_1.SemAttr.BRAILLE), this.SsmlAttributes(this.current, SpeechUtil_js_1.SemAttr.SUMMARY_SSML));
    };
    SpeechExplorer.prototype.nextRules = function () {
        this.node.removeAttribute('data-speech-attached');
        this.restartAfter(this.generators.nextRules(this.item));
    };
    SpeechExplorer.prototype.nextStyle = function () {
        this.node.removeAttribute('data-speech-attached');
        this.restartAfter(this.generators.nextStyle(this.current, this.item));
    };
    SpeechExplorer.prototype.details = function () {
        var _this = this;
        var action = this.actionable(this.current);
        if (!action ||
            !action.getAttribute('data-collapsible') ||
            action.getAttribute('toggle') !== '1' ||
            this.speechType === 'z') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'z';
        var id = this.nodeId(this.current);
        var current;
        this.item.root.walkTree(function (node) {
            if (node.attributes.get('data-semantic-id') === id) {
                current = node;
            }
        });
        var mml = this.item.toMathML(current, this.item);
        if (!current.isKind('math')) {
            mml = "<math>".concat(mml, "</math>");
        }
        mml = mml.replace(/ (?:data-semantic-|aria-|data-speech-|data-latex).*?=".*?"/g, '');
        this.item
            .speechFor(mml)
            .then(function (_a) {
            var _b = __read(_a, 2), speech = _b[0], braille = _b[1];
            return _this.speak(speech, braille);
        });
    };
    SpeechExplorer.prototype.help = function () {
        var _this = this;
        var adaptor = this.document.adaptor;
        var helpBackground = adaptor.node('mjx-help-background');
        var close = function (event) {
            helpBackground.remove();
            _this.node.focus();
            _this.stopEvent(event);
        };
        helpBackground.addEventListener('click', close);
        var helpSizer = adaptor.node('mjx-help-sizer', {}, [
            adaptor.node('mjx-help-dialog', { tabindex: 0, role: 'dialog', 'aria-labeledby': 'mjx-help-label' }, [
                adaptor.node('h1', { id: 'mjx-help-label' }, [
                    adaptor.text('MathJax Expression Explorer Help'),
                ]),
                adaptor.node('div'),
                adaptor.node('input', { type: 'button', value: 'Close' }),
            ]),
        ]);
        helpBackground.append(helpSizer);
        var help = helpSizer.firstChild;
        help.addEventListener('click', function (event) { return _this.stopEvent(event); });
        help.lastChild.addEventListener('click', close);
        help.addEventListener('keydown', function (event) {
            if (event.code === 'Escape') {
                close(event);
            }
        });
        var _a = __read(helpData.get(context_js_1.context.os), 2), title = _a[0], select = _a[1];
        help.childNodes[1].innerHTML = helpMessage(title, select);
        document.body.append(helpBackground);
        help.focus();
    };
    SpeechExplorer.prototype.setCurrent = function (node, addDescription) {
        var e_1, _a, e_2, _b;
        if (addDescription === void 0) { addDescription = false; }
        this.speechType = '';
        if (!document.hasFocus()) {
            this.refocus = this.current;
        }
        this.node.setAttribute('aria-busy', 'true');
        if (this.current) {
            try {
                for (var _c = __values(this.getSplitNodes(this.current)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var part = _d.value;
                    part.classList.remove('mjx-selected');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.pool.unhighlight();
            if (this.document.options.a11y.tabSelects === 'last') {
                this.refocus = this.current;
            }
            if (!node) {
                this.lastMark = this.current;
                this.removeSpeech();
            }
            this.current = null;
        }
        this.current = node;
        this.currentMark = -1;
        if (this.current) {
            var parts = this.getSplitNodes(this.current);
            try {
                for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                    var part = parts_1_1.value;
                    part.classList.add('mjx-selected');
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (parts_1_1 && !parts_1_1.done && (_b = parts_1.return)) _b.call(parts_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.pool.highlight(parts);
            this.addSpeech(node, addDescription);
        }
        this.node.removeAttribute('aria-busy');
    };
    SpeechExplorer.prototype.getSplitNodes = function (node) {
        var id = this.nodeId(node);
        if (!id) {
            return [node];
        }
        return Array.from(this.node.querySelectorAll("[data-semantic-id=\"".concat(id, "\"]")));
    };
    SpeechExplorer.prototype.addSpeech = function (node, describe) {
        var _a;
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        var speech = [
            node.getAttribute(SpeechUtil_js_1.SemAttr.PREFIX),
            node.getAttribute(SpeechUtil_js_1.SemAttr.SPEECH),
            node.getAttribute(SpeechUtil_js_1.SemAttr.POSTFIX),
        ]
            .join(' ')
            .trim();
        if (describe) {
            var description = this.description === this.none ? '' : ', ' + this.description;
            if (this.document.options.a11y.help) {
                description += ', press h for help';
            }
            speech += description;
        }
        this.speak(speech, node.getAttribute(SpeechUtil_js_1.SemAttr.BRAILLE), this.SsmlAttributes(node, SpeechUtil_js_1.SemAttr.SPEECH_SSML));
        this.node.setAttribute('tabindex', '-1');
    };
    SpeechExplorer.prototype.removeSpeech = function () {
        if (this.speech) {
            this.speech.remove();
            this.speech = null;
            if (this.img) {
                this.node.append(this.img);
            }
            this.node.setAttribute('tabindex', '0');
        }
    };
    SpeechExplorer.prototype.speak = function (speech, braille, ssml, description) {
        if (braille === void 0) { braille = ''; }
        if (ssml === void 0) { ssml = null; }
        if (description === void 0) { description = this.none; }
        var oldspeech = this.speech;
        this.speech = document.createElement('mjx-speech');
        this.speech.setAttribute('role', this.role);
        this.speech.setAttribute('aria-label', speech);
        this.speech.setAttribute(SpeechUtil_js_1.SemAttr.SPEECH, speech);
        if (ssml) {
            this.speech.setAttribute(SpeechUtil_js_1.SemAttr.PREFIX_SSML, ssml[0] || '');
            this.speech.setAttribute(SpeechUtil_js_1.SemAttr.SPEECH_SSML, ssml[1] || '');
            this.speech.setAttribute(SpeechUtil_js_1.SemAttr.POSTFIX_SSML, ssml[2] || '');
        }
        if (braille) {
            this.speech.setAttribute('aria-braillelabel', braille);
        }
        this.speech.setAttribute('aria-roledescription', description);
        this.speech.setAttribute('tabindex', '0');
        this.node.append(this.speech);
        this.focusSpeech = true;
        this.speech.focus();
        this.focusSpeech = false;
        this.Update();
        if (oldspeech) {
            setTimeout(function () { return oldspeech.remove(); }, 100);
        }
    };
    SpeechExplorer.prototype.attachSpeech = function () {
        var e_3, _a;
        var _b;
        var item = this.item;
        var container = this.node;
        if (!container.hasAttribute('has-speech')) {
            try {
                for (var _c = __values(Array.from(container.childNodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var child = _d.value;
                    child.setAttribute('aria-hidden', 'true');
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            container.setAttribute('has-speech', 'true');
        }
        var description = item.roleDescription;
        var speech = (container.getAttribute(SpeechUtil_js_1.SemAttr.SPEECH) || '') +
            (description ? ', ' + description : '');
        (_b = this.img) === null || _b === void 0 ? void 0 : _b.remove();
        this.img = this.document.adaptor.node('mjx-speech', {
            'aria-label': speech,
            role: 'img',
            'aria-roledescription': item.none,
        });
        container.appendChild(this.img);
    };
    SpeechExplorer.prototype.detachSpeech = function () {
        var e_4, _a;
        var _b;
        var container = this.node;
        (_b = this.img) === null || _b === void 0 ? void 0 : _b.remove();
        container.removeAttribute('has-speech');
        try {
            for (var _c = __values(Array.from(container.childNodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var child = _d.value;
                child.removeAttribute('aria-hidden');
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    SpeechExplorer.prototype.focus = function () {
        this.node.focus();
    };
    SpeechExplorer.prototype.nodeId = function (node) {
        return node.getAttribute('data-semantic-id');
    };
    SpeechExplorer.prototype.parentId = function (node) {
        return node.getAttribute('data-semantic-parent');
    };
    SpeechExplorer.prototype.getNode = function (id) {
        return id ? this.node.querySelector("[data-semantic-id=\"".concat(id, "\"]")) : null;
    };
    SpeechExplorer.prototype.getParent = function (node) {
        return this.getNode(this.parentId(node));
    };
    SpeechExplorer.prototype.childArray = function (node) {
        return node ? node.getAttribute('data-semantic-children').split(/,/) : [];
    };
    SpeechExplorer.prototype.isCell = function (node) {
        return (!!node && this.cellTypes.includes(node.getAttribute('data-semantic-type')));
    };
    SpeechExplorer.prototype.isRow = function (node) {
        return !!node && node.getAttribute('data-semantic-type') === 'row';
    };
    SpeechExplorer.prototype.tableCell = function (node) {
        while (node && node !== this.node) {
            if (this.isCell(node)) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    };
    SpeechExplorer.prototype.cellTable = function (cell) {
        var row = this.getParent(cell);
        return this.isRow(row) ? this.getParent(row) : row;
    };
    SpeechExplorer.prototype.cellPosition = function (cell) {
        var row = this.getParent(cell);
        var j = this.childArray(row).indexOf(this.nodeId(cell));
        if (!this.isRow(row)) {
            return [j, 1];
        }
        var table = this.getParent(row);
        var i = this.childArray(table).indexOf(this.nodeId(row));
        return [i, j];
    };
    SpeechExplorer.prototype.cellAt = function (table, i, j) {
        var row = this.getNode(this.childArray(table)[i]);
        if (!this.isRow(row)) {
            return j === 1 ? row : null;
        }
        var cell = this.getNode(this.childArray(row)[j]);
        return cell;
    };
    SpeechExplorer.prototype.firstNode = function (node) {
        var e_5, _a;
        var owns = node.getAttribute('data-semantic-owns');
        if (!owns) {
            return node.querySelector(nav);
        }
        var ownsList = owns.split(/ /);
        try {
            for (var ownsList_1 = __values(ownsList), ownsList_1_1 = ownsList_1.next(); !ownsList_1_1.done; ownsList_1_1 = ownsList_1.next()) {
                var id = ownsList_1_1.value;
                var node_1 = this.getNode(id);
                if (node_1 === null || node_1 === void 0 ? void 0 : node_1.hasAttribute('data-speech-node')) {
                    return node_1;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (ownsList_1_1 && !ownsList_1_1.done && (_a = ownsList_1.return)) _a.call(ownsList_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return node.querySelector(nav);
    };
    SpeechExplorer.prototype.rootNode = function () {
        var base = this.node.querySelector('[data-semantic-structure]');
        if (!base) {
            return this.node.querySelector(nav);
        }
        var id = base
            .getAttribute('data-semantic-structure')
            .split(/ /)[0]
            .replace('(', '');
        return this.getNode(id);
    };
    SpeechExplorer.prototype.nextSibling = function (node) {
        var _a;
        var id = this.parentId(node);
        if (!id)
            return null;
        var owns = (_a = this.getNode(id)
            .getAttribute('data-semantic-owns')) === null || _a === void 0 ? void 0 : _a.split(/ /);
        if (!owns)
            return null;
        var i = owns.indexOf(this.nodeId(node));
        var next;
        do {
            next = this.getNode(owns[++i]);
        } while (next && !next.hasAttribute('data-speech-node'));
        return next;
    };
    SpeechExplorer.prototype.prevSibling = function (node) {
        var _a;
        var id = this.parentId(node);
        if (!id)
            return null;
        var owns = (_a = this.getNode(id)
            .getAttribute('data-semantic-owns')) === null || _a === void 0 ? void 0 : _a.split(/ /);
        if (!owns)
            return null;
        var i = owns.indexOf(this.nodeId(node));
        var prev;
        do {
            prev = this.getNode(owns[--i]);
        } while (prev && !prev.hasAttribute('data-speech-node'));
        return prev;
    };
    SpeechExplorer.prototype.findClicked = function (node, x, y) {
        var e_6, _a;
        var icon = this.document.infoIcon;
        if (icon === node || icon.contains(node)) {
            return icon;
        }
        if (this.node.getAttribute('jax') !== 'SVG') {
            return node.closest(nav);
        }
        var found = null;
        var clicked = this.node;
        while (clicked) {
            if (clicked.matches(nav)) {
                found = clicked;
            }
            var nodes = Array.from(clicked.childNodes);
            clicked = null;
            try {
                for (var nodes_1 = (e_6 = void 0, __values(nodes)), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var child = nodes_1_1.value;
                    if (child !== this.speech &&
                        child !== this.img &&
                        child.tagName.toLowerCase() !== 'rect') {
                        var _b = child.getBoundingClientRect(), left = _b.left, right = _b.right, top_1 = _b.top, bottom = _b.bottom;
                        if (left <= x && x <= right && top_1 <= y && y <= bottom) {
                            clicked = child;
                            break;
                        }
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        return found;
    };
    SpeechExplorer.prototype.focusTop = function () {
        this.focusSpeech = true;
        this.node.focus();
        this.focusSpeech = false;
    };
    SpeechExplorer.prototype.SsmlAttributes = function (node, center) {
        return [
            node.getAttribute(SpeechUtil_js_1.SemAttr.PREFIX_SSML),
            node.getAttribute(center),
            node.getAttribute(SpeechUtil_js_1.SemAttr.POSTFIX_SSML),
        ];
    };
    SpeechExplorer.prototype.restartAfter = function (promise) {
        return __awaiter(this, void 0, void 0, function () {
            var current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, promise];
                    case 1:
                        _a.sent();
                        this.attachSpeech();
                        current = this.current;
                        this.current = null;
                        this.pool.unhighlight();
                        this.setCurrent(current);
                        return [2];
                }
            });
        });
    };
    SpeechExplorer.prototype.findStartNode = function () {
        var node = this.refocus || this.current;
        if (!node && this.restarted) {
            node = this.node.querySelector(this.restarted);
        }
        this.refocus = this.restarted = null;
        return node;
    };
    SpeechExplorer.prototype.Start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node, options, a11y;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.attached || this.active)
                            return [2];
                        this.document.activeItem = this.item;
                        if (!(this.item.state() < MathItem_js_1.STATE.ATTACHSPEECH)) return [3, 2];
                        this.item.attachSpeech(this.document);
                        return [4, this.generators.promise];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.focusSpeech)
                            return [2];
                        this.node.classList.add('mjx-explorer-active');
                        this.node.append(this.document.infoIcon);
                        node = this.findStartNode();
                        this.setCurrent(node || this.rootNode(), !node);
                        _super.prototype.Start.call(this);
                        options = this.document.options;
                        a11y = options.a11y;
                        if (a11y.subtitles && a11y.speech && options.enableSpeech) {
                            this.region.Show(this.node, this.highlighter);
                        }
                        if (a11y.viewBraille && a11y.braille && options.enableBraille) {
                            this.brailleRegion.Show(this.node, this.highlighter);
                        }
                        if (a11y.keyMagnifier) {
                            this.magnifyRegion.Show(this.current, this.highlighter);
                        }
                        this.Update();
                        return [2];
                }
            });
        });
    };
    SpeechExplorer.prototype.Stop = function () {
        if (this.active) {
            var description = this.description;
            if (this.node.getAttribute('aria-roledescription') !== description) {
                this.node.setAttribute('aria-roledescription', description);
            }
            this.node.classList.remove('mjx-explorer-active');
            this.document.infoIcon.remove();
            this.pool.unhighlight();
            this.magnifyRegion.Hide();
            this.region.Hide();
            this.brailleRegion.Hide();
        }
        _super.prototype.Stop.call(this);
    };
    SpeechExplorer.prototype.Update = function () {
        if (!this.active)
            return;
        this.region.node = this.node;
        this.generators.updateRegions(this.speech || this.node, this.region, this.brailleRegion);
        this.magnifyRegion.Update(this.current);
    };
    SpeechExplorer.prototype.Attach = function () {
        if (this.attached)
            return;
        _super.prototype.Attach.call(this);
        this.node.setAttribute('tabindex', '0');
        this.attached = true;
    };
    SpeechExplorer.prototype.Detach = function () {
        var _a;
        _super.prototype.RemoveEvents.call(this);
        this.node.removeAttribute('role');
        this.node.removeAttribute('aria-roledescription');
        this.node.removeAttribute('aria-label');
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        if (this.active) {
            this.node.setAttribute('tabindex', '0');
        }
        this.attached = false;
    };
    SpeechExplorer.prototype.NoMove = function () {
        (0, SpeechUtil_js_1.honk)();
    };
    SpeechExplorer.prototype.AddEvents = function () {
        if (!this.eventsAttached) {
            _super.prototype.AddEvents.call(this);
            this.eventsAttached = true;
        }
    };
    SpeechExplorer.prototype.actionable = function (node) {
        var parent = node === null || node === void 0 ? void 0 : node.parentNode;
        return parent && this.highlighter.isMactionNode(parent) ? parent : null;
    };
    SpeechExplorer.prototype.triggerLinkKeyboard = function (event) {
        if (!this.current) {
            if (event.target instanceof HTMLAnchorElement) {
                event.target.dispatchEvent(new MouseEvent('click'));
                return true;
            }
            return false;
        }
        return this.triggerLink(this.current);
    };
    SpeechExplorer.prototype.triggerLink = function (node) {
        var _this = this;
        var _a;
        var focus = (_a = node === null || node === void 0 ? void 0 : node.getAttribute('data-semantic-postfix')) === null || _a === void 0 ? void 0 : _a.match(/(^| )link($| )/);
        if (focus) {
            while (node && node !== this.node) {
                if (node instanceof HTMLAnchorElement) {
                    node.dispatchEvent(new MouseEvent('click'));
                    setTimeout(function () { return _this.FocusOut(null); }, 50);
                    return true;
                }
                node = node.parentNode;
            }
        }
        return false;
    };
    SpeechExplorer.prototype.triggerLinkMouse = function () {
        var node = this.refocus;
        while (node && node !== this.node) {
            if (this.triggerLink(node)) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    SpeechExplorer.prototype.semanticFocus = function () {
        var focus = [];
        var name = 'data-semantic-id';
        var node = this.current || this.refocus || this.node;
        var action = this.actionable(node);
        if (action) {
            name = action.hasAttribute('data-maction-id') ? 'data-maction-id' : 'id';
            node = action;
            focus.push(nav);
        }
        var attr = node.getAttribute(name);
        if (attr) {
            focus.unshift("[".concat(name, "=\"").concat(attr, "\"]"));
        }
        return focus.join(' ');
    };
    SpeechExplorer.keyMap = new Map(__spreadArray([
        ['Tab', [function () { return true; }]],
        ['Escape', [function (explorer) { return explorer.escapeKey(); }]],
        ['Enter', [function (explorer, event) { return explorer.enterKey(event); }]],
        ['Home', [function (explorer) { return explorer.homeKey(); }]],
        [
            'ArrowDown',
            [function (explorer, event) { return explorer.moveDown(event.shiftKey); }, true],
        ],
        ['ArrowUp', [function (explorer, event) { return explorer.moveUp(event.shiftKey); }, true]],
        [
            'ArrowLeft',
            [function (explorer, event) { return explorer.moveLeft(event.shiftKey); }, true],
        ],
        [
            'ArrowRight',
            [function (explorer, event) { return explorer.moveRight(event.shiftKey); }, true],
        ],
        [' ', [function (explorer) { return explorer.spaceKey(); }]],
        ['h', [function (explorer) { return explorer.hKey(); }]],
        ['>', [function (explorer) { return explorer.nextRules(); }, false]],
        ['<', [function (explorer) { return explorer.nextStyle(); }, false]],
        ['x', [function (explorer) { return explorer.summary(); }, false]],
        ['z', [function (explorer) { return explorer.details(); }, false]],
        ['d', [function (explorer) { return explorer.depth(); }, false]],
        ['v', [function (explorer) { return explorer.addMark(); }, false]],
        ['p', [function (explorer) { return explorer.prevMark(); }, false]],
        ['u', [function (explorer) { return explorer.clearMarks(); }, false]],
        ['s', [function (explorer) { return explorer.autoVoice(); }, false]]
    ], __read(__spreadArray([], __read('0123456789'), false).map(function (n) { return [
        n,
        [function (explorer) { return explorer.numberKey(parseInt(n)); }, false],
    ]; })), false));
    return SpeechExplorer;
}(Explorer_js_1.AbstractExplorer));
exports.SpeechExplorer = SpeechExplorer;
//# sourceMappingURL=KeyExplorer.js.map