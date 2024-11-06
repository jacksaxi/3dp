// gallery.js

document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.getElementById("galleryGrid");
  
    // Check if galleryConfig exists and has designs
    if (galleryConfig && galleryConfig.designs && galleryConfig.designs.length > 0) {
      galleryConfig.designs.forEach((design, index) => {
        // Create a design item container
        const designItem = document.createElement("div");
        designItem.classList.add("design-item");
  
        // Create the main image for the design (use the first image as a thumbnail)
        const img = document.createElement("img");
        img.src = design.versions[0].images[0]; // Use the first image of the first version
        img.alt = design.title;
        img.classList.add("gallery-thumbnail");
  
        // Create a title element for the design
        const title = document.createElement("h3");
        title.textContent = design.title;
  
        // Create a link to the detailed design page
        const link = document.createElement("a");
        link.href = `design-details.html?design=${index}`; // Pass the design index in the URL
        link.appendChild(img);
        link.appendChild(title);
  
        // Append the link to the design item
        designItem.appendChild(link);
  
        // Append the design item to the gallery grid
        galleryGrid.appendChild(designItem);
      });
    } else {
      // If no designs are found, display a message
      galleryGrid.innerHTML = "<p>No designs available at the moment. Please check back later!</p>";
    }
  });
  