import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export declare class RBA {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API gets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.getPolicy
     */
    getPolicy(params: BaseParams & any): Promise<any>;
    /**
     * This API sets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.setPolicy
     */
    setPolicy(params: BaseParams & any): Promise<any>;
    /**
     * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.unlock
     */
    unlock(params: BaseParams & any): Promise<any>;
}
export default RBA;
