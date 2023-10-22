//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (const [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

// Print the car object to verify the information
console.log(myCar);