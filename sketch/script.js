const btn = document.getElementById('newGrid')
const container = document.getElementById('container')
const btn1 = document.getElementById('change')


function createGrid(size){
    container.innerHTML = "";

    for(let i = 0 ;i<size*size ;i++){

        const squareSize = 960/size
        const newElement = document.createElement('div')
        newElement.style.border='1px solid'
        newElement.classList.add('square')
        newElement.style.width = `${squareSize}px`;
        newElement.style.height = `${squareSize}px`;
        let darkness=0


        newElement.addEventListener('mouseover',()=>{
            const red = Math.floor(Math.random()*255)
            const green = Math.floor(Math.random()*255)
            const blue = Math.floor(Math.random()*255)
            newElement.style.backgroundColor=`rgb(${red},${green},${blue})`

            darkness += 10;
            newElement.style.opacity = Math.min(1, darkness);
        })
        container.appendChild(newElement)

    }
}


btn.addEventListener('click',()=>{
     let input = parseInt(prompt("enter the number between 1 to 100"))
     if(input>100 || input<0 || input==NaN){
        alert("please enter the valid input")
        return 
     }
     createGrid(input)
})

createGrid(16)

