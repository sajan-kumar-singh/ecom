import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      
      <div className="profile-grid">
        {/* Left Column: Navigation or Summary */}
        <div className="profile-sidebar">
          <div className="profile-card user-info-card">
            <img src="https://ui-avatars.com/api/?name=Sajan&background=2563eb&color=fff&size=150" alt="Profile" className="profile-photo" />
            <h2>Sajan</h2>
            <p className="profile-email">sajan@example.com</p>
            <span className="profile-badge">Premium Member</span>
          </div>
          
          <nav className="profile-nav">
            <ul>
              <li className="active">👤 Personal Info</li>
              <li>📦 My Orders</li>
              <li>📍 Saved Addresses</li>
              <li>💳 Payment Options</li>
              <li>🎧 Raise Issue</li>
            </ul>
          </nav>
        </div>

        {/* Right Column: Detailed Sections */}
        <div className="profile-content">
          <section className="profile-section">
            <div className="section-header">
              <h2>Personal Information</h2>
              <button className="edit-btn">Edit</button>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>Sajan</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>sajan@example.com</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>+91 9876543210</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>Male</p>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <div className="section-header">
              <h2>Default Address</h2>
              <button className="edit-btn">Add New</button>
            </div>
            <div className="address-card">
              <p><strong>Home</strong></p>
              <p>123 React Developer Street</p>
              <p>JavaScript City, Web State - 400001</p>
              <p>India</p>
            </div>
          </section>

          <section className="profile-section">
            <div className="section-header">
              <h2>Recent Orders</h2>
              <button className="edit-btn">View All</button>
            </div>
            <div className="order-list">
              <div className="order-item">
                <div className="order-details">
                  <p className="order-id">Order #ORD-20260715</p>
                  <p className="order-date">Placed on July 15, 2026</p>
                </div>
                <div className="order-status processing">Processing</div>
                <div className="order-price">$49.99</div>
              </div>
            </div>
          </section>
          
          <section className="profile-section">
            <div className="section-header">
              <h2>Payment Options</h2>
              <button className="edit-btn">Add Card</button>
            </div>
            <div className="payment-card">
              <div className="card-icon">💳</div>
              <div className="card-details">
                <p><strong>Visa ending in 4242</strong></p>
                <p>Expires 12/28</p>
              </div>
            </div>
          </section>

          <section className="profile-section support-section">
            <div className="section-header">
              <h2>Need Help?</h2>
            </div>
            <p>Have an issue with an order or need general support?</p>
            <button className="raise-issue-btn">Raise an Issue</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
