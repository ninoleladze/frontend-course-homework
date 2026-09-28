let h1 = document.querySelector("#countH1");

function mimateba() {
  h1.innerHTML++;
}

function gamokleba() {
  h1.innerHTML--;
}

function dareseteba() {
  h1.innerHTML = 0;
}

// ------------------------------------------------

let cardsArea = document.querySelector("#cardsArea");

let products = [
  {
    id: 1,
    brand: "Samsung",
    model: "S25",
    price: 4200,
    image:
      "https://icity.ge/wp-content/uploads/2024/09/iPhone-16-Pro-Desert-Titanium-.webp",
  },

  {
    id: 2,
    brand: "Iphone",
    model: "16Pro",
    price: 5200,
    image:
      "https://icity.ge/wp-content/uploads/2024/09/iPhone-16-Pro-Desert-Titanium-.webp",
  },
  {
    id: 3,
    brand: "POCO",
    model: "X3 Pro",
    price: 600,
    image:
      "https://xiaomi.com.ge/wp-content/uploads/2021/04/poco-x3-pro-black1.jpeg",
  },
  {
    id: 4,
    brand: "Nokia",
    model: "3110",
    price: 30,
    image:
      "https://i1.sndcdn.com/artworks-hJzOdsJvsWb7AdnK-ZlIS9w-t500x500.jpg",
  },
  {
    id: 5,
    brand: "Samsung",
    model: "S20",
    price: 1200,
    image:
      "https://elitmobi.ge/wp-content/uploads/2022/01/61XsDK3-1hL._AC_SL1000_.jpg",
  },
];

products.forEach((item) => {
  cardsArea.innerHTML += ` <div class="card">
            <img src="${item.image}" alt="">
            <h1>${item.brand} ${item.model}</h1>
            <p>${item.price}</p>
        </div>`;
});
