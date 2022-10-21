import BaseParams, { DataCenter } from "./interfaces/base-params";
import { Headers } from "request";
export interface FormatJsonRequest {
    format: 'json';
}
export declare type BaseRequest = {
    [key: string]: string | null | number | boolean;
};
export declare type RequestParams<P = BaseRequest> = FormatJsonRequest & P;
export declare type UserParams = BaseParams & BaseRequest;
export interface GigyaRequest<P = BaseRequest> {
    host: string;
    endpoint: string;
    params: RequestParams<P>;
    headers: Headers;
    skipSigning: boolean;
}
export declare class RequestFactory {
    protected _apiKey: string | undefined;
    protected _dataCenter: DataCenter;
    constructor(_apiKey: string | undefined, _dataCenter: DataCenter);
    create(endpoint: string, userParams: UserParams): GigyaRequest<BaseRequest>;
    private isAnonymousEndpoint;
    protected getRequestHost(namespace: string, dataCenter: DataCenter): string;
    protected getRequestParams(userParams: UserParams): RequestParams;
}
