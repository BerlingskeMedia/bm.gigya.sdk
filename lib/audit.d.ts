import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import { BaseParamsSite } from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class Audit {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * The method enables you to search your site's audit log using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/audit.search
     */
    search(params: BaseParamsSite & AuditSearchParams): Promise<GigyaResponse & AuditSearchResponse>;
}
export interface AuditSearchParams {
    query: string;
}
export interface AuditSearchResponse {
    objectsCount: number;
    totalCount: number;
    results: Array<{
        '@timestamp': string;
        callID: string;
        errCode: string;
        endpoint: string;
        errMessage: string;
        userKey: string;
        sourceIP: string;
        params: Object;
        uid: string;
        apikey: string;
        httpReq: {
            SDK: string;
            country: string;
        };
        userKeyDetails?: {
            description: string;
            name: string;
            emailDomain: string;
        };
    }>;
}
export default Audit;
