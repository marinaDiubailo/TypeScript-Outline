"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const resultat = {
    message: 'Платеж успешен',
    satusCode: StatusCode.SUCCESS,
};
function action(status) {
    console.log(status);
}
action(StatusCode.SUCCESS);
action(1);
action(2);
action(StatusCode.IN_PROCESS);
action(4);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
    Roles[Roles["DIRECTOR"] = compute()] = "DIRECTOR";
})(Roles || (Roles = {}));
const res10 = 1;
//# sourceMappingURL=enum.js.map