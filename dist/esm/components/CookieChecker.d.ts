import React from 'react';
type CookieCheckerProps = {
    cookieName: string;
    url: string;
    jsonKey: string;
    guardClause: boolean;
};
export declare const CookieChecker: (props: CookieCheckerProps) => React.JSX.Element;
export {};
