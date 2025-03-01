
let data = [
    { id: '1', name: 'Rudra', city: 'Meerut', email: 'rudra@gmail.com' },
    { id: '2', name: 'Samarth', city: 'Darjaling', email: 'samarth@gmail.com' },
    { id: '3', name: 'Shubham', city: 'Mumbai', email: 'shubham@gmail.com' },
    { id: '4', name: 'Aman', city: 'Mumbai', email: 'aman@gmail.com' },
];

const root = document.getElementById("root")
const search = document.getElementById('search')

const showCard = (arr) => {
    root.innerHTML = "";
    arr.forEach((element,idx) => {
       
        const card = document.createElement("div")
        card.classList.add('card')
        card.innerHTML = `<h4>${element.name}</h4>
                 <p>${element.city}</p>
                 <button onClick="deleteCard(event,${idx})">Delete</button>`


        root.appendChild(card)
    });
}

const handleSelect = (e) => {
    const selectedCity = e.target.value;
    const newData = data.filter((e) => e.city === selectedCity
    )
    showCard(newData)
}
search.addEventListener('change', handleSelect)

const deleteCard = (e, id) => {
    e.target.remove();
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
    }
    showCard(data);
}

showCard(data);
