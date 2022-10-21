import SigUtils from './sig-utils';
import Admin, { DataCenter } from './admin';
import Socialize from './socialize';
import Accounts from './accounts';
import DS from './ds';
import GM from './gm';
import Fidm from './fidm';
import Reports from './reports';
import IDX from './idx';
import GigyaError from './gigya-error';
import GigyaResponse from './interfaces/gigya-response';
import ProxyHttpRequest from './interfaces/proxy-http-request';
import BaseParams from './interfaces/base-params';
import { PartnerSecret } from "./requestsSigners/PartnerSecretSigner";
import { NoCredentials } from "./requestsSigners/AnonymousRequestSigner";
import { RSACredentials } from "./requestsSigners/AuthBearerSigner";
import { SecretCredentials } from "./requestsSigners/SimpleRequestSigner";
import { ISigner } from "./requestsSigners/ISigner";
export * from './sig-utils';
export * from './admin';
export * from './socialize';
export * from './accounts';
export * from './ds';
export * from './gm';
export * from './fidm';
export * from './reports';
export * from './idx';
export * from './gigya-error';
export * from './interfaces/gigya-response';
export * from './interfaces/error-code';
export * from './interfaces/proxy-http-request';
export * from './interfaces/base-params';
export interface FormatJsonRequest {
    format: 'json';
}
export interface SignedRequestParams {
    timestamp: number;
    nonce: number;
    sig: string;
}
export declare type RequestParams = FormatJsonRequest & Partial<SignedRequestParams> & {
    [key: string]: string | null | number | boolean;
};
export declare type CredentialsType = NoCredentials | {
    secret: PartnerSecret;
} | SecretCredentials | RSACredentials;
export declare class Gigya {
    protected _dataCenter: DataCenter;
    protected static readonly RATE_LIMIT_SLEEP = 2000;
    protected static readonly RETRY_LIMIT = 5;
    protected static readonly RETRY_DELAY = 5000;
    protected _apiKey: string | undefined;
    protected httpRequest: ProxyHttpRequest;
    readonly sigUtils: SigUtils;
    readonly admin: Admin;
    readonly socialize: Socialize;
    readonly accounts: Accounts;
    readonly ds: DS;
    readonly gm: GM;
    readonly fidm: Fidm;
    readonly reports: Reports;
    readonly idx: IDX;
    protected _signer: ISigner;
    /**
     * Initialize new instance of Gigya.
     */
    constructor();
    constructor(proxyHttpRequest: ProxyHttpRequest);
    constructor(apiKey: string, dataCenter: DataCenter, proxy?: ProxyHttpRequest);
    constructor(apiKey: string, dataCenter: DataCenter, secret: string);
    constructor(apiKey: string, dataCenter: DataCenter, userKey: string, secret?: string);
    constructor(apiKey: string, dataCenter: DataCenter, credentials: RSACredentials);
    setCredentials(credentials: CredentialsType): this;
    protected getSigner(credentials: CredentialsType): ISigner | null;
    /**
     * Make request to Gigya. Typically, you'll want to use the defined interface (for example gigya.accounts.getAccountInfo) instead of calling request directly.
     *
     * If a method is not available, create an issue or pull request at: https://github.com/scotthovestadt/gigya
     */
    request<R>(endpoint: string, userParams?: any): Promise<GigyaResponse & R>;
    /**
     * Internal handler for requests.
     */
    protected _request<R>(endpoint: string, userParams: BaseParams & {
        [key: string]: any;
    }, retries?: number): Promise<GigyaResponse & R>;
    protected createRequestSignature(secret: string, uri: string, requestParams: RequestParams): string;
    /**
     * Create GigyaError from response.
     */
    protected createErrorFromResponse(response: GigyaResponse, endpoint: string, params: BaseParams & Object): GigyaError;
}
export default Gigya;
