let input: any; // есби бы было any, то ошибки не было бы
input = 3;
input = ['aaa', 'ssss'];
let resultatt: string = input; // Ошибка: тип unknown не может быть назначен для типа string
// unknown более строгий тип чем any

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    // сужения типа не происходит
  }
}
// случаи, где явно встречается unknown
async function getData1() {
  try {
    await fetch('');
  } catch (error) {
    // тип unknown
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
type UI = unknown | number;
// union тип с unknown всегда становиться unknown
type I1 = unknown & string;
// intersection с unknown всегда дает другой указанный тип
