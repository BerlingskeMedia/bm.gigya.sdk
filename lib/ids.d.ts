import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class IDS {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This method deletes the specified user's account from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/ids.deleteAccount+REST
     */
    deleteAccount(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API retrieves user account data.
     *
     * @see http://developers.gigya.com/display/GD/ids.getAccountInfo+REST
     */
    getAccountInfo(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the counters associated with a user ID (UID).
     *
     * @see http://developers.gigya.com/display/GD/ids.getCounters+REST
     */
    getCounters(params: BaseParams & any): Promise<any>;
    /**
     * This API returns the counters that were registered for the site using ids.registerCounters.
     *
     * @see http://developers.gigya.com/display/GD/ids.getRegisteredCounters+REST
     */
    getRegisteredCounters(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Profile Management.
     *
     * @see http://developers.gigya.com/display/GD/ids.getSchema+REST
     */
    getSchema(params: BaseParams & any): Promise<any>;
    /**
     * This API increments counters by a specific count and also optionally provides a value for the count.
     *
     * @see http://developers.gigya.com/display/GD/ids.incrementCounters+REST
     */
    incrementCounters(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API registers custom counters that can then be incremented using ids.incrementCounters.
     *
     * @see http://developers.gigya.com/display/GD/ids.registerCounters+REST
     */
    registerCounters(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * Searches and retrieves data from Gigya's Profile Management (IDS) using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/ids.search+REST
     */
    search(params: BaseParams & any): Promise<any>;
    /**
     * This API sets account data into a user's account.
     *
     * @see http://developers.gigya.com/display/GD/ids.setAccountInfo+REST
     */
    setAccountInfo(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API allows specifying a schema for Profile Management.
     *
     * @see http://developers.gigya.com/display/GD/ids.setSchema+REST
     */
    setSchema(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API de-registers counters.
     *
     * @see http://developers.gigya.com/display/GD/ids.unregisterCounters+REST
     */
    unregisterCounters(params: BaseParams & any): Promise<GigyaResponse>;
}
export default IDS;
