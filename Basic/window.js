console.log(window)

var x = 5;
console.log(window.x);

window.alert("Hello");
window.setTimeout(() => window.console.log("Hi"), 1000);

console.log(window.document); 