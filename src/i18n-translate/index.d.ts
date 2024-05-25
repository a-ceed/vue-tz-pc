declare module './i18n-translate' {
    export const defaultLocale: string;
    export const languages: {
        [key: string]: any;
    };
}

declare module 'eng.json' {
    const value: any;
    export default value;
}

declare module 'rus.json' {
    const value: any;
    export default value;
}