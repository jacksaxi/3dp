// config.js
const galleryConfig = {
  designs: [
    {
      title: "Xmas Glowing",
      description: "This is a detailed description of Xmas Glowing, outlining its features and materials used.",
      versions: [
        {
          version: "ALL",
          dimensions: "Φ 195 mm*H 170 mm",
          images: [
            "images/flat123.png"
          ]
        },
        {
          version: "ELF",
          dimensions: "Φ 150 mm*H 130 mm",
          images: [
           "images/flat1.png"
          ]
        },
        {
          version: "",
          dimensions: "Φ 100 mm*H 90 mm",
          images: [
            "images/flat2.png"
          ]
        },
        {
          version: "D",
          dimensions: "Φ 70 mm*H 60 mm",
          images: [
            "images/flat3.png"
          ]
        }
      ]
    },
    {
      title: "Cloth-04",
      description: "This is a detailed description of Cloth 04, outlining its features and materials used.",
      versions: [
        {
          version: "A",
          dimensions: "Φ 225 mm*H 180 mm",
          images: [
            "images/1729266478078.png"
          ]
        },
        {
          version: "B",
          dimensions: "Φ 160 mm*H 135 mm",
          images: [
            "images/1729266478078.png"
          ]
        },
        {
          version: "C",
          dimensions: "Φ 105 mm*H 88 mm",
          images: [
            "images/1729266478078.png"
          ]
        }
      ]
    }
    // Add more designs as needed
  ]
};



const config = {
    siteName: "Luxurious 3D Printed",
        themeColors: {
        primary: "#007BFF",
        secondary: "#444",
        background: "#f4f4f4",
        text: "#333"
        },
        fonts: {
        bodyFont: "Arial, sans-serif",
        headingFont: "Georgia, serif"
        },
        contactEmail: "billart166@gmail.com",
    
        // Array for 3D Prints
        prints: [
        {
            title: "3D Print 1",
            image: "images/print1.jpg",
            description: "A stunning 3D printed vase, perfect for home decor."
        },
        {
            title: "3D Print 2",
            image: "images/print2.jpg",
            description: "A detailed model of a futuristic robot."
        },
        {
            title: "3D Print 3",
            image: "images/print3.jpg",
            description: "An elegant 3D printed phone stand with a minimalist design."
        }
        ],
    
        // New Array for Features
        features: [
        {
            icon: "fas fa-cube",
            title: "High-quality 3D Prints"
        },
        {
            icon: "fas fa-paint-brush",
            title: "Custom Designs"
        },
        {
            icon: "fas fa-users",
            title: "Community Support"
        },
        {
            icon: "fas fa-palette",
            title: "Multiple Colors"
        }, 
        {
            icon: "fas fa-layer-group",
            title: "Multiple Materials"
        }
        ],
        materials: [
          {
            material: "PLA Matte",
            colors: [
              { color: "Matte White", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Ivory-White_700x.png?v=1710931478" },
              { color: "Matte Purple", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Lilac-Purple_700x.png?v=1717491277" },
              { color: "Matte Black", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Charcoal_700x.png?v=1717491277" },
              { color: "Matte Dark Blue", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/files/plamattedark_3_700x.png?v=1717491277" },
              { color: "Matte Desert Tan", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/files/PLAMattedeserttan2_700x.png?v=1717491277" },
              { color: "Matte Red", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Scarlet-Red_700x.png?v=1717491277" },
              { color: "Matte Green", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Grass-Green_700x.png?v=1717491277" },
              { color: "Matte Yellow", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Yellow_700x.png?v=1717491277" },
              { color: "Matte Pink", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Sakura-Pink_700x.png?v=1717491277" },
              { color: "Matte Orange", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Matte_Mandarine-Orange_700x.png?v=1717491277" }
              // Add more colors as needed
            ]
          },
          {
            material: "PLA",
            colors: [
              { color: "PLA Glow", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/files/4fefbcd44633bcd5e4f4663eafb78c3c_cb3f9dbb-235b-4e7d-83ab-6cbecb7aa5bf_700x.png?v=1715324275" },
              { color: "PLA Marble", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/products/PLA-Marble_White_700x.png?v=1717464204" }
            ]
          },
          {
            material: "PETG",
            colors: [
              { color: "PETG Black", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/files/PETG_HF_6_700x.jpg?v=1721201479" },
              { color: "PETG White", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/files/PETG_HF_7_700x.jpg?v=1721201479" },
              { color: "PETG Forest Green", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/files/PETGHFNEWCOLOR_6_700x.jpg?v=1728360455" },
              { color: "PETG Cream", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/files/PETGHFNEWCOLOR_5_700x.jpg?v=1728360455" },
              { color: "PETG Translucent", quantity: 1, image: "https://eu.store.bambulab.com/cdn/shop/files/JP34951_dfb10fec-368d-47a7-8bd8-bb506498a9bd_700x.jpg?v=1705040347" }
            ]
          },
          {
            material: "PLA Silk",
            colors: [
              { color: "Silk Gold", quantity: -1, image: "https://eu.store.bambulab.com/cdn/shop/files/SilkGold_700x.png?v=1717404408" },
              { color: "Silk Silver", quantity: -1, image: "https://eu.store.bambulab.com/cdn/shop/files/SilkSilver_700x.png?v=1717404730" },
              { color: "Silk Copper", quantity: 0, image: "https://eu.store.bambulab.com/cdn/shop/files/SilkCopper_700x.png?v=1717404408" }
              // Add more colors as needed
            ]
          }
          // Add more material categories as needed
        ]
      };
