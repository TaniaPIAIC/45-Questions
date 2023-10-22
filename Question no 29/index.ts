//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favouritefriits:string[]=["apple","orange","banana","cherry","peach"];
if(favouritefriits.includes("apple")){
    console.log(`You really like apples!`);   
}
else if(favouritefriits.includes("orange")){
    console.log(`You really like oranges!`);   
}
else if(favouritefriits.includes("banana")){
    console.log(`You really like bananas!`);   
}
else if(favouritefriits.includes("strawberry")){
    console.log(`you really like strawberries!`);
    
}else {
    console.log(`you don't have strawberries in your list of favourite fruits`);
    
}
 if(favouritefriits.includes("grapes")){
    console.log(`you really like grapes!`);
    
}else{
    console.log(`you don't have grapes in your list of favourite fruits`);
    
}
