namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (this._teacher && this._teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this._teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
