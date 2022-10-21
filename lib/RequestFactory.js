"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var RequestFactory = /** @class */ (function () {
    function RequestFactory(_apiKey, _dataCenter) {
        this._apiKey = _apiKey;
        this._dataCenter = _dataCenter;
    }
    RequestFactory.prototype.create = function (endpoint, userParams) {
        // Endpoint "accounts.getAccountInfo" and data center "us1" become "accounts.us1.gigya.com".
        var namespace = endpoint.substring(0, endpoint.indexOf('.'));
        var isAdminEndpoint = namespace == 'admin';
        var isOAuth = !!userParams.oauth_token;
        // Data center can be passed as a "param" but shouldn't be sent to the server.
        var dataCenter = this._dataCenter;
        if (!isAdminEndpoint) {
            // treat "dataCenter" param as domain override
            // (else keep as an admin endpoint parameter - like for admin.createSite
            dataCenter = userParams.dataCenter || dataCenter;
            delete userParams.dataCenter;
            // complete default apikey only if not oauth request.
            if (!userParams.apiKey && !isOAuth) {
                userParams.apiKey = this._apiKey;
            }
        }
        var request = {
            host: this.getRequestHost(namespace, dataCenter),
            endpoint: endpoint,
            params: this.getRequestParams(userParams),
            headers: {},
            skipSigning: isOAuth || this.isAnonymousEndpoint(endpoint)
        };
        return request;
    };
    RequestFactory.prototype.isAnonymousEndpoint = function (endpoint) {
        return [
            'accounts.getScreenSets',
            'accounts.getJWTPublicKey'
        ].includes(endpoint);
    };
    RequestFactory.prototype.getRequestHost = function (namespace, dataCenter) {
        return namespace + "." + dataCenter + "." + (dataCenter != 'cn1' ? 'gigya.com' : 'gigya-api.cn');
    };
    RequestFactory.prototype.getRequestParams = function (userParams) {
        return _.assignIn(_.mapValues(userParams, function (value) {
            if (value && (_.isObject(value) || _.isArray(value))) {
                // Gigya wants arrays and objects stringified into JSON, eg Account profile and data objects.
                return JSON.stringify(value);
            }
            else if (value === null) {
                // Null is meaningful in some contexts. Ensure it is passed.
                return 'null';
            }
            else {
                return value;
            }
        }), {
            format: 'json'
        });
    };
    return RequestFactory;
}());
exports.RequestFactory = RequestFactory;
//# sourceMappingURL=RequestFactory.js.map