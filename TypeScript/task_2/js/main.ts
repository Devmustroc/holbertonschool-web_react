interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
export const Director = class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}
export const Teacher = class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}
export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}
export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is DirectorInterface => {
    return (employee as Director).workDirectorTasks !== undefined;
}
export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else
    {
        console.log(employee.workTeacherTasks());
    }
}

export type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return 'Unknown subject';
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(teachClass('Math'));
console.log(teachClass('History'));

const director = new Director();
const teacher = new Teacher();

executeWork(director);
executeWork(teacher);
