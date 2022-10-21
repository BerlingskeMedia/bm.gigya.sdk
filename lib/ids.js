"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IDS = /** @class */ (function () {
    function IDS(gigya) {
        this.gigya = gigya;
    }
    /**
     * This method deletes the specified user's account from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/ids.deleteAccount+REST
     */
    IDS.prototype.deleteAccount = function (params) {
        return this.gigya.request('ids.deleteAccount', params);
    };
    /**
     * This API retrieves user account data.
     *
     * @see http://developers.gigya.com/display/GD/ids.getAccountInfo+REST
     */
    IDS.prototype.getAccountInfo = function (params) {
        return this.gigya.request('ids.getAccountInfo', params);
    };
    /**
     * This API retrieves the counters associated with a user ID (UID).
     *
     * @see http://developers.gigya.com/display/GD/ids.getCounters+REST
     */
    IDS.prototype.getCounters = function (params) {
        return this.gigya.request('ids.getCounters', params);
    };
    /**
     * This API returns the counters that were registered for the site using ids.registerCounters.
     *
     * @see http://developers.gigya.com/display/GD/ids.getRegisteredCounters+REST
     */
    IDS.prototype.getRegisteredCounters = function (params) {
        return this.gigya.request('ids.getRegisteredCounters', params);
    };
    /**
     * This API retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Profile Management.
     *
     * @see http://developers.gigya.com/display/GD/ids.getSchema+REST
     */
    IDS.prototype.getSchema = function (params) {
        return this.gigya.request('ids.getSchema', params);
    };
    /**
     * This API increments counters by a specific count and also optionally provides a value for the count.
     *
     * @see http://developers.gigya.com/display/GD/ids.incrementCounters+REST
     */
    IDS.prototype.incrementCounters = function (params) {
        return this.gigya.request('ids.incrementCounters', params);
    };
    /**
     * This API registers custom counters that can then be incremented using ids.incrementCounters.
     *
     * @see http://developers.gigya.com/display/GD/ids.registerCounters+REST
     */
    IDS.prototype.registerCounters = function (params) {
        return this.gigya.request('ids.registerCounters', params);
    };
    /**
     * Searches and retrieves data from Gigya's Profile Management (IDS) using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/ids.search+REST
     */
    IDS.prototype.search = function (params) {
        return this.gigya.request('ids.search', params);
    };
    /**
     * This API sets account data into a user's account.
     *
     * @see http://developers.gigya.com/display/GD/ids.setAccountInfo+REST
     */
    IDS.prototype.setAccountInfo = function (params) {
        return this.gigya.request('ids.setAccountInfo', params);
    };
    /**
     * This API allows specifying a schema for Profile Management.
     *
     * @see http://developers.gigya.com/display/GD/ids.setSchema+REST
     */
    IDS.prototype.setSchema = function (params) {
        return this.gigya.request('ids.setSchema', params);
    };
    /**
     * This API de-registers counters.
     *
     * @see http://developers.gigya.com/display/GD/ids.unregisterCounters+REST
     */
    IDS.prototype.unregisterCounters = function (params) {
        return this.gigya.request('ids.unregisterCounters', params);
    };
    return IDS;
}());
exports.IDS = IDS;
exports.default = IDS;
//# sourceMappingURL=ids.js.map