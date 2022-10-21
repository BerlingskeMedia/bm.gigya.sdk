"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthRequestSigner_1 = require("./AuthRequestSigner");
function hasPartnerSecret(credentials) {
    return !!credentials.secret && !AuthRequestSigner_1.isCredentials(credentials);
}
exports.hasPartnerSecret = hasPartnerSecret;
var PartnerSecretSigner = /** @class */ (function () {
    function PartnerSecretSigner(secret) {
        this.secret = secret;
    }
    PartnerSecretSigner.prototype.sign = function (request) {
        request.params.secret = this.secret;
    };
    return PartnerSecretSigner;
}());
exports.PartnerSecretSigner = PartnerSecretSigner;
//# sourceMappingURL=PartnerSecretSigner.js.map