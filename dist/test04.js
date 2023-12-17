"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSoccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
function getIDFromData(res) {
    if (isSoccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
//# sourceMappingURL=test04.js.map