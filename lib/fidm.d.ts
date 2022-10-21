import Gigya from './gigya';
import FidmOidc from './fidm.oidc';
import FidmSaml from './fidm.saml';
export * from './interfaces/gigya-response';
export * from './fidm.oidc';
export * from './fidm.saml';
export declare class Fidm {
    protected gigya: Gigya;
    readonly oidc: FidmOidc;
    readonly saml: FidmSaml;
    constructor(gigya: Gigya);
}
export default Fidm;
