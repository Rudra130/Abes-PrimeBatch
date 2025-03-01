

const getData = (e) => {
    const profile = e.target.value;
    const pr = fetch(`https://api.github.com/users/${profile}`);
      //fetch return the promise 
      //json()also return the promise
      
    pr.then((a)=>{
        const pr2 = a.json()
        pr2.then((data)=>{
             showUI(data)
        });
    }).catch((b)=>{
          console.log("b",b)
    });
};
    

function showUI(data){
    console.log(data)

    const {avatar_url,login,html_url}=data;
    const root = document.getElementById("cards");
    const newCard = document.createElement("div")

    newCard.id = "card";
    newCard.innerHTML=
    `<h4>${login.toUpperCase()}</h4>
    <img src ='${avatar_url}' alt='avatar'>
    <a href=${html_url}>View Profile</a>`;
    root.appendChild(newCard)
    storeData(data)
}

function storeData(data){
    const oldData = localStorage.getItem("searches");
    console.log("type of the data:",typeof(oldData))
    const arr = JSON.parse(oldData||"[]");
    //json.parse convert the json into the array object
    arr.push(data);
    localStorage.setItem("searches",JSON.stringify(arr));

}


function showhistory(){
    const oldData = localStorage.getItem("searches");
    console.log("type of the data:",typeof(oldData))
    const arr = JSON.parse(oldData || "[]");

    arr.forEach(element => {
        showUI(element)
    });
}

showhistory()




