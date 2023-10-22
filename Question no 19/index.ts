// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest5:string[]=["Ayman","Urooba","Ayan","Amaya"]
let cannotAttend5:string="Ayman"
let newGuest5:string="Tania"
guest5[guest5.indexOf(cannotAttend5)]=newGuest5
// console.log(guest5);
// guest3.map((item)=>console.log(`Dear ${item}, i found a bigger dinner table`));
let guestBegin2:string="Tariq"
guest5.unshift("Tariq");
// console.log(guest3);
let middleGuest2:string="Zaveri"
let middleIndex2= guest5.length/2
guest5.splice(middleIndex2,0,middleGuest2);
// console.log(guest3);
guest5.push("Tania")
// console.log(guest3);
// guest3.map((item)=>console.log(`Dear ${item},you are invited for a dinner`));
console.log(guest5.length+  "peoples"+  " "+ "are invited to dinner");



