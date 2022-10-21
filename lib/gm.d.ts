import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class GM {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API deletes a specified action.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteAction+REST
     */
    deleteAction(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API deletes a specified challenge and all its variants.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteChallenge+REST
     */
    deleteChallenge(params: BaseParams & any): Promise<any>;
    /**
     * This API deletes a specified variant of a challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.deleteChallengeVariant+REST
     */
    deleteChallengeVariant(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API retrieves the configuration of specified actions.
     *
     * @see http://developers.gigya.com/display/GD/gm.getActionConfig+REST
     */
    getActionConfig(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves a specified user's Game Mechanics (GM) actions and how many points are associated with each action.
     *
     * @see http://developers.gigya.com/display/GD/gm.getActionsLog+REST
     */
    getActionsLog(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the configuration of specified challenges.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeConfig+REST
     */
    getChallengeConfig(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the current status of the user in each of the specified challenges.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeStatus+REST
     */
    getChallengeStatus(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the variants of a challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.getChallengeVariants+REST
     */
    getChallengeVariants(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     *
     * @see http://developers.gigya.com/display/GD/gm.getGlobalConfig+REST
     */
    getGlobalConfig(params: BaseParams & any): Promise<any>;
    /**
     * This API returns the top ranked users for a specified challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.getTopUsers+REST
     */
    getTopUsers(params: BaseParams & any): Promise<any>;
    /**
     * This API notifies the Game Mechanics (GM) engine about an action that a user has taken in the site.
     *
     * @see http://developers.gigya.com/display/GD/gm.notifyAction+REST
     */
    notifyAction(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API deducts a specified number of points from a specified user in a specified challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.redeemPoints+REST
     */
    redeemPoints(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API resets the isNewLevel field value to false.
     *
     * @see http://developers.gigya.com/display/GD/gm.resetLevelStatus+REST
     */
    resetLevelStatus(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API creates or updates an existing Gamification action.
     *
     * @see http://developers.gigya.com/display/GD/gm.setActionConfig+REST
     */
    setActionConfig(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API creates or overwrites an existing Gamification challenge.
     *
     * @see http://developers.gigya.com/display/GD/gm.setChallengeConfig+REST
     */
    setChallengeConfig(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API sets the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     *
     * @see http://developers.gigya.com/display/GD/gm.setGlobalConfig+REST
     */
    setGlobalConfig(params: BaseParams & any): Promise<GigyaResponse>;
}
export default GM;
