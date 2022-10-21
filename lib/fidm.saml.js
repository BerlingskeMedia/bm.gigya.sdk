"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var fidm_saml_idp_1 = require("./fidm.saml.idp");
__export(require("./fidm.saml.idp"));
var FidmSaml = /** @class */ (function () {
    function FidmSaml(gigya) {
        this.gigya = gigya;
        this.idp = new fidm_saml_idp_1.default(gigya);
    }
    /**
     * This API deletes a SAML Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.delIdP+REST
     */
    FidmSaml.prototype.delIdP = function (params) {
        return this.gigya.request('fidm.saml.delIdP', params);
    };
    /**
     * This API retrieves the Gigya site configuration for SAML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getConfig+REST
     */
    FidmSaml.prototype.getConfig = function (params) {
        return this.gigya.request('fidm.saml.getConfig', params);
    };
    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getRegisteredIdPs+REST
     */
    FidmSaml.prototype.getRegisteredIdPs = function (params) {
        return this.gigya.request('fidm.saml.getRegisteredIdPs', params);
    };
    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.importIdPMetadata+REST
     */
    FidmSaml.prototype.importIdPMetadata = function (params) {
        return this.gigya.request('fidm.saml.importIdPMetadata', params);
    };
    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.registerIdP+REST
     */
    FidmSaml.prototype.registerIdP = function (params) {
        return this.gigya.request('fidm.saml.registerIdP', params);
    };
    /**
     * This API updates the Gigya SAML site configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.setConfig+REST
     */
    FidmSaml.prototype.setConfig = function (params) {
        return this.gigya.request('fidm.saml.setConfig', params);
    };
    return FidmSaml;
}());
exports.FidmSaml = FidmSaml;
exports.default = FidmSaml;
//# sourceMappingURL=fidm.saml.js.map