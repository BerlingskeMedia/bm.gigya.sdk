import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class FidmOidcOp {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API deletes an existing OP configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.clearConfig+REST
     */
    clearConfig(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API registers and configures a new RP for the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.createRP+REST
     */
    createRP(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API deletes an existing OP configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.delRP+REST
     */
    delRP(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API retrieves the site OP configuration relevant for all clients/relying-parties of the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getConfig+REST
     */
    getConfig(params: BaseParams & any): Promise<GigyaResponse>;
    /**
    * This API retrieves the site OP metadata.
    *
    * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getMetadata+REST
    */
    getMetadata(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API returns the configuration data for a specified RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getRP+REST
     */
    getRP(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API Returns all the currently registered RPs for the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getRPs+REST
     */
    getRPs(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API initiates the OP  functionality for your site. The configuration of the OP is relevant to all of the site's RPs.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.setConfig+REST
     */
    setConfig(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API updates the configuration of an existing RP  configured on the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.updateRP+REST
     */
    updateRP(params: BaseParams & any): Promise<GigyaResponse>;
}
export default FidmOidcOp;
