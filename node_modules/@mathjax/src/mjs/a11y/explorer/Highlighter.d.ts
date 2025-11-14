interface NamedColor {
    color: string;
    alpha?: number;
}
export interface Highlighter {
    highlight(nodes: HTMLElement[]): void;
    unhighlight(): void;
    highlightAll(node: HTMLElement): void;
    unhighlightAll(): void;
    isMactionNode(node: Element): boolean;
    get foreground(): string;
    get background(): string;
    setColor(background: NamedColor, foreground: NamedColor): void;
}
export declare function getHighlighter(back: NamedColor, fore: NamedColor, renderer: string): Highlighter;
export {};
