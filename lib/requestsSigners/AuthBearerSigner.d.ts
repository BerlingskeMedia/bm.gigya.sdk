import { GigyaRequest } from "../RequestFactory";
import { AuthRequestSigner, UserKeyCredentials } from "./AuthRequestSigner";
export interface RSACredentials extends UserKeyCredentials {
    privateKey: string;
}
export declare function isRSACreds(credentials: RSACredentials | any): credentials is RSACredentials;
export declare class AuthBearerSigner extends AuthRequestSigner<RSACredentials> {
    constructor(creds: RSACredentials);
    sign(request: GigyaRequest<RSACredentials>): void;
    private signJwt;
}
