"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FidmOidcRp = /** @class */ (function () {
    function FidmOidcRp(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API registers and configures a new OP for the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.createOP+REST
     */
    FidmOidcRp.prototype.createOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.createOP', params);
    };
    /**
     * This API deletes the specified OP from the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.delOP+REST
     */
    FidmOidcRp.prototype.delOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.delOP', params);
    };
    /**
     * This API returns the configuration data for a specified OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOP+REST
     */
    FidmOidcRp.prototype.getOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.getOP', params);
    };
    /**
     * This API returns all the currently registered OPs for RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOPs+REST
     */
    FidmOidcRp.prototype.getOPs = function (params) {
        return this.gigya.request('fidm.oidc.rp.getOPs', params);
    };
    /**
     * This API updates the configuration of an existing OP  configured on the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.updateOP+REST
     */
    FidmOidcRp.prototype.updateOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.updateOP', params);
    };
    return FidmOidcRp;
}());
exports.FidmOidcRp = FidmOidcRp;
exports.default = FidmOidcRp;
//# sourceMappingURL=fidm.oidc.rp.js.map