"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    ErrorCode[ErrorCode["PENDING_REGISTRATION"] = 206001] = "PENDING_REGISTRATION";
    ErrorCode[ErrorCode["PENDING_VERIFICATION"] = 206002] = "PENDING_VERIFICATION";
    ErrorCode[ErrorCode["UID_EXISTS"] = 409001] = "UID_EXISTS";
    ErrorCode[ErrorCode["LOGIN_ID_EXISTS"] = 403043] = "LOGIN_ID_EXISTS";
    ErrorCode[ErrorCode["VALIDATION_ERROR"] = 400009] = "VALIDATION_ERROR";
    ErrorCode[ErrorCode["USERNAME_EXISTS"] = 400003] = "USERNAME_EXISTS";
    ErrorCode[ErrorCode["INVALID_API_KEY"] = 400093] = "INVALID_API_KEY";
    ErrorCode[ErrorCode["CONCURRENT_UPDATES_NOT_ALLOWED"] = 409030] = "CONCURRENT_UPDATES_NOT_ALLOWED";
    ErrorCode[ErrorCode["NO_PERMISSION"] = 403007] = "NO_PERMISSION";
    ErrorCode[ErrorCode["RATE_LIMIT_HIT"] = 403048] = "RATE_LIMIT_HIT";
    ErrorCode[ErrorCode["GENERAL_SERVER_ERROR"] = 500001] = "GENERAL_SERVER_ERROR";
    ErrorCode[ErrorCode["SEARCH_TIMED_OUT"] = 504001] = "SEARCH_TIMED_OUT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.default = ErrorCode;
//# sourceMappingURL=error-code.js.map