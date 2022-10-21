import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class FidmOidcRp {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API registers and configures a new OP for the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.createOP+REST
     */
    createOP(params: BaseParams & FidmOidcRpCreateOPParams): Promise<GigyaResponse>;
    /**
     * This API deletes the specified OP from the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.delOP+REST
     */
    delOP(params: BaseParams & FidmOidcRpDelOPParams): Promise<GigyaResponse>;
    /**
     * This API returns the configuration data for a specified OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOP+REST
     */
    getOP(params: BaseParams & FidmOidcRpGetOPParams): Promise<GigyaResponse & FidmOidcRpGetOPResponse>;
    /**
     * This API returns all the currently registered OPs for RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOPs+REST
     */
    getOPs(params?: BaseParams): Promise<GigyaResponse & FidmOidcRpGetOPsResponse>;
    /**
     * This API updates the configuration of an existing OP  configured on the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.updateOP+REST
     */
    updateOP(params: BaseParams & any): Promise<GigyaResponse>;
}
export interface OpenIDProviderBasic {
    providerName: string;
    authorizeEndpoint: string;
}
export interface OpenIDProvider extends OpenIDProviderBasic {
    clientID: string;
    clientSecret: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
    scopes: string;
    issuer: string;
    jwks: string;
}
export interface FidmOidcRpCreateOPParams extends OpenIDProvider {
}
export interface FidmOidcRpDelOPParams {
    providerName: string;
}
export interface FidmOidcRpGetOPParams {
    providerName: string;
}
export interface FidmOidcRpGetOPResponse extends OpenIDProvider {
}
export interface FidmOidcRpGetOPsResponse {
    OPs: Array<OpenIDProviderBasic>;
}
export interface FidmOidcRpUpdateOPParams {
    providerName: string;
    authorizeEndpoint?: string;
    clientID?: string;
    clientSecret?: string;
    tokenEndpoint?: string;
    userInfoEndpoint?: string;
    scopes?: string;
    issuer?: string;
    jwks?: string;
}
export default FidmOidcRp;
