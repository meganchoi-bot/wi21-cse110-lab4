// call printTime() function every second
var intervalID = setInterval(printTime, 1000);
// function to print the time
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}