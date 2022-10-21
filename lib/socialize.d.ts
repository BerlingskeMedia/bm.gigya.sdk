import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
import Gender from './interfaces/gender';
import TargetEnv from './interfaces/target-env';
import SessionExpiration from './interfaces/session-expiration';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/gender';
export * from './interfaces/target-env';
export * from './interfaces/session-expiration';
export declare class Socialize {
    protected gigya: Gigya;
    constructor(gigya: Gigya);
    /**
     * This API deletes the specified user's account from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.deleteAccount+REST
     */
    deleteAccount(params: BaseParams & any): Promise<any>;
    /**
     * Utility API for deleting user's settings in Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.delUserSettings+REST
     */
    delUserSettings(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This API allows sites integrating 3rd party plugins to validate the UID of a logged-in user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.exchangeUIDSignature+REST
     */
    exchangeUIDSignature(params: BaseParams & any): Promise<any>;
    /**
     * A generic method for making calls to the Facebook Graph API.
     *
     * @see http://developers.gigya.com/display/GD/socialize.facebookGraphOperation+REST
     */
    facebookGraphOperation(params: BaseParams & any): Promise<any>;
    /**
     * Returns the list of email contacts of the current user, from all the providers that support retrieving contacts.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getContacts+REST
     */
    getContacts(params: BaseParams & any): Promise<any>;
    /**
     * Returns information about friends of the current user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getFriendsInfo+REST
     */
    getFriendsInfo(params: BaseParams & any): Promise<any>;
    /**
     * Enables retrieving raw data directly from the provider.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getRawData+REST
     */
    getRawData(params: BaseParams & any): Promise<any>;
    /**
     * The method retrieves the number of times certain reaction buttons were clicked.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getReactionsCount+REST
     */
    getReactionsCount(params: BaseParams & any): Promise<any>;
    /**
     * Returns the session information required for making direct API calls to the providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getSessionInfo+REST
     */
    getSessionInfo(params: BaseParams & any): Promise<any>;
    /**
     * This method allows you to see the content (URLs) most shared on a site in the recent defined time period (up to 7 days).
     *
     * @see http://developers.gigya.com/display/GD/socialize.getTopShares+REST
     */
    getTopShares(params: BaseParams & any): Promise<any>;
    /**
     * This method retrieves extended information regarding a user.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getUserInfo+REST
     */
    getUserInfo(params: BaseParams & any): Promise<any>;
    /**
     * Utility method for retrieving user's settings from Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.getUserSettings+REST
     */
    getUserSettings(params: BaseParams & any): Promise<any>;
    /**
     * This method enables you to import a social user into Gigya.
     *
     * @see http://developers.gigya.com/display/GD/socialize.importIdentities+REST
     */
    importIdentities(params: BaseParams & any): Promise<any>;
    /**
     * This method increments or reduces by one the counter of a given reaction button in a specified reactions bar.
     *
     * @see http://developers.gigya.com/display/GD/socialize.incrementReactionsCount+REST
     */
    incrementReactionsCount(params: BaseParams & any): Promise<any>;
    /**
     * This method logs the current user out of Gigya's Platform.
     *
     * @see http://developers.gigya.com/display/GD/socialize.logout+REST
     */
    logout(params: BaseParams & any): Promise<any>;
    /**
     * The socialize.notifyLogin API method notifies the Gigya service that the user has been logged in by the site.
     *
     * @see http://developers.gigya.com/display/GD/socialize.notifyLogin+REST
     */
    notifyLogin(params: BaseParams & (SocializeNotifyLoginParamsSiteUID | SocializeNotifyLoginParamsProviderSessions)): Promise<GigyaResponse & SocializeNotifyLoginResponse>;
    /**
     * This method notifies the Gigya service that the user has completed the registration process at your site.
     *
     * @see http://developers.gigya.com/display/GD/socialize.notifyRegistration+REST
     */
    notifyRegistration(params: BaseParams & any): Promise<any>;
    /**
     * Publishes a user action to the newsfeed of all the connected providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.publishUserAction+REST
     */
    publishUserAction(params: BaseParams & any): Promise<any>;
    /**
     * Disconnects the current user from one or all of the connected providers.
     *
     * @see http://developers.gigya.com/display/GD/socialize.removeConnection+REST
     */
    removeConnection(params: BaseParams & any): Promise<GigyaResponse>;
    /**
     * This method sets the user's status in social networks that support this feature.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setStatus+REST
     */
    setStatus(params: BaseParams & any): Promise<any>;
    /**
     * This method replaces the Gigya UID in the user account on Gigya's DB, with a site user ID that you provide.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUID+REST
     */
    setUID(params: BaseParams & any): Promise<any>;
    /**
     * This method updates a user's site information.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUserInfo+REST
     */
    setUserInfo(params: BaseParams & any): Promise<any>;
    /**
     * Utility method for storing the current user's settings in Gigya's database.
     *
     * @see http://developers.gigya.com/display/GD/socialize.setUserSettings+REST
     */
    setUserSettings(params: BaseParams & any): Promise<any>;
    /**
     * This utility method provides access to a URL shortening service.
     *
     * @see http://developers.gigya.com/display/GD/socialize.shortenURL+REST
     */
    shortenURL(params: BaseParams & SocializeShortenURLParams): Promise<GigyaResponse & SocializeShortenURLResponse>;
}
export interface SocializeNotifyLoginParamsBase {
    siteUID?: string;
    providerSessions?: {
        [key: string]: any;
    };
    actionAttributes?: {
        [key: string]: string;
    };
    cid?: string;
    newUser?: boolean;
    regSource?: string;
    sessionExpiration?: SessionExpiration;
    targetEnv?: TargetEnv;
    userInfo?: {
        firstName?: string;
        lastName?: string;
        gender?: Gender;
        photoURL?: string;
        thumbnailURL?: string;
        nickname?: string;
        age?: number;
    };
}
export interface SocializeNotifyLoginParamsSiteUID extends SocializeNotifyLoginParamsBase {
    siteUID: string;
}
export interface SocializeNotifyLoginParamsProviderSessions extends SocializeNotifyLoginParamsBase {
    providerSessions: {
        [key: string]: any;
    };
}
export interface SocializeNotifyLoginResponse {
    UID: string;
    UIDSignature: string;
    signatureTimestamp: string;
    cookieName?: string;
    cookieValue?: string;
    cookieDomain?: string;
    cookiePath?: '/';
    sessionToken?: string;
    sessionSecret?: string;
    regToken?: string;
}
export interface SocializeShortenURLParams {
    url: string;
    cid?: string;
}
export interface SocializeShortenURLResponse {
    shortURL: string;
}
export default Socialize;
