interface IForm {
    name: string;
    password: string;
}
declare const form: IForm;
declare const formValidation: formValidationType;
type ValidationMap<T> = {
    [P in keyof T]: {
        isValid: true;
    } | {
        isValid: false;
        errorMessage: string;
    };
};
type formValidationType = ValidationMap<IForm>;
