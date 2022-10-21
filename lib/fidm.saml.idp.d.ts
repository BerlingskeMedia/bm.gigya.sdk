import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class FidmSamlIdp {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API deletes a SAML Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.delIdP+REST
     */
    delIdP(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API retrieves the Gigya site configuration for SAML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getConfig+REST
     */
    getConfig(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getRegisteredIdPs+REST
     */
    getRegisteredIdPs(params: BaseParams & any): Promise<any>;
    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.importIdPMetadata+REST
     */
    importIdPMetadata(params: BaseParams & any): Promise<any>;
    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.registerIdP+REST
     */
    registerIdP(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API updates the Gigya SAML site configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.setConfig+REST
     */
    setConfig(params: BaseParams & any): Promise<GigyaResponse>;
}
export default FidmSamlIdp;
