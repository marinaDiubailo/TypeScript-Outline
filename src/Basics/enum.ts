/**
 *                            Enum
    Тип enum или перечисление позволяет определить набор именованных констант,
которые описывают определенные состояния.
    Для определения перечисления применяется ключевое слово enum.
    Например, объявим следующее перечисление:

	enum Season { Winter, Spring, Summer, Autumn };

    Перечисление называется Season и имеет четыре элемента. Теперь используем перечисление:

	enum Season { Winter, Spring, Summer, Autumn };
    let current: Season = Season.Summer;
    console.log(current);       // 2
    current = Season.Autumn;    // изменение значения

    Здесь создается переменная current, которая имеет тип Season.
    При этом консоль браузера выведет нам число 2 - значение константы Season.Summer.

    Числовые перечисления
    По умолчанию константы перечисления, как в примере выше, представляют числовые значения.
То есть это так называемое числовое перечисление, в котором каждой константе сопоставляется числовое значение.
Так, созданное выше в примере перечисление

enum Season { Winter, Spring, Summer, Autumn };

фактически эквивалентно следующему:

enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };

    Хотя мы можем явным образом переопределить эти значения.
Так, мы можем задать значение одной константы, тогда значения следующих констант будет увеличиваться на единицу:

enum Season { Winter=5, Spring, Summer, Autumn };           // 5, 6, 7, 8
	
Либо можно каждой константе задать свое значение:

enum Season { Winter=4, Spring=8, Summer=16, Autumn=32 };   // 4, 8, 16, 32

Также мы можем получить непосредственно текстовое значение:

enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };
var current: string = Season[2];    // 2 - числовое значение Summer
console.log(current);   // Summer

    Строковые перечисления
Кроме числовых перечислений в TypeScript есть строковые перечисления,
константы которых принимают строковые значения:

	enum Season { 
    Winter = "Зима", 
    Spring = "Весна",
    Summer = "Лето", 
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето

    Смешанные гетерогенные перечисления
Также можно определять смешанные перечисления, константы которых могут числа и строки.

	enum Season { 
    Winter = 1, 
    Spring = "Весна",
    Summer = 3, 
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);           // 3
console.log(Season.Autumn);     // Осень

    Рассчитываемые

Enum Decision {
    Yes = 1,
    No = calcEnum()
}

Function calcEnum() {
    return 2;
}
*/

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 3,
}

const resultat = {
    message: 'Платеж успешен',
    satusCode: StatusCode.SUCCESS,
};

// 1 -успех
// 2 - в процессе
// 3 -отклонен

function action(status: StatusCode) {
    console.log(status);
}
action(StatusCode.SUCCESS); // 1
action(1); //1
action(2); // 2
action(StatusCode.IN_PROCESS); // p
action(4); // 4

function compute() {
    return 3;
}
enum Roles {
    ADMIN = 1,
    USER = 2,
    DIRECTOR = compute(),
}
// Иногда enum ведет себя как объект
//function test(x: { ADMIN: number }) {
//	console.log(x);
//}
//test(Roles);
const enum Roles2 {
    ADMIN = 1,
    USER = 2,
}
const res10 = Roles2.ADMIN;
