import { GigyaRequest } from "../RequestFactory";
import { ISigner } from "./ISigner";
export declare type PartnerSecret = string;
export declare function hasPartnerSecret(credentials: {
    secret: PartnerSecret;
} | any): credentials is {
    secret: PartnerSecret;
};
export declare class PartnerSecretSigner implements ISigner {
    protected secret: PartnerSecret;
    constructor(secret: PartnerSecret);
    sign(request: GigyaRequest<{
        secret: PartnerSecret;
    }>): void;
}
