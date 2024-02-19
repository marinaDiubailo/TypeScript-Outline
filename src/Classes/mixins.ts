type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

type ListType = GConstructor<List>;

class List {
    constructor(public items: string[]) {}
}

class ListExtended extends List {
    first() {
        this.items[0];
    }
}

// mixin -  функция, которая аргументом получает некоторый класс
// и возвращает новый класс
// с расширенным функционалом, который
// экстендит класс, переданный аргументов.

function ExtendedListMixin<TBase extends ListType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            this.items[0];
        }
    };
}

const list = ExtendedListMixin(List);
const resl = new list(['first', 'second']);

resl.first();

type AccordionType = GConstructor<Accordion>;

class Accordion {
    isOpened: boolean;
}

class AccordionList {
    isOpened: boolean;

    constructor(public items: string[]) {}
}

function ExtendedAccordionMixin<TBase extends ListType & AccordionType>(
    Base: TBase,
) {
    return class ExtendedList extends Base {
        first() {
            this.isOpened = false;
            this.items[0];
        }
    };
}

const list2 = ExtendedAccordionMixin(AccordionList);
const resl2 = new list2(['first', 'second']);
resl2.isOpened;
