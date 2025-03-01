const myCar= {
    make:"honda",
    model:"Accord",
    year:1998
}

sayHello("hi")
function sayHello(txt){
    console.log(txt)
}
console.log(myCar)
change(myCar);
function change(obj){
    obj.make="hero"
}
 

console.log(myCar)

function addSquare(a,b){
    function square(x){
         return x*x
    }
    return square(a)+square(b);
}

 res = addSquare(5,6)
console.log(res)



