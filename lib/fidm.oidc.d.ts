import Gigya from './gigya';
import FidmOidcOp from './fidm.oidc.op';
import FidmOidcRp from './fidm.oidc.rp';
export * from './interfaces/gigya-response';
export * from './fidm.oidc.op';
export * from './fidm.oidc.rp';
export declare class FidmOidc {
    protected gigya: Gigya;
    readonly op: FidmOidcOp;
    readonly rp: FidmOidcRp;
    constructor(gigya: Gigya);
}
export default FidmOidc;
