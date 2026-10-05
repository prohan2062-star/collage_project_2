/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* =========================
   WISHLIST
========================= */

document.querySelectorAll(".wishlist").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});


/* =========================
   SHOPPING CART
========================= */

const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

cartButton.addEventListener("click", () => {
    cartPanel.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("active");
});


document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();

        cartPanel.classList.add("active");

    });

});


function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <small>₹${item.price}</small>
            </div>

            <button onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = total;

}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================
   BOOK SEARCH
========================= */

const bookSearch = document.getElementById("bookSearch");
const searchBookBtn = document.getElementById("searchBookBtn");

searchBookBtn.addEventListener("click", searchBooks);

bookSearch.addEventListener("keyup", event => {

    if (event.key === "Enter") {
        searchBooks();
    }

});


function searchBooks() {

    const query = bookSearch.value.toLowerCase();

    document.querySelectorAll(".book-card").forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display =
            text.includes(query) ? "block" : "none";

    });

}


/* =========================
   SORT BOOKS
========================= */

document.getElementById("sortBooks").addEventListener("change", function() {

    const grid = document.getElementById("bookGrid");

    const cards = [...grid.querySelectorAll(".book-card")];

    if (this.value === "low") {

        cards.sort((a,b) =>
            Number(a.dataset.price) - Number(b.dataset.price)
        );

    }

    if (this.value === "high") {

        cards.sort((a,b) =>
            Number(b.dataset.price) - Number(a.dataset.price)
        );

    }

    cards.forEach(card => grid.appendChild(card));

});


/* =========================
   NEWSLETTER
========================= */

document.getElementById("newsletterForm").addEventListener("submit", e => {

    e.preventDefault();

    alert("Welcome to the BookNest reading community!");

    e.target.reset();

});