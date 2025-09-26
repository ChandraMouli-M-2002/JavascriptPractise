function a(){
    var a=10;
    console.log(a);
    console.log(d);
    function b(){
        var d=20;
        function c(){
            var e=30;
        }
    }
}

a();// 10, d is not defined