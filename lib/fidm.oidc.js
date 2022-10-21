"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var fidm_oidc_op_1 = require("./fidm.oidc.op");
var fidm_oidc_rp_1 = require("./fidm.oidc.rp");
__export(require("./fidm.oidc.op"));
__export(require("./fidm.oidc.rp"));
var FidmOidc = /** @class */ (function () {
    function FidmOidc(gigya) {
        this.gigya = gigya;
        this.op = new fidm_oidc_op_1.default(gigya);
        this.rp = new fidm_oidc_rp_1.default(gigya);
    }
    return FidmOidc;
}());
exports.FidmOidc = FidmOidc;
exports.default = FidmOidc;
//# sourceMappingURL=fidm.oidc.js.map