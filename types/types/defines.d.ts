import type { HTMLAttributes } from 'react';
declare global {
    type BaseSizeLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    type LiteralUnion<T extends U, U> = T | (U & {});
    interface OptionsItemType {
        label: string;
        value: string;
    }
    type ReactDivProps = HTMLAttributes<HTMLDivElement>;
    interface ReactBaseType {
        id?: string;
        children?: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
        onClick?: React.MouseEventHandler;
    }
    interface Window {
        navigation?: {
            canGoBack?: boolean;
        };
    }
}
