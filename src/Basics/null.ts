const n: null = null;
const n1: any = null;
// @ts-ignore
const n2: number = null; // ошибка
// @ts-ignore
const n3: string = null; // ошибка
// @ts-ignore
const n4: boolean = null; // ошибка
// @ts-ignore
const n5: undefined = null; // ошибка
// null может быть назначен только для переменных типа null или any

interface UUUser {
  name: string;
}
function getUserFromBase() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Nony',
    } as UUUser;
  }
}

const usserr = getUserFromBase();
if (usserr) {
  const usserrName = usserr.name;
}
