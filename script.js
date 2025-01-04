const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// Addinf Click Event 
searchButton.addEventListener("click", () => {
    // Showing input field after button is clicked
    searchInput.style.display = "block";
    //Pulse animation off after the input field is displayed
    searchButton.style.animation = "none";
});