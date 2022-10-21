import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class Reports {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API retrieves Gigya's Accounts statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getAccountsStats+REST
     */
    getAccountsStats(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves Gigya's comments statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getCommentsStats+REST
     */
    getCommentsStats(params: BaseParams & any): Promise<any>;
    /**
     * This method retrieves the current total redeemable points across your user base, per challenge.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMRedeemablePoints+REST
     */
    getGMRedeemablePoints(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves Gigya's Game Mechanics statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMStats+REST
     */
    getGMStats(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the top Game Mechanics users.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMTopUsers+REST
     */
    getGMTopUsers(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the Gamification challenges and the number of users who participate in each challenge.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMUserStats+REST
     */
    getGMUserStats(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves the top influencers for the site.
     *
     * @see http://developers.gigya.com/display/GD/reports.getIRank+REST
     */
    getIRank(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves Gigya's reactions statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getReactionsStats+REST
     */
    getReactionsStats(params: BaseParams & any): Promise<any>;
    /**
     * This API retrieves Gigya's reporting data.
     *
     * @see http://developers.gigya.com/display/GD/reports.getSocializeStats+REST
     */
    getSocializeStats(params: BaseParams & any): Promise<any>;
}
export default Reports;
