document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Initialize cart from localStorage

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = getProductDetails(button);
            addToCart(product);
        });
    });

    // Function to get product details
    function getProductDetails(button) {
        const productDiv = button.closest(".product");
        const name = productDiv.querySelector("h3").textContent;
        const priceText = productDiv.querySelector("p").textContent;
        const price = parseFloat(priceText.replace("GH₵", "").trim());

        return { name, price, quantity: 1 };
    }

    // Function to add product to cart
    function addToCart(product) {
        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if product exists
        } else {
            cart.push(product); // Add new product to the cart
        }

        saveCartToLocalStorage();
        updateCartUI();
        alert("Item added to cart!"); // Notify user
    }

    // Function to save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Function to update cart UI and show items
    function updateCartUI() {
        const cartItemsContainer = document.querySelector("#cart-items");
        const cartTotalContainer = document.querySelector("#cart-total");

        if (!cartItemsContainer || !cartTotalContainer) return; // Exit if UI elements don't exist

        let cartContent = "";
        let total = 0;

        cart.forEach((item) => {
            total += item.price * item.quantity;
            cartContent += `<li>${item.name} - GH₵ ${item.price} x ${item.quantity}</li>`;
        });

        // Update cart section
        cartItemsContainer.innerHTML = cartContent;
        cartTotalContainer.textContent = `Total: GH₵ ${total.toFixed(2)}`;
    }

    // Update UI on page load
    updateCartUI();
});
document.addEventListener("DOMContentLoaded", function () {
    // Clear Cart Button
    const clearCartButton = document.querySelector("#clear-cart");

    // Function to clear cart
    clearCartButton.addEventListener("click", () => {
        // Clear cart array if stored in memory
        cart = [];

        // Clear cart items from localStorage (if used)
        localStorage.removeItem('cartItems');

        // Update the UI
        document.querySelector("#cart-items").innerHTML = "";
        document.querySelector("#cart-total").textContent = "0.00";

        alert("Cart has been cleared!");
    });
});
