document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inventoryForm");

    form.addEventListener("submit", (event) => {
        const stockItem = document.getElementById("stockItem").value.trim();
        const supplierRef = document.getElementById("supplierRef").value.trim();
        const price = parseFloat(document.getElementById("price").value);
        const quantity = parseInt(document.getElementById("quantity").value);

        // Validate stock item
        if (stockItem === "" || !/^[a-zA-Z0-9 ]+$/.test(stockItem)) {
            alert("Stock item must only contain letters, numbers, and spaces.");
            event.preventDefault();
            return;
        }

        // Validate supplier reference
        if (supplierRef === "" || supplierRef.length > 16 || !/^[a-zA-Z0-9]+$/.test(supplierRef)) {
            alert("Supplier reference must be alphanumeric and up to 16 characters.");
            event.preventDefault();
            return;
        }

        // Validate price
        if (isNaN(price) || price <= 0) {
            alert("Price must be a positive number.");
            event.preventDefault();
            return;
        }

        // Validate quantity
        if (isNaN(quantity) || quantity <= 0) {
            alert("Quantity must be a positive whole number.");
            event.preventDefault();
            return;
        }

        // Successful validation
        alert("Form submitted successfully!");
    });
});
