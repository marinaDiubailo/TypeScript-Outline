/**порядок декораторов */

/**Универсальный декоратор */
function Uni(name: string): any {
    console.log(`Инициализация ${name}`);

    return function () {
        console.log(`Вызов ${name}`);
    };
}

@Uni('Class')
class MyClass {
    @Uni('Prop')
    prop?: any;

    @Uni('Static Prop')
    static staticProp?: any;

    @Uni('Method')
    method(@Uni('Parameter') _: any) {}

    @Uni('Static Method')
    static method(@Uni('Parameter of static method') _: any) {}

    constructor(@Uni('Parameter of constructor') _: any) {}
}

/**итог в корсоли
 * 
 *  Инициализация Prop
    Вызов Prop
    Инициализация Method
    Инициализация Parameter
    Вызов Parameter
    Вызов Method
    Инициализация Static Prop
    Вызов Static Prop
    Инициализация Static Method
    Инициализация Parameter of static method
    Вызов Parameter of static method
    Вызов Static Method
    Инициализация Class
    Инициализация Parameter of constructor
    Вызов Parameter of constructor
    Вызов Class
 */
