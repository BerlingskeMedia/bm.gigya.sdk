"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strictUriEncode = function (string) { return encodeURIComponent(string).replace(/[!'()*]/g, function (x) { return "%" + x.charCodeAt(0).toString(16).toUpperCase(); }); };
exports.default = strictUriEncode;
//# sourceMappingURL=strictUriEncode.js.map