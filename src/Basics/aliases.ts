type httpMethod = 'post' | 'get'; // union
type coolString = string; // aliase
function fetchWithAuth4(url: coolString, method: httpMethod): 1 | -1 {
    return 1;
}

let user10: {
    name: string;
    age: number;
    skills: string[];
} = {
    name: 'acd',
    age: 33,
    skills: ['1', '2'],
};
// тоже самое с использованием type

type User = {
    name: string;
    age: number;
    skills: string[];
};
let user11: User = {
    name: 'acd',
    age: 33,
    skills: ['1', '2'],
};

// intersection пересечение, можно делать на основании типов или интерфейсов.
// получить пересечение можно лишь тип, интерфейс нельзя
type Role = {
    id: number;
};
type UserWithRole = User & Role; // intersection пересечение
let user12: UserWithRole = {
    name: 'acd',
    age: 33,
    skills: ['1', '2'],
    id: 111,
};
