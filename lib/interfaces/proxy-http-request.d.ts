import GigyaResponse from '../interfaces/gigya-response';
import { BaseRequest } from "../RequestFactory";
import { Headers } from "request";
export declare type ProxyHttpRequest = <R>(endpoint: string, host: string, requestParams: BaseRequest, headers?: Headers) => Promise<GigyaResponse & R>;
export default ProxyHttpRequest;
