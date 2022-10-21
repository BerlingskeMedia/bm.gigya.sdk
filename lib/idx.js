"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IDX = /** @class */ (function () {
    function IDX(gigya) {
        this.gigya = gigya;
    }
    /**
     * The method creates a single dataflow and saves it in the system.
     *
     * @see http://developers.gigya.com/display/GD/idx.createDataflow+REST
     */
    IDX.prototype.createDataflow = function (params) {
        return this.gigya.request('idx.createDataflow', params);
    };
    /**
     * The method retrieves a dataflow by ID.
     *
     * @see http://developers.gigya.com/display/GD/idx.getDataflow+REST
     */
    IDX.prototype.getDataflow = function (params) {
        return this.gigya.request('idx.getDataflow', params);
    };
    /**
     * This method modifies an existing dataflow.
     *
     * @see http://developers.gigya.com/display/GD/idx.setDataflow+REST
     */
    IDX.prototype.setDataflow = function (params) {
        return this.gigya.request('idx.setDataflow', params);
    };
    /**
     * The method deletes a Dataflow by ID.
     *
     * @see http://developers.gigya.com/display/GD/idx.deleteDataflow+REST
     */
    IDX.prototype.deleteDataflow = function (params) {
        return this.gigya.request('idx.deleteDataflow', params);
    };
    /**
     * The method schedules a dataflow to execute.
     *
     * @see http://developers.gigya.com/display/GD/idx.createScheduling+REST
     */
    IDX.prototype.createScheduling = function (params) {
        return this.gigya.request('idx.createScheduling', params);
    };
    /**
     * The method retrieves a scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.getScheduling+REST
     */
    IDX.prototype.getScheduling = function (params) {
        return this.gigya.request('idx.getScheduling', params);
    };
    /**
     * The method modifies an existing scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.setScheduling+REST
     */
    IDX.prototype.setScheduling = function (params) {
        return this.gigya.request('idx.setScheduling', params);
    };
    /**
     * The method deletes a scheduling.
     *
     * @see http://developers.gigya.com/display/GD/idx.deleteScheduling+REST
     */
    IDX.prototype.deleteScheduling = function (params) {
        return this.gigya.request('idx.deleteScheduling', params);
    };
    /**
     * Searches and retrieves data from the ETL service using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/idx.search+REST
     */
    IDX.prototype.search = function (params) {
        return this.gigya.request('idx.search', params);
    };
    return IDX;
}());
exports.IDX = IDX;
exports.default = IDX;
//# sourceMappingURL=idx.js.map