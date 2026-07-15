import { useState, useEffect } from 'react'
import './App.css'

import img1 from './assets/1217-Steve-Jobs-Quote-Think-Different.jpg'
import img2 from './assets/23469-Frank-Ocean-Quote-Work-hard-in-silence-let-your-success-be-your.jpg'
import img3 from './assets/29280-Neale-Donald-Walsch-Quote-Life-begins-at-the-end-of-your-comfort.jpg'
import img4 from './assets/211072.jpg'
import img5 from './assets/799856.jpg'
import img6 from './assets/1065608_ultra-hd-4k-robot-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg'
import img7 from './assets/927025.png'
import img8 from './assets/941835.jpg'
import img9 from './assets/deadpool_2_movie_funny-wallpaper-1920x1080.jpg'

import OrderPage from './OrderPage'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const products = [
    {
      main_image: img1,
      other_images: [img1, img7, img8, img6, img9],
      product_name: "Steve Jobs Quote Poster",
      category: "Motivational Posters",
      rating: 4.8,
      people_rated: 120,
      stock_available: 15,
      actual_price: 29.99,
      discount_price: 24.99,
      discount_percentage: 16,
      short_description: "Think Different. lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit testing jflkwe woojsld woeifoiue asdf",
      long_description: "A beautiful poster featuring the famous Steve Jobs quote to inspire you every day.",
      color: [{ name: "Black", hex: "#000000" }, { name: "White", hex: "#ffffff" }]
    },
    {
      main_image: img1,
      other_images: [img1, img7, img8, img6, img9],
      product_name: "",
      category: "",
      rating: 0,
      people_rated: 0,
      stock_available: 0,
      actual_price: 0,
      discount_price: 0,
      discount_percentage: 0,
      short_description: "",
      long_description: "",
      color: []
    },
    {
      main_image: img2,
      other_images: [img2, img5],
      product_name: "Frank Ocean Quote Art",
      category: "Typography Art",
      rating: 4.5,
      people_rated: 85,
      stock_available: 22,
      actual_price: 19.99,
      discount_price: 14.99,
      discount_percentage: 25,
      short_description: "Work hard in silence.",
      long_description: "Let your success be your noise with this elegant typography poster.",
      color: [{ name: "Dark Grey", hex: "#333333" }, { name: "Light Grey", hex: "#f4f4f4" }]
    },
    {
      main_image: img3,
      other_images: [img3, img5],
      product_name: "Comfort Zone Poster",
      category: "Inspirational",
      rating: 4.9,
      people_rated: 200,
      stock_available: 8,
      actual_price: 34.99,
      discount_price: 29.99,
      discount_percentage: 14,
      short_description: "Life begins at the end of your comfort zone.",
      long_description: "Step out of your comfort zone and embrace the unknown with this stunning visual reminder.",
      color: [{ name: "Navy", hex: "#1e293b" }, { name: "Slate", hex: "#e2e8f0" }]
    },
    {
      main_image: img4,
      other_images: [img5, img6, img1, img7, img8, img9],
      product_name: "Abstract Art Piece 1",
      category: "Abstract Painting",
      rating: 4.2,
      people_rated: 45,
      stock_available: 30,
      actual_price: 49.99,
      discount_price: 39.99,
      discount_percentage: 20,
      short_description: "Modern abstract art.",
      long_description: "Add a touch of modern abstraction to your living room or office.",
      color: [{ name: "Red", hex: "#ff0000" }, { name: "Green", hex: "#00ff00" }, { name: "Blue", hex: "#0000ff" }]
    },
    {
      main_image: img5,
      other_images: [img6, img1, img7, img8, img9,],
      product_name: "Abstract Art Piece 2",
      category: "Abstract Painting",
      rating: 4.7,
      people_rated: 150,
      stock_available: 5,
      actual_price: 59.99,
      discount_price: 44.99,
      discount_percentage: 25,
      short_description: "Vibrant abstract design.",
      long_description: "A vibrant and colorful abstract design sure to draw attention.",
      color: [{ name: "Orange", hex: "#f59e0b" }, { name: "Emerald", hex: "#10b981" }]
    }
  ]

  useEffect(() => {
    if (selectedProduct) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProduct, products.length]);

  const nextProduct = (e) => {
    e.stopPropagation();
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = (e) => {
    e.stopPropagation();
    setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  if (selectedProduct) {
    return (
      <OrderPage product={selectedProduct} onBack={() => setSelectedProduct(null)} />
    )
  }

  return (
    <div className="App" style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Welcome Title */}
      <div style={{ width: '100%', padding: '20px 20px 10px', boxSizing: 'border-box' }}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#333', textAlign: 'left' }}>Welcome!</h1>
      </div>

      {/* Slideshow */}
      <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          width: `${products.length * 100}%`,
          height: '100%',
          transform: `translateX(-${(currentProductIndex * 100) / products.length}%)`,
          transition: 'transform 0.5s ease-in-out'
        }}>
          {products.map((product, idx) => (
            <img
              key={idx}
              src={product.main_image}
              alt={product.product_name}
              onClick={() => setSelectedProduct(product)}
              style={{ width: `${100 / products.length}%`, height: '100%', objectFit: 'cover', cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons Below Slideshow */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px 0', width: '100%' }}>
        <button
          onClick={prevProduct}
          style={{ background: '#333', color: 'white', border: 'none', borderRadius: '4px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}
        >
          Previous
        </button>
        <button
          onClick={nextProduct}
          style={{ background: '#333', color: 'white', border: 'none', borderRadius: '4px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default App
