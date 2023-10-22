// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great1(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(magician + ' the Great');
    }

    return greatMagicians;
}

const magicianNames1: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Create a new array with great magician names
const greatMagicians1 = make_great1([...magicianNames1]);

// Call the function to show the original magician names
show_magicians1(magicianNames1);

// Call the function to show the great magician names
show_magicians1(greatMagicians1);