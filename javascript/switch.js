
const obj = {
    name:"Rudra Tiwari",
    age:22,
    address:"ghaziabad",
    occupation:"Student",
    phone:7355402136,


}


count=0

function setColor(){
    switch(count){
        case 0:
            return 'red'
            break
        case 1:
            return 'blue'
            break
        case 2:
            return 'yellow'
            break
        case 4:
            return 'green'
            break
        default:
            return 'pink'

    }
}
const ele = document.getElementById("id");
Object.entries(obj).forEach((a)=>{
    const newElement =  document.createElement("h4")
    color = setColor()
    count++
    if(count>=4){
        count=0
    }
    newElement.style.color=color
    newElement.style.fontFamily='cursive'
    newElement.innerText = a[0]+":-"+a[1]
    ele.append(newElement)
})