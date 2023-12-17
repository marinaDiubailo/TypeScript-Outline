const toStringg = <T>(data: T): string | undefined => {
    if (Array.isArray(data)) return data.toString();

    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'boolean':
        case 'bigint':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
};

const data2 = [
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Вася2' },
    { id: 12, name: 'Вася10' },
    { id: 10, name: 'Вася5' },
];

interface Id {
    id: number;
}

function sort2<T extends Id>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    if (type === 'asc') {
        const sortedAsc = data.sort((a, b) => (a.id > b.id ? 1 : -1));
        return sortedAsc;
    } else {
        const sortedDesc = data.sort((a, b) => (a.id > b.id ? -1 : 1));
        return sortedDesc;
    }
}

function sort<T extends Id>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}

console.log(sort(data2));
console.log(sort(data2, 'desc'));
