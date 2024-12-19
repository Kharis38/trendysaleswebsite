document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const cardNumber = document.getElementById("card-number").value;
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        // Basic validation
        if (!name || !email || !address || !cardNumber || !expiry || !cvv) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate a successful payment
        alert("Payment successful! Thank you for your purchase.");
        window.location.href = "thankyou.html"; // Redirect to a thank-you page
    });
});
