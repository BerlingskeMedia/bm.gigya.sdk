"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FidmSamlIdp = /** @class */ (function () {
    function FidmSamlIdp(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API deletes a SAML Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.delIdP+REST
     */
    FidmSamlIdp.prototype.delIdP = function (params) {
        return this.gigya.request('fidm.saml.idp.delIdP', params);
    };
    /**
     * This API retrieves the Gigya site configuration for SAML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getConfig+REST
     */
    FidmSamlIdp.prototype.getConfig = function (params) {
        return this.gigya.request('fidm.saml.idp.getConfig', params);
    };
    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getRegisteredIdPs+REST
     */
    FidmSamlIdp.prototype.getRegisteredIdPs = function (params) {
        return this.gigya.request('fidm.saml.idp.getRegisteredIdPs', params);
    };
    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.importIdPMetadata+REST
     */
    FidmSamlIdp.prototype.importIdPMetadata = function (params) {
        return this.gigya.request('fidm.saml.idp.importIdPMetadata', params);
    };
    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.registerIdP+REST
     */
    FidmSamlIdp.prototype.registerIdP = function (params) {
        return this.gigya.request('fidm.saml.idp.registerIdP', params);
    };
    /**
     * This API updates the Gigya SAML site configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.setConfig+REST
     */
    FidmSamlIdp.prototype.setConfig = function (params) {
        return this.gigya.request('fidm.saml.idp.setConfig', params);
    };
    return FidmSamlIdp;
}());
exports.FidmSamlIdp = FidmSamlIdp;
exports.default = FidmSamlIdp;
//# sourceMappingURL=fidm.saml.idp.js.map