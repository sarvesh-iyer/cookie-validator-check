import React from 'react';
export const Button = (props) => {
    let { children } = props;
    return React.createElement("button", Object.assign({}, props), children);
};
//# sourceMappingURL=Button.js.map