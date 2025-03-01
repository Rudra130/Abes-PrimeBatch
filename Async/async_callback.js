console.log("start")

// const handleInnerCall= () =>{
//     console.log("Step Y")
// };

const handleCall = () =>{
    console.log("Step M")
    console.log("Step N")
}

//setTimeOut(callback,time in milisecond)
//callback -> A function that is parameter for the another function

//time in  milliseconds


setTimeout(()=>{
    console.log("N");

    setTimeout(()=>{
        console.log("P");
    },1000)
    handleCall();

    console.log("B")
},5000)
//outer settime out will run after 5 sec and inner settimeout will run after 6 sec (5 sec + 1sec)
console.log("end")