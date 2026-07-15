import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <div className="payment-page-container">
      <div className="payment-header">
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <span className="step completed">Sign In</span> &gt; 
          <span className="step completed">Delivery</span> &gt; 
          <span className="step active">Payment</span> &gt; 
          <span className="step">Place Order</span>
        </div>
      </div>

      <div className="payment-content">
        <div className="payment-main">
          {/* Delivery Address Review */}
          <div className="checkout-section">
            <div className="section-header">
              <h2>1. Delivery Address</h2>
              <button className="change-btn">Change</button>
            </div>
            <div className="section-body">
              <p><strong>Sajan</strong></p>
              <p>123 React Developer Street, JavaScript City</p>
              <p>Web State - 400001, India</p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="checkout-section active-section">
            <div className="section-header">
              <h2>2. Select a payment method</h2>
            </div>
            <div className="section-body payment-methods">
              
              <label className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="card" 
                  checked={selectedMethod === 'card'} 
                  onChange={() => setSelectedMethod('card')} 
                />
                <div className="option-details">
                  <span className="option-title">Credit or debit card</span>
                  <div className="card-icons">
                    <span className="card-icon visa">Visa</span>
                    <span className="card-icon mc">MasterCard</span>
                    <span className="card-icon amex">Amex</span>
                  </div>
                  {selectedMethod === 'card' && (
                    <div className="card-input-form">
                      <input type="text" placeholder="Card number" className="payment-input" />
                      <input type="text" placeholder="Name on card" className="payment-input" />
                      <div className="expiry-cvv">
                        <input type="text" placeholder="MM/YY" className="payment-input half" />
                        <input type="text" placeholder="CVV" className="payment-input half" />
                      </div>
                      <button className="add-card-btn">Add your card</button>
                    </div>
                  )}
                </div>
              </label>

              <label className={`payment-option ${selectedMethod === 'upi' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="upi" 
                  checked={selectedMethod === 'upi'} 
                  onChange={() => setSelectedMethod('upi')} 
                />
                <div className="option-details">
                  <span className="option-title">Other UPI Apps</span>
                  <p className="option-desc">Google Pay, PhonePe, Paytm and more</p>
                </div>
              </label>

              <label className={`payment-option ${selectedMethod === 'netbanking' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="netbanking" 
                  checked={selectedMethod === 'netbanking'} 
                  onChange={() => setSelectedMethod('netbanking')} 
                />
                <div className="option-details">
                  <span className="option-title">Net Banking</span>
                  <select className="bank-select" disabled={selectedMethod !== 'netbanking'}>
                    <option>Choose an Option</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                  </select>
                </div>
              </label>

              <label className={`payment-option ${selectedMethod === 'cod' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="cod" 
                  checked={selectedMethod === 'cod'} 
                  onChange={() => setSelectedMethod('cod')} 
                />
                <div className="option-details">
                  <span className="option-title">Cash on Delivery/Pay on Delivery</span>
                  <p className="option-desc">Scan & Pay at delivery available.</p>
                </div>
              </label>

              <div className="use-payment-method">
                <button className="use-method-btn">Use this payment method</button>
              </div>
            </div>
          </div>

          {/* Items and delivery */}
          <div className="checkout-section">
            <div className="section-header">
              <h2>3. Items and delivery</h2>
            </div>
            <div className="section-body">
              <p className="text-muted">Please select a payment method to review your order details.</p>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="payment-sidebar">
          <div className="order-summary-box">
            <button className="place-order-btn">Place Your Order and Pay</button>
            <p className="terms-text">By placing your order, you agree to Welcome Store's privacy notice and conditions of use.</p>
            
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Items:</span>
              <span>$149.98</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row">
              <span>Total:</span>
              <span>$149.98</span>
            </div>
            <div className="summary-row">
              <span>Promotion Applied:</span>
              <span>-$10.00</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Order Total:</span>
              <span>$139.98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
