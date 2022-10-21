"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admin = /** @class */ (function () {
    function Admin(gigya) {
        this.gigya = gigya;
    }
    /**
     * This method creates a new site.
     *
     * @see http://developers.gigya.com/display/GD/admin.createSite+REST
     */
    Admin.prototype.createSite = function (params) {
        return this.gigya.request('admin.createSite', params);
    };
    /**
     * This API retrieves a partner's previously-saved ACL and its description, or a built-in ACL.
     *
     * @see http://developers.gigya.com/display/GD/admin.getACL+REST
     */
    Admin.prototype.getEffectiveACL = function (params) {
        return this.gigya.request('admin.getEffectiveACL', params);
    };
    /**
     * This API retrieves a specified partner's information.
     *
     * @see http://developers.gigya.com/display/GD/admin.getPartner+REST
     */
    Admin.prototype.getPartner = function (params) {
        return this.gigya.request('admin.getPartner', params);
    };
    /**
     * This API retrieves a partner's previously-saved ACL and its description, or a built-in ACL.
     *
     * @see http://developers.gigya.com/display/GD/admin.getACL+REST
     */
    Admin.prototype.getSiteConfig = function (params) {
        return this.gigya.request('admin.getSiteConfig', params);
    };
    /**
     * This API returns either all sites with which a user is associated by way of group memberships or all sites in a specific partner with which a user is associated.
     *
     * @see http://developers.gigya.com/display/GD/admin.getUserSites+REST
     */
    Admin.prototype.getUserSites = function (params) {
        return this.gigya.request('admin.getUserSites', params);
    };
    /**
     * This method searches the partner IDs, site IDs, base domains, and company names.
     *
     * @see http://developers.gigya.com/display/GD/admin.search+REST
     */
    Admin.prototype.search = function (params) {
        return this.gigya.request('admin.search', params);
    };
    /**
     * This method sets the configuration for existing sites.
     *
     * @see http://developers.gigya.com/display/GD/admin.setSiteConfig+REST
     */
    Admin.prototype.setSiteConfig = function (params) {
        return this.gigya.request('admin.setSiteConfig', params);
    };
    /**
     * This method deletes an exisiting site by API key
     *
     * @see http://developers.gigya.com/display/GD/admin.deleteSite+REST
     */
    Admin.prototype.deleteSite = function (params) {
        return this.gigya.request('admin.deleteSite', params);
    };
    /**
     * This method updates an exisiting partner by partnerID
     *
     * @see https://developers.gigya.com/display/GD/admin.updatePartner+REST
     */
    Admin.prototype.updatePartner = function (params) {
        return this.gigya.request('admin.updatePartner', params);
    };
    return Admin;
}());
exports.Admin = Admin;
;
exports.default = Admin;
//# sourceMappingURL=admin.js.map