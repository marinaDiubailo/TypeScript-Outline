type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;
interface IMenu {
    name: string;
    url: string;
}
declare function getMenu(): Promise<IMenu[]>;
type R = Awaited<ReturnType<typeof getMenu>>;
declare function getArray<T>(func: T): Promise<Awaited<T>[]>;
