import React from 'react';
import './PromoCards.css';

import img1 from './assets/1217-Steve-Jobs-Quote-Think-Different.jpg'
import img2 from './assets/23469-Frank-Ocean-Quote-Work-hard-in-silence-let-your-success-be-your.jpg'
import img3 from './assets/29280-Neale-Donald-Walsch-Quote-Life-begins-at-the-end-of-your-comfort.jpg'
import img4 from './assets/211072.jpg'
import img5 from './assets/799856.jpg'
import img6 from './assets/1065608_ultra-hd-4k-robot-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg'
import img7 from './assets/927025.png'
import img8 from './assets/941835.jpg'
import img9 from './assets/deadpool_2_movie_funny-wallpaper-1920x1080.jpg'

const GridPromoCard = ({ title, images, linkText }) => (
  <div className="promo-card">
    <h3 className="promo-title">{title}</h3>
    <div className="promo-grid-2x2">
      {images.map((img, i) => (
        <div key={i} className="promo-grid-item">
          <img src={img.src} alt={img.label} />
          <span>{img.label}</span>
        </div>
      ))}
    </div>
    <a href="#" className="promo-link">{linkText}</a>
  </div>
);

const MainWithThumbsPromoCard = ({ title, mainImage, thumbnails }) => (
  <div className="promo-card">
    <h3 className="promo-title">{title}</h3>
    <div className="promo-main-img">
      <img src={mainImage} alt="Main" />
    </div>
    <div className="promo-thumbs">
      {thumbnails.map((img, i) => (
        <div key={i} className="promo-thumb-item">
          <img src={img} alt={`Thumb ${i}`} />
        </div>
      ))}
    </div>
  </div>
);

const PromoCards = () => {
  return (
    <div className="promo-cards-container">
      <GridPromoCard 
        title="Best Sellers in Beauty"
        images={[
          { src: img1, label: "Makeup" },
          { src: img2, label: "Skincare" },
          { src: img3, label: "Haircare" },
          { src: img4, label: "Fragrance" }
        ]}
        linkText="See more"
      />
      <MainWithThumbsPromoCard 
        title="Min. 50% off | Top home essentials from Emerging brands"
        mainImage={img5}
        thumbnails={[img6, img7, img8, img9]}
      />
      <GridPromoCard 
        title="50 - 80% off | Sports, outdoor & more"
        images={[
          { src: img6, label: "Sports & fitness" },
          { src: img7, label: "Automotive" },
          { src: img8, label: "Tools" },
          { src: img9, label: "Garden & outdoor" }
        ]}
        linkText="See all deals"
      />
      <MainWithThumbsPromoCard 
        title="Min. 30% off | Top deals from Emerging brands"
        mainImage={img3}
        thumbnails={[img1, img2, img4, img5]}
      />
    </div>
  );
};

export default PromoCards;
