const sumMod10 = (a,b)=>{
    const ans = (a+b)%10

    const printPretty = (txt)=>{
        console.log("------",txt,"----------")
    };
    printPretty(ans);
};

sumMod10(10,34)


const user = {
    "name":"rudra",
    "gender":"male",
    "surname":"tiwari"
}

console.log(user.name)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

let obj = {};
Object.defineProperties(obj, {
"id":{
    value: 101,
    writable: false,  
    enumerable: true,  
    configurable: false 
},
"name":{
value:"rudra",
writable:false,
enumerable:true,
configurable:false
}
}
);

let address={}

Object.defineProperty(address,
    "street",{
        value:"ghaziabad",
        writable:false,
        enumerable:false,
        configurable:false
    }
)
console.log(address.street)
delete obj.name
console.log(obj)



console.log("===============================Arrays in javascript========================================")
