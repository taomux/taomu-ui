export type GlobalVars = Record<string, string | number>;
export type ThemeMode = 'light' | 'dark';
export declare function setGlobalCssVars(themeMode: ThemeMode, vars: GlobalVars): void;
export declare function getGlobalStyled(): import("@emotion/utils").SerializedStyles;
