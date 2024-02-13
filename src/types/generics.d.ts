declare const toStringg: <T_1>(data: T_1) => string | undefined;
declare const data2: {
    id: number;
    name: string;
}[];
interface Id {
    id: number;
}
declare function sort2<T extends Id>(data: T[], type?: 'asc' | 'desc'): T[];
declare function sort<T extends Id>(data: T[], type?: 'asc' | 'desc'): T[];
