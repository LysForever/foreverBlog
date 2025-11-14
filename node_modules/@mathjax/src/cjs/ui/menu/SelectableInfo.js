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
exports.SelectableInfo = void 0;
var mj_context_menu_js_1 = require("./mj-context-menu.js");
var SelectableInfo = (function (_super) {
    __extends(SelectableInfo, _super);
    function SelectableInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectableInfo.prototype.keydown = function (event) {
        if (event.key === 'a' && (event.ctrlKey || event.metaKey)) {
            this.selectAll();
            this.stop(event);
            return;
        }
        _super.prototype.keydown.call(this, event);
    };
    SelectableInfo.prototype.selectAll = function () {
        var selection = document.getSelection();
        selection.selectAllChildren(this.html.querySelector('.CtxtMenu_InfoContent').firstChild);
    };
    SelectableInfo.prototype.copyToClipboard = function () {
        this.selectAll();
        try {
            document.execCommand('copy');
        }
        catch (err) {
            alert("Can't copy to clipboard: ".concat(err.message));
        }
        document.getSelection().removeAllRanges();
    };
    SelectableInfo.prototype.generateHtml = function () {
        var _this = this;
        _super.prototype.generateHtml.call(this);
        var footer = this.html.querySelector('span.' + mj_context_menu_js_1.HtmlClasses['INFOSIGNATURE']);
        var button = footer.appendChild(document.createElement('input'));
        button.type = 'button';
        button.value = 'Copy to Clipboard';
        button.addEventListener('click', function (_event) {
            return _this.copyToClipboard();
        });
    };
    return SelectableInfo;
}(mj_context_menu_js_1.Info));
exports.SelectableInfo = SelectableInfo;
//# sourceMappingURL=SelectableInfo.js.map