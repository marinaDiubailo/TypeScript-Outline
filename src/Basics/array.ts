const skills: string[] = ['Dev', 'DevOps', 'Testing'];
const skills2: any = ['Dev', 'DevOps', 1]; //плохое решение, так как any лучше не использовать

for (const skill of skills) {
	console.log(skill.toLocaleUpperCase()); // DEV
} // DEVOPS // TESTING
const result = skills
	.filter((s: string) => s !== 'DevOps')
	.map((s) => s + '!')
	.reduce((a, b) => a + b);
console.log(result); // Dev!Testing!

//? Tuples
const skills3: [number, string] = [1, 'dev'];
const id = skills3[0];
const nam1 = skills3[1];
skills3.push('devops');
// Деструктуризация
const [idSkill, skillName] = skills3;
// Для дополнения массива произвольным числом элементов определенного типа
const arr: [number, string, ...boolean[]] = [1, 'abc', true, true, false];

// ReadOnly
// Таким образом мы создает немодифицируемый кортеж
const skills4: readonly [number, string] = [1, 'dev'];
const skills5: readonly string[] = ['Dev', 'DevOps', 'Testing'];
// тоже самое с использованием generics
const skills6: ReadonlyArray<string> = ['Dev', 'DevOps', 'Testing']; // skills5 = skills6
