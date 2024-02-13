"use strict";
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
}
fetchWithAuth('url', 'post');
function fetchWithAuth2(url, method) {
}
fetchWithAuth2('url', 1);
function fetchWithAuth3(url, method) {
    return 1;
}
let qqq = 'abc';
let method = 'post';
fetchWithAuth3('url', method);
//# sourceMappingURL=literal.js.map