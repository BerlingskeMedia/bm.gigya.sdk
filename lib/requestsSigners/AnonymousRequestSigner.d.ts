import { GigyaRequest } from "../RequestFactory";
import { ISigner } from "./ISigner";
export declare type NoCredentials = false;
export declare function isAnonymous(credentials: NoCredentials | any): credentials is NoCredentials;
export declare class AnonymousRequestSigner implements ISigner {
    sign(request: GigyaRequest): void;
}
