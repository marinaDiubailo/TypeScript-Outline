"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
const skills2 = ['Dev', 'DevOps', 1];
for (const skill of skills) {
    console.log(skill.toLocaleUpperCase());
}
const result = skills
    .filter((s) => s !== 'DevOps')
    .map((s) => s + '!')
    .reduce((a, b) => a + b);
console.log(result);
const skills3 = [1, 'dev'];
const id = skills3[0];
const nam1 = skills3[1];
skills3.push('devops');
const [idSkill, skillName] = skills3;
const arr = [1, 'abc', true, true, false];
const skills4 = [1, 'dev'];
const skills5 = ['Dev', 'DevOps', 'Testing'];
const skills6 = ['Dev', 'DevOps', 'Testing'];
//# sourceMappingURL=array.js.map