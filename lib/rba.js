"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RBA = /** @class */ (function () {
    function RBA(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API gets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.getPolicy
     */
    RBA.prototype.getPolicy = function (params) {
        return this.gigya.request('accounts.rba.getPolicy', params);
    };
    /**
     * This API sets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.setPolicy
     */
    RBA.prototype.setPolicy = function (params) {
        return this.gigya.request('accounts.rba.setPolicy', params);
    };
    /**
     * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.unlock
     */
    RBA.prototype.unlock = function (params) {
        return this.gigya.request('accounts.rba.unlock', params);
    };
    return RBA;
}());
exports.RBA = RBA;
exports.default = RBA;
//# sourceMappingURL=rba.js.map