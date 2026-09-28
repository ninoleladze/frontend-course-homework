let section = document.querySelector("section");
let ul = document.querySelector("ul");

function filterFoods() {
  let selectedSpiciness = parseInt(sicxare.value);
  let filterNuts = nuts.checked;
  let filterVegan = vegan.checked;

  fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
    .then((response) => response.json())
    .then((data) => {
      let filteredProducts = data.filter((product) => {
        let spicinessMatch = isNaN(selectedSpiciness) || selectedSpiciness === -1 || product.spiciness === selectedSpiciness;
        let nutsMatch = !filterNuts || !product.hasNuts;
        let veganMatch = !filterVegan || product.isVegetarian;
        return spicinessMatch && nutsMatch && veganMatch;
      });

      section.innerHTML = "";
      filteredProducts.forEach((item) => {
        section.innerHTML += card(item);
      });
    })
    .catch((error) => console.error( error));
}

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  .then((pasuxi) => pasuxi.json())
  .then((data) => {
    console.log(data);
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
    <a onclick="addtoCart(${item.id}, ${item.price})" class="btn btn-primary">Go somewhere</a>
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