interface MajorCredits {
    brand: "Major";
    credits: number;
}

interface MinorCredits {
    brand: "Minor";
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        brand: "Major",
        credits: subject1.credits + subject2.credits,
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        brand: "Minor",
        credits: subject1.credits + subject2.credits,
    };
}

// Test cases
const majorSubject1: MajorCredits = { brand: "Major", credits: 3 };
const majorSubject2: MajorCredits = { brand: "Major", credits: 4 };

const minorSubject1: MinorCredits = { brand: "Minor", credits: 2 };
const minorSubject2: MinorCredits = { brand: "Minor", credits: 1 };

const sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of Major Credits:", sumOfMajorCredits);

const sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of Minor Credits:", sumOfMinorCredits);

