"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AuthRequestSigner_1 = require("./AuthRequestSigner");
function isRSACreds(credentials) {
    return !!credentials.privateKey && AuthRequestSigner_1.isCredentials(credentials);
}
exports.isRSACreds = isRSACreds;
var AuthBearerSigner = /** @class */ (function (_super) {
    __extends(AuthBearerSigner, _super);
    function AuthBearerSigner(creds) {
        return _super.call(this, creds) || this;
    }
    AuthBearerSigner.prototype.sign = function (request) {
        var jwt = this.signJwt(this._creds);
        request.headers.Authorization = "Bearer " + jwt;
        delete request.params.userKey;
        delete request.params.privateKey;
    };
    AuthBearerSigner.prototype.signJwt = function (creds) {
        var _a = require('jose'), JWT = _a.JWT, JWK = _a.JWK;
        return JWT.sign({}, JWK.asKey({
            key: creds.privateKey,
            format: 'pem',
        }, {
            alg: 'RS256',
            kid: creds.userKey
        }), {
            iat: true,
            jti: this.createNonce().toString(),
            header: {
                typ: 'JWT'
            }
        });
    };
    return AuthBearerSigner;
}(AuthRequestSigner_1.AuthRequestSigner));
exports.AuthBearerSigner = AuthBearerSigner;
//# sourceMappingURL=AuthBearerSigner.js.map