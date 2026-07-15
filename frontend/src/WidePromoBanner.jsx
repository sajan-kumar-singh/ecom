import React from 'react';
import './WidePromoBanner.css';

import img1 from './assets/1217-Steve-Jobs-Quote-Think-Different.jpg'
import img2 from './assets/23469-Frank-Ocean-Quote-Work-hard-in-silence-let-your-success-be-your.jpg'
import img3 from './assets/29280-Neale-Donald-Walsch-Quote-Life-begins-at-the-end-of-your-comfort.jpg'
import img4 from './assets/211072.jpg'
import img5 from './assets/799856.jpg'
import img6 from './assets/1065608_ultra-hd-4k-robot-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg'
import img7 from './assets/927025.png'

const WidePromoBanner = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="wide-promo-container">
      <div className="wide-promo-header">
        <h2>Up to 80% off | Trending handcrafted treasures from artisans</h2>
        <a href="#" className="wide-promo-link">See all offers</a>
      </div>
      <div className="wide-promo-scroll-area">
        {images.map((img, index) => (
          <div key={index} className="wide-promo-item">
            <img src={img} alt={`Trending ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidePromoBanner;
