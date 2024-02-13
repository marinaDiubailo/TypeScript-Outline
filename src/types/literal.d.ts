declare enum RequestType {
    GET = "get",
    POST = "post"
}
declare function fetchWithAuth(url: string, method: 'post' | 'get'): void;
declare function fetchWithAuth2(url: string, method: 1 | 2): void;
declare function fetchWithAuth3(url: string, method: 'post' | 'get'): 1 | -1;
declare let qqq: 'abc';
declare let method: string;
