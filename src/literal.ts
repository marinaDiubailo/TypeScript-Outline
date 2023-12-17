// С помощью enum
enum RequestType {
    GET = 'get',
    POST = 'post',
} // method: RequestType

// literal
function fetchWithAuth(url: string, method: 'post' | 'get') {
    // тело функции
}
fetchWithAuth('url', 'post'); // корректный вызов функции
// fetchWithAuth('url', 's'); // некорректный

function fetchWithAuth2(url: string, method: 1 | 2) {
    // тело функции
}
fetchWithAuth2('url', 1); // корректный вызов функции
// fetchWithAuth2('url', 's'); // некорректный

function fetchWithAuth3(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1; // можно вернуть либо 1, либо -1
}

let qqq: 'abc' = 'abc';
// что эквивалентно, где у qqq тип не string, а 'abc'
//const qqq = 'abc';

let method = 'post';
fetchWithAuth3('url', method as 'post'); // каст as для приведения к конкретному типу
