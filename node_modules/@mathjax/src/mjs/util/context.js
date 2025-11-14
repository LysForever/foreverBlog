export const hasWindow = typeof window !== 'undefined';
export const context = {
    window: hasWindow ? window : null,
    document: hasWindow ? window.document : null,
    os: (() => {
        if (hasWindow && window.navigator) {
            const app = window.navigator.appVersion;
            const osNames = [
                ['Win', 'Windows'],
                ['Mac', 'MacOS'],
                ['X11', 'Unix'],
                ['Linux', 'Unix'],
            ];
            for (const [key, os] of osNames) {
                if (app.includes(key)) {
                    return os;
                }
            }
            if (window.navigator.userAgent.includes('Android')) {
                return 'Unix';
            }
        }
        return 'unknown';
    })(),
};
//# sourceMappingURL=context.js.map