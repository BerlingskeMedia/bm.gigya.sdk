import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class DS {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * Deletes object data or an entire object from Gigya's Data Store.
     *
     * @see http://developers.gigya.com/display/GD/ds.delete+REST
     */
    delete(params: BaseParams & DSDeleteParams): Promise<GigyaResponse>;
    /**
     * Retrieves an object's or the specified datum from Gigya's Data Store.
     *
     * @see http://developers.gigya.com/display/GD/ds.get+REST
     */
    get(params: BaseParams & DSGetParams): Promise<GigyaResponse & DSObject>;
    /**
     * This method retrieves the schema of a specified data type in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.getSchema+REST
     */
    getSchema(params: BaseParams & any): Promise<any>;
    /**
     * Searches and retrieves data from Gigya's Data Store (DS) using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/ds.search+REST
     */
    search(params: BaseParams & DSSearchParams): Promise<GigyaResponse & DSSearchResponse>;
    /**
     * This method allows specifying a schema for a data type in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.setSchema+REST
     */
    setSchema(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * Stores an object data in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.store+REST
     */
    store(params: BaseParams & DSStoreParams): Promise<GigyaResponse & DSStoreResponse>;
}
export interface DSObject {
    oid: string;
    lastUpdated: number;
    lastUpdatedTime: string;
    created: number;
    createdTime: string;
    data: any;
}
export interface DSDeleteParams extends DSGetParams {
}
export interface DSGetParams {
    oid: string;
    type: string;
    fields?: string;
    UID?: string;
}
export interface DSSearchParams {
    query: string;
    openCursor?: boolean;
    cursorId?: boolean;
    timeout?: number;
}
export interface DSSearchResponse {
    objectsCount: number;
    totalCount: number;
    results: Array<DSObject>;
    nextCursorId?: string;
}
export declare type DSStoreUpdateBehavior = 'arrayPush' | 'arraySet' | 'replace';
export interface DSStoreParams {
    data: any;
    type: string;
    oid: string | 'auto';
    UID?: string;
    updateBehavior: 'arrayPush' | 'arraySet' | 'replace';
}
export interface DSStoreResponse {
    oid: string;
}
export default DS;
