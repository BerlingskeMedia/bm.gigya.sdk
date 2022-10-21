import { GigyaRequest } from "../RequestFactory";
import { ISigner } from "./ISigner";
export interface UserKeyCredentials {
    userKey?: string;
}
export declare function isCredentials(credentials: UserKeyCredentials | any): credentials is UserKeyCredentials;
export declare abstract class AuthRequestSigner<T extends UserKeyCredentials> implements ISigner {
    protected _creds: T;
    protected constructor(_creds: T);
    abstract sign(request: GigyaRequest<T>): void;
    protected createNonce(): number;
}
