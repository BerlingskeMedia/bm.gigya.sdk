"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCredentials(credentials) {
    return !!credentials.userKey;
}
exports.isCredentials = isCredentials;
var AuthRequestSigner = /** @class */ (function () {
    function AuthRequestSigner(_creds) {
        this._creds = _creds;
    }
    AuthRequestSigner.prototype.createNonce = function () {
        return Math.floor(Math.random() * Math.floor(Date.now()));
    };
    return AuthRequestSigner;
}());
exports.AuthRequestSigner = AuthRequestSigner;
//# sourceMappingURL=AuthRequestSigner.js.map