export function flipMode(mode: Mode) {
    return mode == 'light' ? 'dark' : 'light';
}

(window as any).flipMode = flipMode;