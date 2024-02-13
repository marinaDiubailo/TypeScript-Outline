type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type ListType = GConstructor<List>;
declare class List {
    items: string[];
    constructor(items: string[]);
}
declare class ListExtended extends List {
    first(): void;
}
declare function ExtendedListMixin<TBase extends ListType>(Base: TBase): {
    new (...args: any[]): {
        first(): void;
        items: string[];
    };
} & TBase;
declare const list: {
    new (...args: any[]): {
        first(): void;
        items: string[];
    };
} & typeof List;
declare const resl: {
    first(): void;
    items: string[];
} & List;
type AccordionType = GConstructor<Accordion>;
declare class Accordion {
    isOpened: boolean;
}
declare class AccordionList {
    items: string[];
    isOpened: boolean;
    constructor(items: string[]);
}
declare function ExtendedAccordionMixin<TBase extends ListType & AccordionType>(Base: TBase): {
    new (...args: any[]): {
        first(): void;
        items: string[];
        isOpened: boolean;
    };
} & TBase;
declare const list2: {
    new (...args: any[]): {
        first(): void;
        items: string[];
        isOpened: boolean;
    };
} & typeof AccordionList;
declare const resl2: {
    first(): void;
    items: string[];
    isOpened: boolean;
} & AccordionList;
