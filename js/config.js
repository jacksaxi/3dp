// config.js
const galleryConfig = {
  designs: [
    {
      title: "Xmas Glowing Cosmetics",
      description: "Xmas Glowing Cosmetics, printed with PLA Glow.",
      versions: [
        {
          version: "ALL",
          dimensions: "-",
          images: [
            "images/flat123.png"
          ]
        },
        {
          version: "Elf",
          dimensions: "-",
          images: [
           "images/flat1.png"
          ]
        },
        {
          version: "Snowflake",
          dimensions: "-",
          images: [
            "images/flat2.png"
          ]
        },
        {
          version: "Christmas Tree",
          dimensions: "-",
          images: [
            "images/flat3.png"
          ]
        }
      ]
    },
    {
      title: "Glowing Cup Pads",
      description: "Glowing Cup Pads, printed with PLA Glow.",
      versions: [
        {
          version: "pack of 4",
          dimensions: "-",
          images: [
            "images/1729266535483.png"
          ]
        }
      ]
    },
    {
      title: "Famous Brand Cup Pads",
      description: "Famous Brand Cup Pads, printed with PLA Glow, Matte.",
      versions: [
        {
          version: "VERSACHE Pads With stand",
          dimensions: "-",
          images: [
            "images/1729266535506.png",
            "images/1729266535494.png"
          ]
        },
        {
          version: "Brand Pads With Or Without Stand",
          dimensions: "-",
          images: [
            "images/1729266535516.png",
          ]
        }
      ]
    },
    {
      title: "Modern Tea Light Holder",
      description: "Modern Tea Light Holder, printed with PLA Matte.",
      versions: [
        {
          version: "symetric",
          dimensions: "-",
          images: [
            "images/1729266570885.png"
          ]
        },
        {
          version: "growing",
          dimensions: "-",
          images: [
            "images/1729266570900.png"
          ]
        }
      ]
    },
    {
      title: "Spining Cosmetics",
      description: "Spining Cosmeticss, printed with PLA Matte.",
      versions: [
        {
          version: "Snowflake",
          dimensions: "-",
          images: [
            "images/1731080974008.png",
            "images/1731081023006.png",
            "images/1731081022992.png"
          ]
        },
        {
          version: "Elf",
          dimensions: "-",
          images: [
            "images/1731081023030.png"
          ]
        },
        {
          version: "Tree",
          dimensions: "-",
          images: [
            "images/1731081023018.png",
            "images/1731081022979.png"
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
