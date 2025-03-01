
//for the keyboard interaction
// document.addEventListener("DOMContentLoaded",()=>{
//     const display = document.getElementById("text");
//     const keys = document.querySelectorAll(".keys");
//     keys.forEach(btn =>{
//         btn.addEventListener("keydown",(event)=>{
//             const keyValue = event.target.textContent
//             display.textContent =`Key Pressed: ${keyValue}`;
//         });
//     });
// });


//DOMContentLoaded tells that html file is completely loaded
// document.addEventListener("keydown", function(event) {
//     const display = document.getElementById("text");
//     display.textContent = `Key Pressed: ${event.key}`;
// });


document.addEventListener('keydown',(event)=>{
    const display = document.getElementById("text")
       display.textContent = `key Pressed : ${event.key.toUpperCase()}`;
       const keyElement = document.querySelector(`.keys[data-key="${event.key.toUpperCase()}"]`)
       console.log(event.key.toUpperCase())
       if(keyElement){
        keyElement.classList.add("active");
        setTimeout(()=>keyElement.classList.remove("active"),100);
       }
});

document.querySelectorAll(".keys").forEach(button => {
    button.addEventListener("click",(event)=>{
        const display = document.getElementById("text")
        display.textContent = `Key Pressed: ${event.target.textContent}`;
        this.classList.add("active");
        setTimeout(() => this.classList.remove("active"), 100);
    })
})

