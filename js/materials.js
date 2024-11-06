document.addEventListener('DOMContentLoaded', () => {
  const materialsGrid = document.getElementById('materialsGrid');

  if (materialsGrid) {
    config.materials.forEach(materialItem => {
      // Create a section for each material type
      const materialSection = document.createElement('div');
      materialSection.className = 'material-section';

      // Add material name as a heading
      const materialName = document.createElement('h3');
      materialName.textContent = materialItem.material;
      materialSection.appendChild(materialName);

      // Create a grid for color swatches
      const colorGrid = document.createElement('div');
      colorGrid.className = 'materials-grid'; // Ensure the CSS class matches

      materialItem.colors.forEach(colorItem => {
        // Create a color swatch div
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'color-swatch';

        // Create and append the image
        const colorImage = document.createElement('img');
        colorImage.src = colorItem.image;
        colorImage.alt = colorItem.color;
        colorImage.onerror = () => {
          colorImage.src = "images/placeholder.jpg"; // Fallback image
          console.warn(`Image failed to load: ${colorItem.image}`);
        };

        // Create and append the color name
        const colorName = document.createElement('span');
        colorName.className = 'color-name';
        colorName.textContent = colorItem.color;

        // Create and append the stock level indicator
        const stockLevel = document.createElement('span');
        stockLevel.className = 'stock-level';

        // Determine stock status
        if (colorItem.quantity > 0) {
          stockLevel.textContent = `Stock: ${colorItem.quantity}`;
          stockLevel.classList.add('in-stock');
        } else if (colorItem.quantity === 0) {
          stockLevel.textContent = "Out of Stock";
          stockLevel.classList.add('out-of-stock');
        } else if (colorItem.quantity === -1) {
          stockLevel.textContent = "Ordered, Awaiting Arrival";
          stockLevel.classList.add('ordered');
        }

        // Append elements to the color swatch
        colorSwatch.appendChild(colorImage);
        colorSwatch.appendChild(colorName);
        colorSwatch.appendChild(stockLevel);

        // Append the color swatch to the color grid
        colorGrid.appendChild(colorSwatch);
      });

      // Append the color grid to the material section
      materialSection.appendChild(colorGrid);
      materialsGrid.appendChild(materialSection);
    });
  }
});
