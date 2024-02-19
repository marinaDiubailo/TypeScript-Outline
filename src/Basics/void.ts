function logIN(id: string | number): void {
    console.log(id);
}
const aaa = logIN(1);
// void означает что функция ничего не возвращает

/* @internal */
type voidFunction = () => void;
const f1: voidFunction = () => {};
const f2: voidFunction = () => {
    return true;
    // что бы мы не вернули это будет игнорироваться
};
const bbb = f2(); // void
// уюобно применять, когда нужно чтобы функция выполнялась с заданными параметрами
// но нам все равно, что она будет возвращать

const skillss = ['dev', 'devops'];
console.log(skillss);
const uuser = {
    s: ['skill'],
};
const uurr = skillss.forEach((skill) => uuser.s.push(skill));
console.log(uurr);
console.log(skillss);
console.log(uuser);
