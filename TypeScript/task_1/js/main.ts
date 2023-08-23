interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number | undefined;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass {

    constructor(private firstName: string, private lastName: string) {}

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}
