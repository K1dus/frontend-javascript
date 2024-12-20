// Define interfaces for MajorCredits and MinorCredits with brand properties

interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'major' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}

// Example Usage

// Create example MajorCredits and MinorCredits objects
const majorSubject1: MajorCredits = { credits: 5, brand: 'major' };
const majorSubject2: MajorCredits = { credits: 3, brand: 'major' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'minor' };

// Calculate total credits
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

// Log the results
console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
