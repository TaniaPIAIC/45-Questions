// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//Tests for equality and inequality with strings

const isEqual = "apple" === "apple";
// const isNotEqual="apple"="banana";

//Tests using the lower case function

const isEqualLower="HELLO".toLowerCase()==="hello";
const isNotEqualLower=" WORLD".toLowerCase()==="world";

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Equality
const isEqualNum=5===5;
//InEquality
// const isNotEqualNum=7===!4:
//Greater than
const isGreaterthan=7>5;
//Less than
const isLessthan=3<5;
//is Greater than or Equal to
const isGreaterorEqual=5>=5;
//Less than or Equal to
const isLessorEqual=5<=3;

//True
const andTrue=true && true;
//False
const andFalse=true&&false;
//True
const orTrue=true||false;
//False
const orFalse=false||false;

// Test whether an item is in a array

 const fruits:string[]=["apple","banana","grapes","orange"];
 const item2: string = "banana";
 const isInArray: boolean = fruits.includes(item2);
 if (isInArray){
     console.log(`${item2},is in the list`);  
 }else{
     console.log(`${item2},is not in the list`);
    
 }


// • Test whether an item is not in a array

const colors1:string[]=["green","blue","white"];
const item3:string="yellow";
const isNotInArray: boolean = !colors1.includes(item3);
if(isNotInArray){
    console.log(`${item3} is not in the list.`);
} 
else{
    console.log(`${item3},is in the list`);
    
}