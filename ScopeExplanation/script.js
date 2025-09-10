// console.log(a);
// b();

// var a=10;

// function b(){
//     console.log("print inside the function")
// }

// console.log(window)
// console.log(c)
// d();    
// var c=()=>{console.log("c arrow function")}
// var d=function (){
//     console.log("d function in variable")
// }

// console.log(d)






a();
const f=10;
let g=11;
var ab=49; 
var bc;
function a(){
    // console.log(b)
    var m=10;
    const b=10;
    function c(){
        console.log("c")
    }
    d();
    function d(){
        const z=11;
        c();
        q();
        console.log(b)
        console.log("fuction from the d")
        function q(){
            console.log(z);
            const t=10;
            bc=10;
            var r=8;
            console.log("function from the q");
        }
    }
    console.log(z);
}


// console.log(window);
// console.log(globalThis)
