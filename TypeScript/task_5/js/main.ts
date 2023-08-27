export interface MajorCredits {
    _MajorCreditBrand: void;
    credits: number;
}

export interface MinorCredits {
    _majorCreditBrand: void;
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Test cases
const majorSubject1: MajorCredits = { _MajorCreditBrand: undefined, credits: 3 };
const majorSubject2: MajorCredits = { _MajorCreditBrand: undefined, credits: 4 };

const minorSubject1: MinorCredits = { _majorCreditBrand: undefined, credits: 2 };
const minorSubject2: MinorCredits = { _majorCreditBrand: undefined, credits: 1 };

const sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of Major Credits:", sumOfMajorCredits);

const sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of Minor Credits:", sumOfMinorCredits);
