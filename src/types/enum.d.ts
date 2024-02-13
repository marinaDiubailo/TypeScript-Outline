declare enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = "p",
    FAILED = 3
}
declare const resultat: {
    message: string;
    satusCode: StatusCode;
};
declare function action(status: StatusCode): void;
declare function compute(): number;
declare enum Roles {
    ADMIN = 1,
    USER = 2,
    DIRECTOR
}
declare const enum Roles2 {
    ADMIN = 1,
    USER = 2
}
declare const res10 = Roles2.ADMIN;
