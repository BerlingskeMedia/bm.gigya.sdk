"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Webhooks = /** @class */ (function () {
    function Webhooks(gigya) {
        this.gigya = gigya;
    }
    /**
     * This method is used to delete a webhook.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.delete+REST
     */
    Webhooks.prototype.delete = function (params) {
        return this.gigya.request('accounts.webhooks.delete', params);
    };
    /**
     * This method is used to retrieve a list of all defined webhooks.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.getAll+REST
     */
    Webhooks.prototype.getAll = function (params) {
        return this.gigya.request('accounts.webhooks.getAll', params || {});
    };
    /**
     * This method is used to create a new webhook or update an existing one.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.set+REST
     */
    Webhooks.prototype.set = function (params) {
        return this.gigya.request('accounts.webhooks.set', params);
    };
    return Webhooks;
}());
exports.Webhooks = Webhooks;
;
exports.default = Webhooks;
//# sourceMappingURL=accounts.webhooks.js.map