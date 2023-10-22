//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items:string[]):void{
    console.log(`Sandwhich order summary:`);
    console.log(`Bread`);
    for(const item of items){
        console.log(item);
        
    }
    console.log(`Bread`);
    
    
}
make_sandwich('Cheese', 'Lettuce', 'Tomato', 'Mayonnaise');
make_sandwich('Turkey', 'Swiss Cheese', 'Pickles')
make_sandwich('Ham', 'Mustard');
