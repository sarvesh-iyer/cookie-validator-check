"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieChecker = void 0;
const react_1 = __importStar(require("react"));
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
    return react_1.default.createElement("div", null, "CookieChecker");
};
exports.CookieChecker = CookieChecker;
//# sourceMappingURL=CookieChecker.js.map