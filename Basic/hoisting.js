// console.log(x);  //undefined
// console.log(y);   //Uncaught ReferenceError: Cannot access 'y' before initialization
// console.log(z);    //Uncaught ReferenceError: Cannot access 'z' before initialization

// a();
// b();
// c();

// l();  // l is not a function
// console.log(l);  // undefined
// m();  //  Uncaught ReferenceError: Cannot access 'm' before initialization
// console.log(m);  // cannot access 'm' before initialization
// n();   //  Uncaught ReferenceError: Cannot access 'n' before initialization


var x=10;
let y=20;
const z=30;

function a(){
    console.log('function a')
}
function b(){
    console.log('function b')
}
function c(){
    console.log('function c')
}

var l=function (){
    console.log('function l')
}
let m=function (){
    console.log('function m')
}
const n=function (){
    console.log('function n')
}


// console.log(x);
// console.log(y);
// console.log(z);

// a();
// b();
// c();

// l();
// m();
// n();

// console.log(l); //printing the full function
// console.log(m); //printing the full function
// console.log(n); //printing the full function