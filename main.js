
document.addEventListener("DOMContentLoaded", function() {
    // Get all haircut list items
    const haircutItems = document.querySelectorAll(".haircuts li");

    // Add event listeners to each haircut item
    haircutItems.forEach((item, index) => {
        // Get the corresponding image display div
        const imageDisplay = document.getElementById(`image-display${index + 1}`);

        // Add mouseover event listener
        item.addEventListener("mouseover", function(event) {
            // Show the corresponding image display
            imageDisplay.style.display = "block";
        });

        // Add mouseout event listener
        item.addEventListener("mouseout", function() {
            // Hide the corresponding image display
            imageDisplay.style.display = "none";
        });
    });
});



























 /* document.addEventListener("DOMContentLoaded", function() {
    // Get all haircut list items
    const haircutItems = document.querySelectorAll(".haircuts li");

    // Add event listeners to each haircut item
    haircutItems.forEach((item, index) => {
        // Get the corresponding image display div
        const imageDisplay = document.getElementById(`image-display${index + 1}`);


// Add mouseover event listener
item.addEventListener("mouseover", function(event) {
    // Check screen width
    if (window.innerWidth <= 1200) {
        // Calculate the position for the image display
        const pricesContainer = document.querySelector(".prices-container");
        const pricesContainerRect = pricesContainer.getBoundingClientRect();
        const leftPosition = pricesContainerRect.left + (pricesContainerRect.width - imageDisplay.offsetWidth) / 2;
        const topPosition = pricesContainerRect.top - imageDisplay.offsetHeight - 10; // 10px above prices container
        
        // Show the corresponding image display
        imageDisplay.style.left = leftPosition + "px";
        imageDisplay.style.top = topPosition + "px";
        imageDisplay.style.display = "block";
        imageDisplay.style.zIndex = "999"; // Ensure it appears above other elements
    } else if (window.innerWidth > 1200) {
        // Calculate the position for the image display
        const listItemRect = item.getBoundingClientRect();
        const leftPosition = listItemRect.left - 320 - 20; // Adjust the value as needed
        const topPosition = listItemRect.top + window.scrollY - 1;

        // Show the corresponding image display
        imageDisplay.style.left = leftPosition + "px";
        imageDisplay.style.top = topPosition + "px";
        imageDisplay.style.display = "block";
    }
});


        // Add mouseout event listener
        item.addEventListener("mouseout", function() {
            // Hide the corresponding image display
            imageDisplay.style.display = "none";
        });
    });
}); 

 */