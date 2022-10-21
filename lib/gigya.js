"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var sleep_1 = require("./helpers/sleep");
var sig_utils_1 = require("./sig-utils");
var admin_1 = require("./admin");
var socialize_1 = require("./socialize");
var accounts_1 = require("./accounts");
var ds_1 = require("./ds");
var gm_1 = require("./gm");
var fidm_1 = require("./fidm");
var reports_1 = require("./reports");
var idx_1 = require("./idx");
var gigya_error_1 = require("./gigya-error");
var error_code_1 = require("./interfaces/error-code");
var DefaultHttpRequest = require("./helpers/default-http-request");
var CredentialsSigner_1 = require("./requestsSigners/CredentialsSigner");
var RequestFactory_1 = require("./RequestFactory");
var PartnerSecretSigner_1 = require("./requestsSigners/PartnerSecretSigner");
var AnonymousRequestSigner_1 = require("./requestsSigners/AnonymousRequestSigner");
var AuthBearerSigner_1 = require("./requestsSigners/AuthBearerSigner");
var SimpleRequestSigner_1 = require("./requestsSigners/SimpleRequestSigner");
var AuthRequestSigner_1 = require("./requestsSigners/AuthRequestSigner");
var strictUriEncode_1 = require("./helpers/strictUriEncode");
__export(require("./sig-utils"));
__export(require("./admin"));
__export(require("./socialize"));
__export(require("./accounts"));
__export(require("./ds"));
__export(require("./gm"));
__export(require("./fidm"));
__export(require("./reports"));
__export(require("./idx"));
__export(require("./gigya-error"));
__export(require("./interfaces/error-code"));
var Gigya = /** @class */ (function () {
    function Gigya(apiKeyOrProxy, _dataCenter, userKeyOrSecretOrCredentialsOrProxy, secret) {
        if (_dataCenter === void 0) { _dataCenter = 'us1'; }
        this._dataCenter = _dataCenter;
        var creds = false;
        // Work with overload signature.
        if (typeof apiKeyOrProxy === 'function') {
            this.httpRequest = apiKeyOrProxy;
        }
        else if (apiKeyOrProxy) {
            this._apiKey = apiKeyOrProxy;
            switch (typeof userKeyOrSecretOrCredentialsOrProxy) {
                case 'object':
                    creds = userKeyOrSecretOrCredentialsOrProxy;
                    break;
                case 'string':
                    if (!secret) {
                        creds = { secret: userKeyOrSecretOrCredentialsOrProxy };
                    }
                    else {
                        creds = {
                            userKey: userKeyOrSecretOrCredentialsOrProxy,
                            secret: secret
                        };
                    }
                    break;
                case 'function': // proxy
                    this.httpRequest = userKeyOrSecretOrCredentialsOrProxy;
                // fallthrough
                default:
                    creds = false;
            }
        }
        // Late-initialize default proxy to support browser-based environments.
        // Should not typically be used instead of Gigya JS SDK for public-facing sites.
        // Designed for environments where access is given directly to API in browser but request is proxied through server for credentials.
        if (!this.httpRequest) {
            this.httpRequest = DefaultHttpRequest.httpRequest;
        }
        // Initialize sub-classes.
        this.sigUtils = new sig_utils_1.default(secret);
        this.admin = new admin_1.default(this);
        this.socialize = new socialize_1.default(this);
        this.accounts = new accounts_1.default(this);
        this.ds = new ds_1.default(this);
        this.gm = new gm_1.default(this);
        this.fidm = new fidm_1.default(this);
        this.reports = new reports_1.default(this);
        this.idx = new idx_1.default(this);
        this.setCredentials(creds);
    }
    Gigya.prototype.setCredentials = function (credentials) {
        var signer = this.getSigner(credentials);
        if (!signer)
            throw 'unsupported credentials';
        this._signer = signer;
        return this;
    };
    Gigya.prototype.getSigner = function (credentials) {
        if (AnonymousRequestSigner_1.isAnonymous(credentials)) {
            return new AnonymousRequestSigner_1.AnonymousRequestSigner();
        }
        else if (PartnerSecretSigner_1.hasPartnerSecret(credentials)) {
            return new PartnerSecretSigner_1.PartnerSecretSigner(credentials.secret);
        }
        else if (AuthRequestSigner_1.isCredentials(credentials)) {
            if (AuthBearerSigner_1.isRSACreds(credentials)) {
                return new AuthBearerSigner_1.AuthBearerSigner(credentials);
            }
            else if (SimpleRequestSigner_1.isSecretCredentials(credentials)) {
                return new CredentialsSigner_1.CredentialsSigner(this.sigUtils, credentials, DefaultHttpRequest.httpMethod);
            }
            else {
                throw 'missing secret/privateKey';
            }
        }
        return null;
    };
    /**
     * Make request to Gigya. Typically, you'll want to use the defined interface (for example gigya.accounts.getAccountInfo) instead of calling request directly.
     *
     * If a method is not available, create an issue or pull request at: https://github.com/scotthovestadt/gigya
     */
    Gigya.prototype.request = function (endpoint, userParams) {
        if (userParams === void 0) { userParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._request(endpoint, userParams)];
            });
        });
    };
    /**
     * Internal handler for requests.
     */
    Gigya.prototype._request = function (endpoint, userParams, retries) {
        if (retries === void 0) { retries = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var requestFactory, request, signer, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestFactory = new RequestFactory_1.RequestFactory(userParams.apiKey || this._apiKey, userParams.dataCenter || this._dataCenter);
                        request = requestFactory.create(endpoint, userParams);
                        if (!request.skipSigning) {
                            signer = this.getSigner(userParams) || this._signer;
                            signer.sign(request);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 7]);
                        return [4 /*yield*/, this.httpRequest(request.endpoint, request.host, request.params, request.headers)];
                    case 2:
                        response = _a.sent();
                        // Non-zero error code means failure.
                        if (response.errorCode !== 0) {
                            throw this.createErrorFromResponse(response, endpoint, userParams);
                        }
                        return [3 /*break*/, 7];
                    case 3:
                        e_1 = _a.sent();
                        if (!(e_1.errorCode === error_code_1.default.GENERAL_SERVER_ERROR
                            || e_1.errorCode === error_code_1.default.SEARCH_TIMED_OUT
                            || e_1.errorCode === error_code_1.default.CONCURRENT_UPDATES_NOT_ALLOWED)) return [3 /*break*/, 6];
                        retries++;
                        if (!(retries < Gigya.RETRY_LIMIT)) return [3 /*break*/, 6];
                        if (!Gigya.RETRY_DELAY) return [3 /*break*/, 5];
                        return [4 /*yield*/, sleep_1.default(Gigya.RETRY_DELAY)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this._request(endpoint, userParams, retries)];
                    case 6: throw e_1;
                    case 7:
                        if (!(response.errorCode === error_code_1.default.RATE_LIMIT_HIT)) return [3 /*break*/, 9];
                        // Try again after waiting.
                        return [4 /*yield*/, sleep_1.default(Gigya.RATE_LIMIT_SLEEP)];
                    case 8:
                        // Try again after waiting.
                        _a.sent();
                        return [2 /*return*/, this._request(endpoint, userParams, retries)];
                    case 9:
                        // Ensure Gigya returned successful response. If not, throw error with details.
                        if ((response.errorCode !== error_code_1.default.SUCCESS
                            && response.errorCode !== undefined // exportUsers doesn't return an error code
                            && response.errorCode !== error_code_1.default.PENDING_REGISTRATION
                            && response.errorCode !== error_code_1.default.PENDING_VERIFICATION)) {
                            throw this.createErrorFromResponse(response, endpoint, userParams);
                        }
                        // Return Gigya's successful response.
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Gigya.prototype.createRequestSignature = function (secret, uri, requestParams) {
        var httpMethod = DefaultHttpRequest.httpMethod.toUpperCase();
        var queryString = Object.keys(requestParams)
            .sort()
            .map(function (key) { return key + "=" + strictUriEncode_1.default((requestParams[key] || '').toString()); })
            .join('&');
        var baseString = httpMethod + "&" + strictUriEncode_1.default(uri) + "&" + strictUriEncode_1.default(queryString);
        return this.sigUtils.calcSignature(baseString, secret);
    };
    /**
     * Create GigyaError from response.
     */
    Gigya.prototype.createErrorFromResponse = function (response, endpoint, params) {
        // Create meaningful error message.
        var errorMessage = "Gigya API " + endpoint + " failed with error code " + response.errorCode;
        var errorDetails = response.errorDetails ? response.errorDetails : response.errorMessage;
        if (errorDetails) {
            errorMessage += " and message " + errorDetails;
        }
        if (response.validationErrors) {
            errorMessage += ':';
            for (var _i = 0, _a = response.validationErrors; _i < _a.length; _i++) {
                var validationError = _a[_i];
                errorMessage += " " + validationError.fieldName + ": " + validationError.message;
            }
        }
        var error = new gigya_error_1.default(errorMessage);
        error.gigyaResponse = response;
        error.errorCode = response.errorCode;
        error.params = params;
        return error;
    };
    Gigya.RATE_LIMIT_SLEEP = 2000;
    Gigya.RETRY_LIMIT = 5;
    Gigya.RETRY_DELAY = 5000;
    return Gigya;
}());
exports.Gigya = Gigya;
exports.default = Gigya;
//# sourceMappingURL=gigya.js.map