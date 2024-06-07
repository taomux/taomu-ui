import { Store } from 'taomu-store';
export interface GlobalStoreState {
    /** 主题颜色，亮色 | 暗色 | 跟随系统 */
    theme: 'light' | 'dark' | 'system';
}
export declare const globalStore: Store<GlobalStoreState>;
export declare const useGlobalStore: <K extends "theme">(subscribeKeys: K[]) => K extends infer T extends keyof GlobalStoreState ? { [key in T]: GlobalStoreState[key]; } : never;
export declare const dispatchGlobalStore: (nextState: Partial<GlobalStoreState>, options?: import("taomu-store").DispatchOptions<GlobalStoreState> | undefined) => void;
