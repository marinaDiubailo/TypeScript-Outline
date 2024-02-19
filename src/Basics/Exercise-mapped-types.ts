interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: 'kkj',
    password: '123',
};

const formValidation: formValidationType = {
    name: { isValid: true },
    password: {
        isValid: false,
        errorMessage: 'Должен быть длиннее 5 символов',
    },
};

type ValidationMap<T> = {
    [P in keyof T]:
        | { isValid: true }
        | {
              isValid: false;
              errorMessage: string;
          };
};

type formValidationType = ValidationMap<IForm>;
