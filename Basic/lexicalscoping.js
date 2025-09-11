var c=10;

function a(){
    console.log('From function a',c)
    function b(){
        var d=112;
        console.log("From function ",d)
    }
    b();
}

a();
console.log(b);