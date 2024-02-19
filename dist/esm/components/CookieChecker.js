import { useEffect } from 'react';
import { getCookie } from 'typescript-cookie';
export const CookieChecker = (props) => {
    let { cookieName, url, jsonKey, guardClause } = props;
    useEffect(() => {
        document.addEventListener('visibilitychange', checkIfUserAuthenticationCookieAvailable);
        return () => document.removeEventListener('visibilitychange', checkIfUserAuthenticationCookieAvailable);
    }, []);
    const checkIfUserAuthenticationCookieAvailable = () => {
        if (document.visibilityState === 'visible') {
            // console.log('Document is active');
            try {
                let cookie = getCookie(cookieName) !== undefined ? getCookie(cookieName) : '{}';
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
    // return;
};
//# sourceMappingURL=CookieChecker.js.map