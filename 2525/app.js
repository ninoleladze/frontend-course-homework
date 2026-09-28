let section = document.querySelector("section");
let ul = document.querySelector("ul");

let sicxare = document.querySelector("#sicxare")
let nuts = document.querySelector("#nuts")
let vegan = document.querySelector("#vegan")

function filterFoods() {
    console.log(sicxare.value);
    console.log(nuts.checked);
    console.log(vegan.checked);
    
    
}

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  .then((pasuxi) => pasuxi.json())
  .then((data) => {
  
    data.forEach(
      (item) =>
        (ul.innerHTML += `<li onclick="getfoodByID(${item.id})"> ${item.name} </li>`)
    );
  });

function getAllCards() {
  section.innerHTML = "";
  fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
    .then((pasuxi) => pasuxi.json())
    .then((data) => data.forEach((item) => (section.innerHTML += card(item))));
}

getAllCards();

function getfoodByID(id) {
  section.innerHTML = "";
  fetch(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
    .then((pasuxi) => pasuxi.json())
    .then((data) =>
      data.products.forEach((item) => (section.innerHTML += card(item)))
    );
}

function card(item) {
  return `<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"> ${item.price}$ Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onclick="addtoCart(${item.id}, ${item.price})" class="btn btn-primary">add </a>
  </div>
</div>`;
}


function addtoCart(id, price) {
    let cartInfo = {
        "quantity": 1,
        "price": price,
        "productId": id
      }

     fetch("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
        method: "POST",
        headers: {
            accept: "text/plain",
            "Content-Type": "application/json"
        },
        body : JSON.stringify(cartInfo)
     }).then( pasuxi => pasuxi.text() )
     .then( () => {
        console.log("daemata");
        
     })
      
    
}