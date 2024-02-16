import React from 'react';
export interface IButtonProps {
    backgroundColor?: string;
    color?: string;
    children?: React.ReactNode;
}
export declare const Button: (props: IButtonProps) => React.JSX.Element;
