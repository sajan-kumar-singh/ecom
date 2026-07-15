import React from 'react';
import './CartPage.css';

const CartPage = ({ cart, setCart }) => {
  const handleQuantityChange = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const handleRemove = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const total = cart.reduce((acc, item) => acc + (item.product.discount_price * item.quantity), 0);

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <p>{cart.length} items</p>
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-icon">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.main_image} alt={item.product.product_name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.product.product_name || "Premium Item"}</h3>
                  <p className="cart-item-category">{item.product.category || "General"}</p>
                  <p className="cart-item-price">${item.product.discount_price}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.product.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.product.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(item.product.id)}>
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn"
              onClick={() => {
                window.history.pushState({}, '', '/checkout');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
