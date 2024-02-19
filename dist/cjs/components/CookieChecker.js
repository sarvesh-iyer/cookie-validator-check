"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieChecker = void 0;
const react_1 = require("react");
const typescript_cookie_1 = require("typescript-cookie");
const CookieChecker = (props) => {
    let { cookieName, url, jsonKey, guardClause } = props;
    (0, react_1.useEffect)(() => {
        document.addEventListener('visibilitychange', checkIfUserAuthenticationCookieAvailable);
        return () => document.removeEventListener('visibilitychange', checkIfUserAuthenticationCookieAvailable);
    }, []);
    const checkIfUserAuthenticationCookieAvailable = () => {
        if (document.visibilityState === 'visible') {
            // console.log('Document is active');
            try {
                let cookie = (0, typescript_cookie_1.getCookie)(cookieName) !== undefined ? (0, typescript_cookie_1.getCookie)(cookieName) : '{}';
                let userCacheData = JSON.parse(cookie);
                console.log(userCacheData);
                if (guardClause ? !userCacheData[jsonKey] : userCacheData[jsonKey]) {
                    window.location.href = url;
                }
            }
            catch (e) { }
        }
        else {
            console.log('Document is inactive');
        }
    };
    return null;
};
exports.CookieChecker = CookieChecker;
//# sourceMappingURL=CookieChecker.js.map