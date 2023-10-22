"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
const alien_color_pass1 = 'green';
if (alien_color_pass1 === 'green') {
    console.log("congratulations!You just earned 5 points for shooting down a green alien ");
}
else {
    console.log(" congratulations!you have just earned 10 points");
}
const alien_color_fail1 = `red`;
if (alien_color_fail1 === `yellow`) {
    console.log("congratulations!You just earned 5 points for shooting down a red alien ");
}
else {
    console.log(" congratulations!you have just earned 10 points");
}
