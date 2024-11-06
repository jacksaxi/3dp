// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    document.title = config.siteName;
    document.body.style.color = config.themeColors.text;
  
    // Generate 3D Print Showcase
    const projectGrid = document.getElementById('projectGrid');
    if (projectGrid) {
      config.prints.forEach(print => {
        const card = document.createElement('div');
        card.className = 'project-card';
  
        const img = document.createElement('img');
        img.src = print.image;
        img.alt = print.title;
  
        const title = document.createElement('h3');
        title.textContent = print.title;
  
        const description = document.createElement('p');
        description.textContent = print.description;
  
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        projectGrid.appendChild(card);
      });
    }
  
    // Generate Features List
    const featureList = document.getElementById('featureList');
    if (featureList) {
      config.features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.className = 'feature-item';
  
        const icon = document.createElement('i');
        icon.className = feature.icon;
  
        const title = document.createElement('span');
        title.textContent = feature.title;
  
        listItem.appendChild(icon);
        listItem.appendChild(title);
        featureList.appendChild(listItem);
      });
    }
  
    console.log(`Welcome to ${config.siteName}! Configuration applied.`);
  });
  