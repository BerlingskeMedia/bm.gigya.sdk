"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GM = /** @class */ (function () {
    function GM(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API deletes a specified action.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteAction+REST
     */
    GM.prototype.deleteAction = function (params) {
        return this.gigya.request('gm.deleteAction', params);
    };
    /**
     * This API deletes a specified challenge and all its variants.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteChallenge+REST
     */
    GM.prototype.deleteChallenge = function (params) {
        return this.gigya.request('gm.deleteChallenge', params);
    };
    /**
     * This API deletes a specified variant of a challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteChallengeVariant+REST
     */
    GM.prototype.deleteChallengeVariant = function (params) {
        return this.gigya.request('gm.deleteChallengeVariant', params);
    };
    /**
     * This API retrieves the configuration of specified actions.
     *
     * @see http://developers.gigya.com/display/GD/gm.getActionConfig+REST
     */
    GM.prototype.getActionConfig = function (params) {
        return this.gigya.request('gm.getActionConfig', params);
    };
    /**
     * This API retrieves a specified user's Game Mechanics (GM) actions and how many points are associated with each action.
     *
     * @see http://developers.gigya.com/display/GD/gm.getActionsLog+REST
     */
    GM.prototype.getActionsLog = function (params) {
        return this.gigya.request('gm.getActionsLog', params);
    };
    /**
     * This API retrieves the configuration of specified challenges.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeConfig+REST
     */
    GM.prototype.getChallengeConfig = function (params) {
        return this.gigya.request('gm.getChallengeConfig', params);
    };
    /**
     * This API retrieves the current status of the user in each of the specified challenges.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeStatus+REST
     */
    GM.prototype.getChallengeStatus = function (params) {
        return this.gigya.request('gm.getChallengeStatus', params);
    };
    /**
     * This API retrieves the variants of a challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeVariants+REST
     */
    GM.prototype.getChallengeVariants = function (params) {
        return this.gigya.request('gm.getChallengeVariants', params);
    };
    /**
     * This API retrieves the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     *
     * @see http://developers.gigya.com/display/GD/gm.getGlobalConfig+REST
     */
    GM.prototype.getGlobalConfig = function (params) {
        return this.gigya.request('gm.getGlobalConfig', params);
    };
    /**
     * This API returns the top ranked users for a specified challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.getTopUsers+REST
     */
    GM.prototype.getTopUsers = function (params) {
        return this.gigya.request('gm.getTopUsers', params);
    };
    /**
     * This API notifies the Game Mechanics (GM) engine about an action that a user has taken in the site.
     *
     * @see http://developers.gigya.com/display/GD/gm.notifyAction+REST
     */
    GM.prototype.notifyAction = function (params) {
        return this.gigya.request('gm.notifyAction', params);
    };
    /**
     * This API deducts a specified number of points from a specified user in a specified challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.redeemPoints+REST
     */
    GM.prototype.redeemPoints = function (params) {
        return this.gigya.request('gm.redeemPoints', params);
    };
    /**
     * This API resets the isNewLevel field value to false.
     *
     * @see http://developers.gigya.com/display/GD/gm.resetLevelStatus+REST
     */
    GM.prototype.resetLevelStatus = function (params) {
        return this.gigya.request('gm.resetLevelStatus', params);
    };
    /**
     * This API creates or updates an existing Gamification action.
     *
     * @see http://developers.gigya.com/display/GD/gm.setActionConfig+REST
     */
    GM.prototype.setActionConfig = function (params) {
        return this.gigya.request('gm.setActionConfig', params);
    };
    /**
     * This API creates or overwrites an existing Gamification challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.setChallengeConfig+REST
     */
    GM.prototype.setChallengeConfig = function (params) {
        return this.gigya.request('gm.setChallengeConfig', params);
    };
    /**
     * This API sets the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     *
     * @see http://developers.gigya.com/display/GD/gm.setGlobalConfig+REST
     */
    GM.prototype.setGlobalConfig = function (params) {
        return this.gigya.request('gm.setGlobalConfig', params);
    };
    return GM;
}());
exports.GM = GM;
exports.default = GM;
//# sourceMappingURL=gm.js.map