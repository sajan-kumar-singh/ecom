import React, { useState } from 'react';
import './OrderPage.css';

const OrderPage = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product && product.color && product.color.length > 0 ? product.color[0].hex : null
  );
  const [selectedImage, setSelectedImage] = useState(0);

  const [zoomPosition, setZoomPosition] = useState('0% 0%');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition(`${x}% ${y}%`);
  };

  return (
    <div className="product-page-container">
      <div className="product-grid">

        {/* Left Side: Product Images */}
        <div className="product-images-section">
          <div className="main-image-container">
            <div className="discount-badge">-{product ? product.discount_percentage : "0"}%</div>
            {/* Main image placeholder */}
            <div
              className="main-image-placeholder"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              style={{ position: 'relative', cursor: 'zoom-in', overflow: 'hidden' }}
            >
              {product && product.other_images && product.other_images.length > 0 ? (
                <img src={product.other_images[selectedImage]} alt="Main Product" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isHovering ? 0 : 1 }} />
              ) : (
                product && product.main_image ? (
                  <img src={product.main_image} alt="Main Product" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isHovering ? 0 : 1 }} />
                ) : null
              )}

              {isHovering && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${product && product.other_images && product.other_images.length > 0 ? product.other_images[selectedImage] : product?.main_image})`,
                    backgroundPosition: zoomPosition,
                    backgroundSize: '250%',
                    backgroundRepeat: 'no-repeat',
                    pointerEvents: 'none'
                  }}
                />
              )}
            </div>
          </div>
          <div className="thumbnail-list">
            {product && product.other_images && product.other_images.map((imgUrl, idx) => (
              <div
                key={idx}
                className={`thumbnail-placeholder ${selectedImage === idx ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="product-details-section">
          <div className="product-meta">
            <span className="category-tag">{product ? product.category : "Category"}</span>
            <span className="stock-status">
              <span className="dot"></span> In Stock
            </span>
          </div>

          <h1 className="product-title">
            {product ? product.product_name : "Product Name"}
          </h1>

          <div className="product-reviews">
            <span className="stars">
              {product ? '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)) : "★★★★★"}
            </span>
            <span className="rating-score">{product ? product.rating : "0.0"}</span>
            <span className="rating-count">{product ? product.people_rated : "0"} ratings</span>
            <span className="remaining-count">{product ? product.stock_available : "0"} remaining</span>
          </div>

          <div className="product-price-box">
            <span className="current-price">${product ? product.discount_price : "0.00"}</span>
            <span className="original-price">${product ? product.actual_price : "0.00"}</span>
            <span className="save-badge">Save {product ? product.discount_percentage : "0"}%</span>
          </div>

          <p className="product-description">
            {product ? product.short_description : "Description"}
          </p>

          {product && product.color && product.color.length > 0 && (
            <div className="color-selector">
              <p><strong>Color</strong> — {product.color.find(c => c.hex === selectedColor)?.name}</p>
              <div className="color-options">
                {product.color.map(colorObj => (
                  <button
                    key={colorObj.hex}
                    className={`color-btn ${selectedColor === colorObj.hex ? 'selected' : ''}`}
                    style={{ backgroundColor: colorObj.hex }}
                    onClick={() => setSelectedColor(colorObj.hex)}
                    aria-label={colorObj.name}
                  >
                    {selectedColor === colorObj.hex && <span className="checkmark"></span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="action-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={() => onAddToCart && onAddToCart(product, quantity)}>
              Add to Cart
            </button>
            <button className="wishlist-btn">♡</button>
          </div>

          <button 
            className="purchase-instantly-btn"
            onClick={() => {
              window.history.pushState({}, '', '/checkout');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            ⚡ Purchase Instantly
          </button>

          <div className="features-grid">
            <div className="feature-item">
              <span className="icon">🚚</span>
              <span>Free shipping $75+</span>
            </div>
            <div className="feature-item">
              <span className="icon">🔄</span>
              <span>45-day returns</span>
            </div>
            <div className="feature-item">
              <span className="icon">🛡️</span>
              <span>3-year warranty</span>
            </div>
            <div className="feature-item">
              <span className="icon">🎧</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderPage;
