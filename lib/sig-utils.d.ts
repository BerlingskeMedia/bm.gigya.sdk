/**
 * This class is a utility class with static methods for calculating and validating cryptographic signatures.
 */
export declare class SigUtils {
    protected secret: string;
    constructor(secret?: string);
    /**
     * This is a utility method for generating a cryptographic signature.
     */
    calcSignature(baseString: string, secret?: string): string;
    /**
     * Use this method to verify the authenticity of a socialize.getUserInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    validateUserSignature(UID: string, timestamp: number, signature: string, secret?: string): boolean;
    /**
     * Use this method to verify the authenticity of a socialize.getFriendsInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    validateFriendSignature(UID: string, timestamp: number, friendUID: string, signature: string, secret?: string): boolean;
    /**
     * Use this method as part of implementing dynamic control over login session expiration, in conjunction with assigning the value '-1' to the sessionExpiration parameter.
     *
     * Write the result to cookie: 'gltexp_${apiKey}'.
     */
    getDynamicSessionSignature(gltCookie: string, timeoutInSeconds: number, secret?: string): string;
}
export default SigUtils;
