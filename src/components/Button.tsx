import React from 'react';

export interface IButtonProps {
    backgroundColor?: string;
    color?: string;
    children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
    let { children } = props;

    return <button {...props}>{children}</button>;
};
