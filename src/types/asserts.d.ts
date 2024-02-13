interface UserT {
    name: string;
}
declare const aT: {};
declare function assertUser(obj: unknown): asserts obj is UserT;
