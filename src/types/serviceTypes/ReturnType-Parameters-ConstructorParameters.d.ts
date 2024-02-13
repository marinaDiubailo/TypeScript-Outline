declare class User35 {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<(<T>() => T)>;
type RT4 = ReturnType<(<T extends string>() => T)>;
type PT = Parameters<typeof getData>;
type CP = ConstructorParameters<typeof User35>;
