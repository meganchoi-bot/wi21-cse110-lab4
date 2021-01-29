let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// Print the value of the property if the property start with 'r' or the value is odd
for (prop in statistics) {
    // if prop begins wit letter r or prop value is odd
    if (prop.charAt(0) == 'r' || `${statistics[prop]}` % 2 != 0) {
        // print the value of the prop
        console.log(`${statistics[prop]}`);
    }
}