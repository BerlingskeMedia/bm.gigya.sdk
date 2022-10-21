"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
/**
 * This class is a utility class with static methods for calculating and validating cryptographic signatures.
 */
var SigUtils = /** @class */ (function () {
    function SigUtils(secret) {
        this.secret = secret; // Fix when TypeScript properly recognizes if (!this.secret && !secret) line 17.
    }
    /**
     * This is a utility method for generating a cryptographic signature.
     */
    SigUtils.prototype.calcSignature = function (baseString, secret) {
        if (!this.secret && !secret) {
            throw new Error('Cannot calculate signature, secret key not set!');
        }
        var secretBuffer = new Buffer(secret || this.secret, 'base64');
        return crypto.createHmac('sha1', secretBuffer).update(baseString).digest('base64');
    };
    /**
     * Use this method to verify the authenticity of a socialize.getUserInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    SigUtils.prototype.validateUserSignature = function (UID, timestamp, signature, secret) {
        var baseString = timestamp + "_" + UID;
        var expectedSig = this.calcSignature(baseString, secret);
        return expectedSig === signature;
    };
    /**
     * Use this method to verify the authenticity of a socialize.getFriendsInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    SigUtils.prototype.validateFriendSignature = function (UID, timestamp, friendUID, signature, secret) {
        var baseString = timestamp + "_" + friendUID + "_" + UID;
        var expectedSig = this.calcSignature(baseString, secret);
        return expectedSig === signature;
    };
    /**
     * Use this method as part of implementing dynamic control over login session expiration, in conjunction with assigning the value '-1' to the sessionExpiration parameter.
     *
     * Write the result to cookie: 'gltexp_${apiKey}'.
     */
    SigUtils.prototype.getDynamicSessionSignature = function (gltCookie, timeoutInSeconds, secret) {
        var loginToken = gltCookie.split('|')[0];
        var expirationTimeUnix = Math.round((Date.now() / 1000) + timeoutInSeconds);
        var unsignedExpString = loginToken + '_' + expirationTimeUnix;
        var signedExpString = this.calcSignature(unsignedExpString, secret);
        return expirationTimeUnix + "_" + signedExpString;
    };
    return SigUtils;
}());
exports.SigUtils = SigUtils;
exports.default = SigUtils;
//# sourceMappingURL=sig-utils.js.map