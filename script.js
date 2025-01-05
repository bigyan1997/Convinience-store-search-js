const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchFieldContainer = document.getElementById("searchFieldContainer");

// Adding Click Event
searchButton.addEventListener("click", () => {
  searchInput.style.display = "block"; // Showing input field after button is clicked
  searchButton.style.animation = "none"; // making pulse animation off after the input field is displayed
});

//List of products to display
const products = [
  {
    name: "Apple",
    description: "Fresh and juicy",
    price: 1.2,
    category: "Fresh Produce",
  },
  {
    name: "Banana",
    description: "Rich in potassium",
    price: 0.8,
    category: "Fresh Produce",
  },
  {
    name: "Orange",
    description: "Citrus and refreshing",
    price: 1.5,
    category: "Fresh Produce",
  },
  {
    name: "Milk",
    description: "Dairy, fresh and pure",
    price: 2.5,
    category: "Dairy",
  },
  {
    name: "Bread",
    description: "Soft and fresh",
    price: 1.9,
    category: "Bakery",
  },
  {
    name: "Eggs (12 Pack)",
    description: "Freshly laid eggs",
    price: 3.5,
    category: "Grocery",
  },
  {
    name: "Cheese",
    description: "Creamy and delicious",
    price: 4.0,
    category: "Dairy",
  },
];

function displayProducts(filteredProducts) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear existing products

  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");

    productElement.innerHTML = `
            <strong>${product.name}</strong>
            <span>${product.description}</span>
            <span class="price">$${product.price.toFixed(2)}</span>
        `;

    productList.appendChild(productElement);
  });
}

// Function to filter products based on search input
function filterProducts(query) {
  const lowerCaseQuery = query.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      product.price.toString().includes(lowerCaseQuery)
    );
  });
  displayProducts(filteredProducts);
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", (event) => {
  filterProducts(event.target.value); // Filter products as user types
});

//Clears the input field
const refreshButton = document.getElementById("refreshButton");
refreshButton.style.animation = "none";
refreshButton.addEventListener("click", () => {
  searchInput.value = "";
  displayProducts(products);
});

// Display all products on page load
window.onload = () => {
  displayProducts(products);
};
