"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var rba_1 = require("./rba");
var accounts_webhooks_1 = require("./accounts.webhooks");
__export(require("./rba"));
__export(require("./accounts.webhooks"));
__export(require("./interfaces/session-expiration"));
var Accounts = /** @class */ (function () {
    function Accounts(gigya) {
        this.gigya = gigya;
        this.rba = new rba_1.default(gigya);
        this.webhooks = new accounts_webhooks_1.default(gigya);
    }
    /**
     * This method deletes the specified user's account from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/accounts.deleteAccount+REST
     */
    Accounts.prototype.deleteAccount = function (params) {
        return this.gigya.request('accounts.deleteAccount', params);
    };
    /**
     * This method deletes a screen-set hosted by Gigya.
     *
     * @see http://developers.gigya.com/display/GD/accounts.deleteScreenSet+REST
     */
    Accounts.prototype.deleteScreenSet = function (params) {
        return this.gigya.request('accounts.deleteScreenSet', params);
    };
    /**
     * This method allows sites integrating 3rd party plugins to validate the UID of a logged-in user.
     *
     * @see http://developers.gigya.com/display/GD/accounts.exchangeUIDSignature+REST
     */
    Accounts.prototype.exchangeUIDSignature = function (params) {
        return this.gigya.request('accounts.exchangeUIDSignature', params);
    };
    /**
     * This method completes on-site user registration.
     *
     * @see http://developers.gigya.com/display/GD/accounts.finalizeRegistration+REST
     */
    Accounts.prototype.finalizeRegistration = function (params) {
        return this.gigya.request('accounts.finalizeRegistration', params);
    };
    /**
     * This method retrieves user account data.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getAccountInfo+REST
     */
    Accounts.prototype.getAccountInfo = function (params) {
        return this.gigya.request('accounts.getAccountInfo', params);
    };
    /**
     * This method searches for a conflicting account: an account that uses the email associated with a social identity linked to the account currently logging in.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getConflictingAccount+REST
     */
    Accounts.prototype.getConflictingAccount = function (params) {
        return this.gigya.request('accounts.getConflictingAccount', params);
    };
    /**
     * This method retrieves the counters associated with a user ID (UID).
     *
     * @see http://developers.gigya.com/display/GD/accounts.getCounters+REST
     */
    Accounts.prototype.getCounters = function (params) {
        return this.gigya.request('accounts.getCounters', params);
    };
    /**
     * This API allows retrieval of the public key necessary for validating an id_token returned from the accounts.getJWT API endpoint.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getJWTPublicKey+REST
     */
    Accounts.prototype.getJWTPublicKey = function (params) {
        return this.gigya.request('accounts.getJWTPublicKey', params);
    };
    /**
     * This API is used to obtain an OAuth2.0/OIDC compatible id_token containing an existing user's data.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getJWT+REST
     */
    Accounts.prototype.getJWT = function (params) {
        return this.gigya.request('accounts.getJWT', params);
    };
    /**
     * This method retrieves account policies.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getPolicies+REST
     */
    Accounts.prototype.getPolicies = function (params) {
        return this.gigya.request('accounts.getPolicies', params);
    };
    /**
     * This method returns the counters that were registered for the site using accounts.registerCounters.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getRegisteredCounters+REST
     */
    Accounts.prototype.getRegisteredCounters = function (params) {
        return this.gigya.request('accounts.getRegisteredCounters', {});
    };
    /**
     * This method retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Accounts Storage.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getSchema+REST
     */
    Accounts.prototype.getSchema = function (params) {
        return this.gigya.request('accounts.getSchema', params);
    };
    /**
     * This method retrieves one or more screen-sets hosted by Gigya.
     *
     * @see http://developers.gigya.com/display/GD/accounts.getScreenSets+REST
     */
    Accounts.prototype.getScreenSets = function (params) {
        return this.gigya.request('accounts.getScreenSets', params);
    };
    /**
     * This method retrieves Screenset's versions.
     *
     */
    Accounts.prototype.getScreenSetVersions = function (params) {
        return this.gigya.request('accounts.getScreenSetVersions', params);
    };
    /**
     * This method imports user account data into the Accounts Storage.
     *
     * @see http://developers.gigya.com/display/GD/accounts.importAccount+REST
     */
    Accounts.prototype.importAccount = function (params) {
        return this.gigya.request('accounts.importAccount', params);
    };
    /**
     * This method imports a user's profile photo to Gigya's server.
     *
     * @see http://developers.gigya.com/display/GD/accounts.importProfilePhoto+REST
     */
    Accounts.prototype.importProfilePhoto = function (params) {
        return this.gigya.request('accounts.importProfilePhoto', params);
    };
    /**
     * When creating a custom counter, you first register it using accounts.registerCounters, then increment it using the current method.
     *
     * @see http://developers.gigya.com/display/GD/accounts.incrementCounters+REST
     */
    Accounts.prototype.incrementCounters = function (params) {
        return this.gigya.request('accounts.incrementCounters', params);
    };
    /**
     * This method initializes a registration process at a site.
     *
     * @see http://developers.gigya.com/display/GD/accounts.initRegistration+REST
     */
    Accounts.prototype.initRegistration = function (params) {
        if (params === void 0) { params = {}; }
        return this.gigya.request('accounts.initRegistration', params);
    };
    /**
     * This method checks whether a certain login identifier (username / email) is available.
     *
     * @see http://developers.gigya.com/display/GD/accounts.isAvailableLoginID+REST
     */
    Accounts.prototype.isAvailableLoginID = function (params) {
        return this.gigya.request('accounts.isAvailableLoginID', params);
    };
    /**
     * This method merges the account identified by the provided UID with the account identified by the provided login credentials (loginID + password).
     *
     * @see http://developers.gigya.com/display/GD/accounts.linkAccounts+REST
     */
    Accounts.prototype.linkAccounts = function (params) {
        return this.gigya.request('accounts.linkAccounts', params);
    };
    /**
     * This method logs a user into your site and opens a session for the logged-in user on success.
     *
     * @see http://developers.gigya.com/display/GD/accounts.login+REST
     */
    Accounts.prototype.login = function (params) {
        return this.gigya.request('accounts.login', params);
    };
    /**
     * This method logs out the specified user of your site.
     *
     * @see http://developers.gigya.com/display/GD/accounts.logout+REST
     */
    Accounts.prototype.logout = function (params) {
        return this.gigya.request('accounts.logout', params);
    };
    /**
     * This method notifies Gigya of an external login that happened outside of the Accounts system.
     *
     * @see http://developers.gigya.com/display/GD/accounts.notifyLogin+REST
     */
    Accounts.prototype.notifyLogin = function (params) {
        return this.gigya.request('accounts.notifyLogin', params);
    };
    /**
     * This method publishes the last imported profile photo if it hadn't been published previously.
     *
     * @see http://developers.gigya.com/display/GD/accounts.publishProfilePhoto+REST
     */
    Accounts.prototype.publishProfilePhoto = function (params) {
        return this.gigya.request('accounts.publishProfilePhoto', params);
    };
    /**
     * When creating a custom counter, you first register it using this method, then increment it using accounts.incrementCounters.
     *
     * @see http://developers.gigya.com/display/GD/accounts.registerCounters+REST
     */
    Accounts.prototype.registerCounters = function (params) {
        return this.gigya.request('accounts.registerCounters', params);
    };
    /**
     * This method registers a new user at your site, in accordance with the predefined site Policies and the Schema of the Accounts Storage.
     *
     * @see http://developers.gigya.com/display/GD/accounts.register+REST
     */
    Accounts.prototype.register = function (params) {
        return this.gigya.request('accounts.register', params);
    };
    /**
     * This method is used to resend a validation email to unverified addresses associated with the account.
     *
     * @see http://developers.gigya.com/display/GD/accounts.resendVerificationCode+REST
     */
    Accounts.prototype.resendVerificationCode = function (params) {
        return this.gigya.request('accounts.resendVerificationCode', params);
    };
    /**
     * This method resets a user's password, either via email or directly.
     *
     * @see http://developers.gigya.com/display/GD/accounts.resetPassword+REST
     */
    Accounts.prototype.resetPassword = function (params) {
        return this.gigya.request('accounts.resetPassword', params);
    };
    /**
     * Searches and retrieves data from Gigya's Accounts Storage using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/accounts.search+REST
     */
    Accounts.prototype.search = function (params) {
        return this.gigya.request('accounts.search', params);
    };
    /**
     * This method sets account data into a user's account.
     *
     * @see http://developers.gigya.com/display/GD/accounts.setAccountInfo+REST
     */
    Accounts.prototype.setAccountInfo = function (params) {
        return this.gigya.request('accounts.setAccountInfo', params);
    };
    /**
     * This method is used to modify site policies regarding user registration and login.
     *
     * @see http://developers.gigya.com/display/GD/accounts.setPolicies+REST
     */
    Accounts.prototype.setPolicies = function (params) {
        return this.gigya.request('accounts.setPolicies', params);
    };
    /**
     * This method uploads a user's profile photo to Gigya's server.
     *
     * @see http://developers.gigya.com/display/GD/accounts.setProfilePhoto+REST
     */
    Accounts.prototype.setProfilePhoto = function (params) {
        return this.gigya.request('accounts.setProfilePhoto', params);
    };
    /**
     * This method enables you to specify a schema for Gigya's Accounts Storage.
     *
     * @see http://developers.gigya.com/display/GD/accounts.setSchema+REST
     */
    Accounts.prototype.setSchema = function (params) {
        return this.gigya.request('accounts.setSchema', params);
    };
    /**
     * This method updates a screen-set hosted by Gigya, or creates it if it does not exist.
     *
     * @see http://developers.gigya.com/display/GD/accounts.setScreenSet+REST
     */
    Accounts.prototype.setScreenSet = function (params) {
        return this.gigya.request('accounts.setScreenSet', params);
    };
    /**
     * This method unregisters counters.
     *
     * @see http://developers.gigya.com/display/GD/accounts.unregisterCounters+REST
     */
    Accounts.prototype.unregisterCounters = function (params) {
        return this.gigya.request('accounts.unregisterCounters', params);
    };
    return Accounts;
}());
exports.Accounts = Accounts;
exports.default = Accounts;
//# sourceMappingURL=accounts.js.map