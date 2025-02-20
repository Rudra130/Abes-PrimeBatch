const data = [
    {name:"Anuj",city:"Delhi",email:"anuj@abes.edu.in"},
    {name:"Rakesh",city:"Mumbai",email:"rakesh@abes.edu.in"},
    {name:"samarth",city:"basti",email:"samarth@abes.edu.in"},
    {name:"Rudra",city:"Gzb",email:"rudra@abes.edu.in"},
];

const ele = document.getElementById("container")
const body = document.querySelector('body')

data.forEach((a)=>{

    const newElement = document.createElement('h4');

    newElement.addEventListener("click",()=>{
        newElement.style.backgroundColor=getRandomColor();
    },false)


    newElement.className='card'
    newElement.innerHTML=`
    <h4>${a.name}</h4>
    <p class='text'>${a.city}</p>
    <h6>${a.email}</h6>
    `;
    ele.appendChild(newElement)

})


const btn = document.getElementById('button')
btn.addEventListener('click',handleBackGroundColor,true)
  
function handleBackGroundColor(){
      body.style.backgroundColor=getRandomColor()
}

function getRandomColor(){
    const red=  Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}

const textElement = document.querySelectorAll('.text')

textElement.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        e.style.backgroundColor=getRandomColor(); 
        event.stopPropagation()
},false)
})


