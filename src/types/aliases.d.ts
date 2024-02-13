type httpMethod = 'post' | 'get';
type coolString = string;
declare function fetchWithAuth4(url: coolString, method: httpMethod): 1 | -1;
declare let user10: {
    name: string;
    age: number;
    skills: string[];
};
type User = {
    name: string;
    age: number;
    skills: string[];
};
declare let user11: User;
type Role = {
    id: number;
};
type UserWithRole = User & Role;
declare let user12: UserWithRole;
