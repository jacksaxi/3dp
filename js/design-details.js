// design-details.js

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const designIndex = urlParams.get("design"); // Get the design index from the URL
  
    const design = galleryConfig.designs[designIndex];
    if (!design) {
      document.body.innerHTML = "<p>Design not found. Please go back to the gallery.</p>";
      return;
    }
  
    // Set the design title and description
    document.getElementById("designTitle").textContent = design.title;
    document.getElementById("designDescription").textContent = design.description;
  
    // Get the version details container
    const versionDetails = document.getElementById("versionDetails");
  
    // Loop through all versions and display them
    design.versions.forEach((version, index) => {
      // Create a container for each version
      const versionContainer = document.createElement("div");
      versionContainer.classList.add("version-container");
  
      // Add version title
      const versionTitle = document.createElement("h3");
      versionTitle.textContent = `Version: ${version.version}`;
      versionContainer.appendChild(versionTitle);
  
      // Add dimensions
      const dimensions = document.createElement("p");
      dimensions.textContent = `Dimensions: ${version.dimensions}`;
      versionContainer.appendChild(dimensions);
  
      // Add images
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("version-images");
      version.images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${design.title} ${version.version}`;
        img.classList.add("zoomable-image");
        imageContainer.appendChild(img);
      });
      versionContainer.appendChild(imageContainer);
  
      // Append each version container to the version details section
      versionDetails.appendChild(versionContainer);
    });
  
    // Function to enable image zoom
    addImageZoom();
    
    function addImageZoom() {
      const images = document.querySelectorAll(".zoomable-image");
      images.forEach(image => {
        image.onclick = () => {
          const zoomWindow = document.createElement("div");
          zoomWindow.classList.add("zoom-window");
          zoomWindow.onclick = () => zoomWindow.remove();
  
          const zoomedImage = document.createElement("img");
          zoomedImage.src = image.src;
          zoomedImage.classList.add("zoomed-image");
  
          zoomWindow.appendChild(zoomedImage);
          document.body.appendChild(zoomWindow);
        };
      });
    }
  });
  