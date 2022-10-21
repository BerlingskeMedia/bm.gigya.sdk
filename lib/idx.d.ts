import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class IDX {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * The method creates a single dataflow and saves it in the system.
     *
     * @see http://developers.gigya.com/display/GD/idx.createDataflow+REST
     */
    createDataflow(params: BaseParams & any): Promise<any>;
    /**
     * The method retrieves a dataflow by ID.
     *
     * @see http://developers.gigya.com/display/GD/idx.getDataflow+REST
     */
    getDataflow(params: BaseParams & any): Promise<any>;
    /**
     * This method modifies an existing dataflow.
     *
     * @see http://developers.gigya.com/display/GD/idx.setDataflow+REST
     */
    setDataflow(params: BaseParams & any): Promise<any>;
    /**
     * The method deletes a Dataflow by ID.
     *
     * @see http://developers.gigya.com/display/GD/idx.deleteDataflow+REST
     */
    deleteDataflow(params: BaseParams & IDXDeleteDataflowParams): Promise<GigyaResponse>;
    /**
     * The method schedules a dataflow to execute.
     *
     * @see http://developers.gigya.com/display/GD/idx.createScheduling+REST
     */
    createScheduling(params: BaseParams & any): Promise<any>;
    /**
     * The method retrieves a scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.getScheduling+REST
     */
    getScheduling(params: BaseParams & any): Promise<any>;
    /**
     * The method modifies an existing scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.setScheduling+REST
     */
    setScheduling(params: BaseParams & any): Promise<any>;
    /**
     * The method deletes a scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.deleteScheduling+REST
     */
    deleteScheduling(params: BaseParams & IDXDeleteSchedulingParams): Promise<GigyaResponse>;
    /**
     * Searches and retrieves data from the ETL service using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/idx.search+REST
     */
    search(params: BaseParams & IDXSearchParams): Promise<any>;
}
export interface IDXDeleteDataflowParams {
    id: string;
}
export interface IDXDeleteSchedulingParams {
    id: string;
}
export interface IDXSearchParams {
    query: string;
    openCursor?: boolean;
    cursorId?: string;
}
export interface IDXSearchResponse {
    resultCount: number;
    totalCount: number;
    result: Array<any>;
}
export default IDX;
