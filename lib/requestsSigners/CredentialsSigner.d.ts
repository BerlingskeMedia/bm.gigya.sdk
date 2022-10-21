import { SecretCredentials, SimpleRequestSigner } from "./SimpleRequestSigner";
import SigUtils from '../sig-utils';
import { GigyaRequest, RequestParams } from "../RequestFactory";
interface SignedRequestParams {
    timestamp: number;
    nonce: number;
    sig: string;
}
export declare class CredentialsSigner extends SimpleRequestSigner {
    protected _sigUtils: SigUtils;
    protected _httpMethod: "post" | "get";
    constructor(_sigUtils: SigUtils, creds: SecretCredentials, _httpMethod?: "post" | "get");
    sign(request: GigyaRequest<SecretCredentials & SignedRequestParams>): void;
    protected createRequestSignature(secret: string, uri: string, requestParams: RequestParams<any>): string;
}
export {};
