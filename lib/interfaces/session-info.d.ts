export interface SessionInfo {
    sessionInfo?: {
        cookieName: string;
        cookieValue: string;
        sessionToken: string;
        sessionSecret: string;
    };
    regToken?: string;
}
export default SessionInfo;
