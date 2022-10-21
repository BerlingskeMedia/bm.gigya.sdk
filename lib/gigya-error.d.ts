import GigyaResponse from './interfaces/gigya-response';
export * from './interfaces/gigya-response';
export declare class GigyaError extends Error {
    gigyaResponse: GigyaResponse;
    errorCode: number;
    params: any;
}
export default GigyaError;
