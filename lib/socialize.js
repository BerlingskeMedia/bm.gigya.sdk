"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./interfaces/session-expiration"));
var Socialize = /** @class */ (function () {
    function Socialize(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API deletes the specified user's account from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.deleteAccount+REST
     */
    Socialize.prototype.deleteAccount = function (params) {
        return this.gigya.request('socialize.deleteAccount', params);
    };
    /**
     * Utility API for deleting user's settings in Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.delUserSettings+REST
     */
    Socialize.prototype.delUserSettings = function (params) {
        return this.gigya.request('socialize.delUserSettings', params);
    };
    /**
     * This API allows sites integrating 3rd party plugins to validate the UID of a logged-in user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.exchangeUIDSignature+REST
     */
    Socialize.prototype.exchangeUIDSignature = function (params) {
        return this.gigya.request('socialize.exchangeUIDSignature', params);
    };
    /**
     * A generic method for making calls to the Facebook Graph API.
     *
     * @see http://developers.gigya.com/display/GD/socialize.facebookGraphOperation+REST
     */
    Socialize.prototype.facebookGraphOperation = function (params) {
        return this.gigya.request('socialize.facebookGraphOperation ', params);
    };
    /**
     * Returns the list of email contacts of the current user, from all the providers that support retrieving contacts.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getContacts+REST
     */
    Socialize.prototype.getContacts = function (params) {
        return this.gigya.request('socialize.getContacts', params);
    };
    /**
     * Returns information about friends of the current user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getFriendsInfo+REST
     */
    Socialize.prototype.getFriendsInfo = function (params) {
        return this.gigya.request('socialize.getFriendsInfo', params);
    };
    /**
     * Enables retrieving raw data directly from the provider.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getRawData+REST
     */
    Socialize.prototype.getRawData = function (params) {
        return this.gigya.request('socialize.getRawData', params);
    };
    /**
     * The method retrieves the number of times certain reaction buttons were clicked.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getReactionsCount+REST
     */
    Socialize.prototype.getReactionsCount = function (params) {
        return this.gigya.request('socialize.getReactionsCount', params);
    };
    /**
     * Returns the session information required for making direct API calls to the providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getSessionInfo+REST
     */
    Socialize.prototype.getSessionInfo = function (params) {
        return this.gigya.request('socialize.getSessionInfo', params);
    };
    /**
     * This method allows you to see the content (URLs) most shared on a site in the recent defined time period (up to 7 days).
     *
     * @see http://developers.gigya.com/display/GD/socialize.getTopShares+REST
     */
    Socialize.prototype.getTopShares = function (params) {
        return this.gigya.request('socialize.getTopShares', params);
    };
    /**
     * This method retrieves extended information regarding a user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getUserInfo+REST
     */
    Socialize.prototype.getUserInfo = function (params) {
        return this.gigya.request('socialize.getUserInfo', params);
    };
    /**
     * Utility method for retrieving user's settings from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getUserSettings+REST
     */
    Socialize.prototype.getUserSettings = function (params) {
        return this.gigya.request('socialize.getUserSettings', params);
    };
    /**
     * This method enables you to import a social user into Gigya.
     *
     * @see http://developers.gigya.com/display/GD/socialize.importIdentities+REST
     */
    Socialize.prototype.importIdentities = function (params) {
        return this.gigya.request('socialize.importIdentities', params);
    };
    /**
     * This method increments or reduces by one the counter of a given reaction button in a specified reactions bar.
     *
     * @see http://developers.gigya.com/display/GD/socialize.incrementReactionsCount+REST
     */
    Socialize.prototype.incrementReactionsCount = function (params) {
        return this.gigya.request('socialize.incrementReactionsCount', params);
    };
    /**
     * This method logs the current user out of Gigya's Platform.
     *
     * @see http://developers.gigya.com/display/GD/socialize.logout+REST
     */
    Socialize.prototype.logout = function (params) {
        return this.gigya.request('socialize.logout', params);
    };
    /**
     * The socialize.notifyLogin API method notifies the Gigya service that the user has been logged in by the site.
     *
     * @see http://developers.gigya.com/display/GD/socialize.notifyLogin+REST
     */
    Socialize.prototype.notifyLogin = function (params) {
        return this.gigya.request('socialize.notifyLogin', params);
    };
    /**
     * This method notifies the Gigya service that the user has completed the registration process at your site.
     *
     * @see http://developers.gigya.com/display/GD/socialize.notifyRegistration+REST
     */
    Socialize.prototype.notifyRegistration = function (params) {
        return this.gigya.request('socialize.notifyRegistration', params);
    };
    /**
     * Publishes a user action to the newsfeed of all the connected providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.publishUserAction+REST
     */
    Socialize.prototype.publishUserAction = function (params) {
        return this.gigya.request('socialize.publishUserAction', params);
    };
    /**
     * Disconnects the current user from one or all of the connected providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.removeConnection+REST
     */
    Socialize.prototype.removeConnection = function (params) {
        return this.gigya.request('socialize.removeConnection', params);
    };
    /**
     * This method sets the user's status in social networks that support this feature.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setStatus+REST
     */
    Socialize.prototype.setStatus = function (params) {
        return this.gigya.request('socialize.setStatus', params);
    };
    /**
     * This method replaces the Gigya UID in the user account on Gigya's DB, with a site user ID that you provide.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUID+REST
     */
    Socialize.prototype.setUID = function (params) {
        return this.gigya.request('socialize.setUID', params);
    };
    /**
     * This method updates a user's site information.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUserInfo+REST
     */
    Socialize.prototype.setUserInfo = function (params) {
        return this.gigya.request('socialize.setUserInfo', params);
    };
    /**
     * Utility method for storing the current user's settings in Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUserSettings+REST
     */
    Socialize.prototype.setUserSettings = function (params) {
        return this.gigya.request('socialize.setUserSettings', params);
    };
    /**
     * This utility method provides access to a URL shortening service.
     *
     * @see http://developers.gigya.com/display/GD/socialize.shortenURL+REST
     */
    Socialize.prototype.shortenURL = function (params) {
        return this.gigya.request('socialize.shortenURL', params);
    };
    return Socialize;
}());
exports.Socialize = Socialize;
exports.default = Socialize;
//# sourceMappingURL=socialize.js.map