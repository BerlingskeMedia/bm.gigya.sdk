import { GigyaRequest } from "../RequestFactory";
import { AuthRequestSigner, UserKeyCredentials } from "./AuthRequestSigner";
export interface SecretCredentials extends UserKeyCredentials {
    secret: string;
}
export declare function isSecretCredentials(credentials: SecretCredentials | any): credentials is SecretCredentials;
export declare class SimpleRequestSigner extends AuthRequestSigner<SecretCredentials> {
    constructor(_creds: SecretCredentials);
    sign(request: GigyaRequest<SecretCredentials>): void;
}
