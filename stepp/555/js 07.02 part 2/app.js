//! API ს თან კავშირის მეთოდები:
//? 1. GET -- სერვერზე უკვე არსებული მონაცემების წამოღება და გამოსახვა
//? 2. POST -- სერვერზე ჩვენი მონაცემის ობიექტად ატვირთვა
//? 3. ა) PUT -- არსებული ობიექტის რედაქტირება (მთლიანი ობიექტი ხელახლაა გადასაცემი)
//?    ბ) PATCH -- არსებული ობიექტის რედაქტირება (საჭიროა მხოლოდ კონკრეტული ფროფერთის განახლება)
//? 4. DELETE -- კონკრეტული ობიექტის სერვერიდან წაშლა   

let allProducts = document.querySelector(".allProducts")

fetch("https://fakestoreapi.com/products")
.then( (pasuxi) => pasuxi.json() )
.then( (data) => data.forEach( (item) => allProducts.innerHTML += cardCode(item) ))




function cardCode(item) {
    return `<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.price}$ |  Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}